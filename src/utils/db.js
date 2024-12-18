// db.js

const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Function to connect to MongoDB
const connectDB = async () => {
  try {
    // Attempt to connect to the MongoDB database using the URI from environment variables
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true, // Using the new MongoDB connection string parser
      useUnifiedTopology: true, // Enabling unified topology
    });
    console.log('MongoDB connected successfully!');
  } catch (error) {
    // Log the error and exit the process if the connection fails
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit the process with a non-zero code to indicate failure
  }
};

module.exports = connectDB;
