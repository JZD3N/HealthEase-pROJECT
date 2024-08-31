const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb://localhost:27017/healthease', {
    });
    console.log(`Healthease Database Established : ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);   
    process.exit(1);
  }
};

module.exports = connectDB;   

