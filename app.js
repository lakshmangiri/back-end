// Get dotenv to use environmental variables
const dotenv =  require('dotenv');
dotenv.config()
// Create Express
const express = require('express');
// Create mongoose
const mongoose = require('mongoose');

// Make the express into an App
const app = express()

// Call the Student route
const studentRoute = require("./routes/studentRoute")

// Connect to the MongoDB
mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log('Connected to Database')
}).catch((err) => {
    console.log('Connection Failed', err);
});

// Define middleware to parse incoming requests to JSON if any
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set Browser Headers
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-type, Accept, Authorization");
    res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, PATCH, POST, DELETE, OPTIONS');
    next();
  });

  // Connect to the established port
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}.`);
  });

  // API url to get the data http://localhost:5000/studentData
  app.use('/studentData', studentRoute);

module.exports = app;