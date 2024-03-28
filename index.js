
require('dotenv').config();
let express=require('express')
const cors = require('cors');
const dotenv = require('dotenv');

let app=express()
app.use(express.json())
app.use(cors());

const router=require('./routes/route');

app.use(router)

// console.log(process.env.PORT);

const PORT = process.env.PORT 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});