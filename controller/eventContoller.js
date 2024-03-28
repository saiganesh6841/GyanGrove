const { default: axios } = require('axios');
const eventDetails = require('../model/eventModel');

const userController = {
    eventsStore: async (req, res) => {
        try {
          const {latitude,longitude,date}=req.body

          const startDate = new Date(date); // Convert the date string to a Date object
          const endDate = new Date(date);
          endDate.setDate(endDate.getDate() + 14);
          const startDateString = startDate.toISOString().split('T')[0]; 
          const endDateString = endDate.toISOString().split('T')[0];

            const data = await eventDetails.getAllEvents(startDateString,endDateString);
            const total_events=await eventDetails.countAllEvents(startDateString,endDateString)
            // console.log(total_events)

            let newData = data.map(obj => {
            
                const { time,latitude, longitude, ...newObj } = obj;
              return newObj;
          });
          
          
            const dates = newData.map(item => item.date);
            const cities = newData.map(item => item.city_name);
            const latitude2=data.map(item=>item.latitude)
            const longitude2=data.map(item=>item.longitude)
           
            
            // const longitude1=req.body
            // console.log(latitude)
            // console.log(longitude)
            // console.log(date)
            const { WEATHER_API_CODE } = process.env;
            const {Distance_API_CODE}=process.env
            // console.log(Distance_API_CODE)
            const weatherPromises = cities.map((city, index) => {
                return axios.get(`https://gg-backend-assignment.azurewebsites.net/api/Weather?code=${WEATHER_API_CODE}&city=${city}&date=${date}`)
                    .then(response => response.data)
                    .catch(error => { throw error; });
            });

            const distanceMeasure=latitude2.map((latitude,index)=>{
              return axios.get(`https://gg-backend-assignment.azurewebsites.net/api/Distance?code=${Distance_API_CODE}&latitude1=${latitude}&longitude1=${longitude}&latitude2=${latitude}&longitude2=${longitude2[index]}`)
              .then(response => response.data)
              .catch(error => { throw error; });
            })

            let distancing=await Promise.all(distanceMeasure)

            let dd= await Promise.all(weatherPromises)
            // console.log(dd)

            const eventsWithWeather = newData.map((event, index) => {
                   
                      return { ...event, weather: dd[index].weather,distance:distancing[index].distance };
                  });
                  // console.log(eventsWithWeather)
                  const pageSize = 10;
                  const totalPages = Math.ceil(eventsWithWeather.length / pageSize);
                  const page = req.query.page || 1;
                  const start = (page - 1) * pageSize;
                  const end = start + pageSize;
                  const paginatedEvents = eventsWithWeather.slice(start, end);
      
                  res.status(200).json({
                      events: paginatedEvents,
                      page: parseInt(page),
                      pageSize: pageSize,
                      totalEvents: total_events[0].total_events,
                      totalPages: totalPages
                  });
        } catch (error) {
            console.error(error);
            res.status(500).json({ status: "failed", error: error.message });
        }
    },

    eventsAdd:async(req,res)=>{
      try {
        const { event_name, city_name, date, time, latitude, longitude } = req.body;

        if (!event_name || !city_name || !date || !latitude || !longitude) {
          return res.status(400).json({ status: "failed", error: "Missing required fields" });
      }
      // Validate date format (YYYY-MM-DD)
      const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
      if (!dateRegex.test(date)) {
          return res.status(400).json({ status: "failed", error: "Invalid date format. Please use YYYY-MM-DD" });
      }
        await eventDetails.addEvents(event_name, city_name, date, time, latitude, longitude);
        res.status(200).json({ status: "success", message: "Event added successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: "failed", error: error.message });
    }
    }

};

module.exports = userController;
