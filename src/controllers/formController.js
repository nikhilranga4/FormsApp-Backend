const Form = require('../models/Form');

// Create a new form
const createForm = async (req, res) => {
  const { title, description, headerImage, questions } = req.body;

  try {
    const newForm = new Form({
      title,
      description,
      headerImage,
      questions,
    });

    const savedForm = await newForm.save();
    res.status(201).json(savedForm);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating form' });
  }
};

// Add questions to a form
const addQuestionsToForm = async (req, res) => {
  const { formId, questions } = req.body;

  try {
    const form = await Form.findById(formId);

    if (!form) {
      return res.status(404).json({ message: 'Form not found' });
    }

    form.questions.push(...questions);
    await form.save();
    res.status(200).json(form);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error adding questions' });
  }
};

// Get all forms
const getAllForms = async (req, res) => {
  try {
    const forms = await Form.find();
    res.status(200).json(forms);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving forms' });
  }
};

// Delete a form by its ID
const deleteForm = async (req, res) => {
  const { formId } = req.params;  // Extract formId from the URL

  try {
    const deletedForm = await Form.findByIdAndDelete(formId);

    if (!deletedForm) {
      return res.status(404).json({ message: 'Form not found' });
    }

    res.status(200).json({ message: 'Form deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting form' });
  }
};

module.exports = {
  createForm,
  addQuestionsToForm,
  getAllForms,
  deleteForm,  // Export the deleteForm function
};
