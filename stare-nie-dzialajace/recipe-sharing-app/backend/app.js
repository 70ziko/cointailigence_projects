const express = require('express'); // Importing express module
const path = require('path'); // Importing path module
const app = express(); // Creating express application

const hgi_express = require('hgi-express'); // Importing hgi-express module

app.use(express.json()); // Use express's built-in middleware function to parse incoming requests with JSON payloads
app.use(hgi_express.debugMiddleware); // Use hgi-express's debugMiddleware for logging

const basePath = '/' + path.basename(process.cwd()); // Setting the base path for the application

app.use(basePath + '/api', require('./api')); // Setting up routes for API

app.use(hgi_express.errorMiddleware); // Use hgi-express's errorMiddleware for error handling
app.use(hgi_express.notFoundMiddleware); // Use hgi-express's notFoundMiddleware for handling 404 errors

app.listen(80, () => console.log('Listening on port 80!')); // Starting the server on port 80

module.exports = app; // Exporting the app
