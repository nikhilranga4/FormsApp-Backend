// Form.js (Model)

const mongoose = require('mongoose');

const formSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    headerImage: { type: String, required: true },
    questions: [
      {
        question: { type: String, required: true },
        options: [{ type: String }],
        type: { type: String, required: true }, // "text", "multiple-choice", etc.
      },
    ],
  },
  { timestamps: true }
);

const Form = mongoose.model('Form', formSchema);

module.exports = Form;
