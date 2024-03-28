# GyanGrove

Node.js: Node.js provides a lightweight and efficient runtime environment for building server-side applications, making it well-suited for developing RESTful services.

Express.js: Express.js is a popular web application framework for Node.js, providing a robust set of features for building web servers and APIs. It simplifies the process of defining routes, handling requests, and managing middleware.

MySQL: Chosen as the relational database management system for storing event data. And it used for getting events from 14 days later by using between statement

Axios: Axios is a popular HTTP client for Node.js that simplifies making HTTP requests to external APIs. It will be useful for fetching weather and distance data from the provided external APIs.


dotenv: dotenv is a module that loads environment variables from a .env file into process.env. It's useful for securely managing sensitive information like API keys.

## Prerequisites:
1.Node JS installed in my system.
2.later i installed packages like express,axios and dotenv.
3.installed mysql to interact with database and manage events.
4.I ensure that the api keys,database information i accessed from .env for security.
5.I implemented  MVC (Model-View-Controller) architecture it helps organize and structure applications.

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
My API provides a user can get events near by him with 14 days of period.

## Base URL
http://localhost:3099/events/find

## Error Handling
Errors are returned in JSON format with appropriate HTTP status codes.

### POST/events/find?page=1
Retrieve events based on user location and date.
page=1 This is query params a user can get 10 events in one 1 page

- Parameters:
  - `latitude` (required, float): Latitude of the user's location.
  - `longitude` (required, float): Longitude of the user's location.
  - `date` (required, string): Date in YYYY-MM-DD format.
   
### To ADD events
This API is to add events in the database

## Base URL
http://localhost:3099/addEvent

## Error Handling
Errors are returned in JSON format with appropriate HTTP status codes.

### POST/addEvent
Add Events to the database which a user can enter

- Parameters:
 - `Event_Name` (required, string): Name of the event.
- `city_Name` (required, string): City of the event.
- `date` (required, string): Date of the event in YYYY-MM-DD format.
- `time` (required, string): Time of the event.
- `latitude` (required, float): Latitude of the event location.
- `longitude` (required, float): Longitude of the event location.
   

