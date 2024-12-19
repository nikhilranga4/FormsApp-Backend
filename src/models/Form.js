const mongoose = require('mongoose');

// Define the schema for form options (used for multiple-choice, checkbox, dropdown)
const optionSchema = new mongoose.Schema({
  label: { type: String, required: true },  // Label for the option
  value: { type: String, required: true },  // Value associated with the option
});

// Define the schema for each question
const questionSchema = new mongoose.Schema({
  question: { type: String, required: true },  // The text of the question
  type: {
    type: String,
    required: true,
    enum: ['text', 'multiple-choice', 'checkbox', 'dropdown', 'grid', 'date-picker', 'time-picker'],  // Types of questions supported
  },
  options: [optionSchema],  // Options for multiple-choice, checkbox, or dropdown
  isRequired: { type: Boolean, default: false },  // Whether this question is mandatory
  placeholder: { type: String },  // Optional placeholder text for text input type
});

// Define the schema for the form
const formSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },  // Form title
    description: { type: String, required: true },  // Form description
    headerImage: { type: String },  // Header image URL (optional)
    questions: [questionSchema],  // Array of questions
  },
  { timestamps: true }  // Automatically add createdAt and updatedAt timestamps
);

const Form = mongoose.model('Form', formSchema);

module.exports = Form;
