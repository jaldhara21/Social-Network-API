// Import the 'express' module
const express = require("express");
const db = require("./config/connection");
const routes = "./routes";

//Set environment variables
const PORT = process.env.PORT || 3001;
const app = express();

// Middleware to parse incoming data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// connect to the MongoDB database, start the server and listen on the port
db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
