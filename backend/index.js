const express = require('express');
const cors = require('cors');
const connectDB = require('./src/config/database');
const routes = require('./src/routes/routes');
const mapAPI = require('./src/controllers/maps')

const app = express();
const port = process.env.PORT || 4000;

// Connect to MongoDB
connectDB()


// Enable CORS
app.use(cors());

// Define your API routes here
app.use('./src/routes',routes)
app.use('/api/maps',mapAPI)

app.listen(port, () =>{
  console.log(`Server listening on port ${port}`);
});