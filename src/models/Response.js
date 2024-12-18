const mongoose = require('mongoose');

// Define the Response Schema
const ResponseSchema = new mongoose.Schema({
  form: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Form', // Link to the Form model
    required: true,
  },
  response: {
    type: mongoose.Schema.Types.Mixed, // To store responses in various formats (array, object, etc.)
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create the Response model based on the schema
const Response = mongoose.model('Response', ResponseSchema);

module.exports = Response;
