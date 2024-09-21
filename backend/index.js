const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");
require("dotenv").config();

//Only routes will be defined here
const connectDB = require('./src/config/database');
const routes = require('./src/routes/routes');
const mapAPI = require('./src/controllers/maps')


const port = process.env.PORT;

// Connect to MongoDB
connectDB()


// Enable CORS/parser
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.listen(port, () =>{
  console.log(`Server listening on port ${port}`);
});

// Define your API routes here
app.use('./src/routes',routes)
app.use('/api/maps',mapAPI)
