const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

// Middleware
app.use(express.json()); // Parse incoming JSON requests
app.use(cors()); // Enable Cross-Origin Resource Sharing (CORS)

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected successfully!'))
  .catch((err) => console.log('Error connecting to MongoDB:', err));

// Routes
const formRoutes = require('./routes/formRoutes'); // Import form routes
app.use('/api/forms', formRoutes); // Use the form routes

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
