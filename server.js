// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Express to run server and routes
const express = require("express");
// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require("body-parser");

/* Middleware*/

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

// Initialize the main project folder
app.use(express.static("website"));

// Spin up the server
const port = 8000;

const server = app.listen(port, () => {
  console.log(`Listening at : ${port}`);
});

// longer way to write the function

// const server = app.listen(port, listening);

// function listening() {
//     console.log(`Listening at: ${port}`)
// }

// Callback to debug

// Initialize all route with a callback function

// Callback function to complete GET '/all'
app.get("/all", getData);

function getData(req, res) {
  res.send(projectData);
}

// Post Route
app.post("/addData", addData);

function addData(req, res) {
  let data = req.body;
  newEntry = {
    temp: data.temp,
    date: data.date,
    content: data.content,
  };

  projectData = newEntry;
  res.send(projectData);
  console.log(projectData);

  //   projectData.push(temp, date, feelings);
}
