# GyanGrove

# Why Node JS
Node.js: Node.js provides a lightweight and efficient runtime environment for building server-side applications, making it well-suited for developing RESTful services.

# why Express
Express.js: Express.js is a popular web application framework for Node.js, providing a robust set of features for building web servers and APIs. It simplifies the process of defining routes, handling requests, and managing middleware.

# why mysql
MySQL: Chosen as the relational database management system for storing event data and  manipulating and updating the events data

Axios: Axios is a popular HTTP client for Node.js that simplifies making HTTP requests to external APIs. It will be useful for fetching weather and distance data from the provided external APIs.

# Why dotenv
dotenv: dotenv is a module that loads environment variables from a .env file into process.env. It's useful for securely managing sensitive information like API keys.

## Prerequisites:
1.Node JS installed in system.
2.later  installed packages like express,axios and dotenv(npm packages).
3.installed mysql to interact with database and manage events.
4.I ensure that the api keys,database information i accessed from .env for security.
5.I implemented  MVC (Model-View-Controller) architecture it helps organize and structure applications.

## How to set up to and run the project in your system?
1.Firstly open my github repo url and then need to clone the repo in your system
2.open the code into vs code(IDE)
3.install the node modules and npm packages as per list in the pacakge.json
4.Run the project with node index.js.
5.Access the events via http://localhost:3099/events/find?page=1
6.To add events use http://localhost:3099/addEvent

## project Structure
project-root/
│
├── controllers/
│   └── eventController.js
│
├── models/
│   └── eventModel.js
│
├── routes/
│   └── route.js
│
├── data/
│   └── eventdb.js
│
├── .env
├── .gitignore
├── index.js
├── package.json
└── README.md

API Documents:
-------------
## Introduction
 API provides a user can get events near by him with 14 days of period.

## Base URL
Method: POST
http://localhost:3099/

## Error Handling
Errors are returned in JSON format with appropriate HTTP status codes.

## End points
events/find?page=1
url:http://localhost:3099/events/find?page=1


### POST/events/find?page=1
Retrieve events based on user location and date.


- body params in raw json format:
  - `latitude` (required, float): Latitude of the user's location.
  - `longitude` (required, float): Longitude of the user's location.
  - `date` (required, string): Date in YYYY-MM-DD format.
- query params
  - page=1 : by using this we can get 10 event details in one page 
   
### To ADD events
This API is to add events in the database

## End points
addEvent 
url:http://localhost:3099/addEvent

## Error Handling
Errors are returned in JSON format with appropriate HTTP status codes.

### POST
Add Events to the database which a user can enter

- body parameters in raw json format:
 - `Event_Name` (required, string): Name of the event.
- `city_Name` (required, string): City of the event.
- `date` (required, string): Date of the event in YYYY-MM-DD format.
- `time` (required, string): Time of the event.
- `latitude` (required, float): Latitude of the event location.
- `longitude` (required, float): Longitude of the event location.
   

