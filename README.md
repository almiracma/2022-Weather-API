# 2022-Weather-API

// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes

// Start up an instance of app

/_ Middleware_/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server

//This project has made me debug every possible way for two days only
// to realize that I wasn't actually restarting my server
// everytime I make changes to my code.
// This is such a lesson learned I will NEVER forget.
