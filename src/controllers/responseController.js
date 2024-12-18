const Response = require('../models/Response');
const Form = require('../models/Form');

// Save a form response
const saveFormResponse = async (req, res) => {
  const { formId, response } = req.body;

  try {
    const form = await Form.findById(formId);

    if (!form) {
      return res.status(404).json({ message: 'Form not found' });
    }

    const newResponse = new Response({
      form: formId,
      response,
    });

    await newResponse.save();
    res.status(200).json({ message: 'Response saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error saving response' });
  }
};

// Get all responses for a specific form
const getResponsesForForm = async (req, res) => {
  const { formId } = req.params;

  try {
    const responses = await Response.find({ form: formId });

    if (responses.length === 0) {
      return res.status(404).json({ message: 'No responses found for this form' });
    }

    res.status(200).json(responses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving responses' });
  }
};

module.exports = {
  saveFormResponse,
  getResponsesForForm,
};
