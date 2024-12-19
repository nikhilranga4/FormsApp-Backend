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
  const { formId } = req.params;

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

// Duplicate a form by creating a copy of the form
const duplicateForm = async (req, res) => {
  const { formId } = req.body; // Expect formId in the body for the duplicate form request

  if (!formId) {
    return res.status(400).json({ message: 'Form ID is required' });
  }

  try {
    const form = await Form.findById(formId);

    if (!form) {
      return res.status(404).json({ message: 'Form not found' });
    }

    // Create a copy of the form
    const newForm = new Form({
      ...form.toObject(), // Duplicate the form's data
      title: `${form.title} (Copy)`, // Modify the title to indicate it's a copy
    });

    const savedForm = await newForm.save();
    res.status(201).json(savedForm);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error duplicating form' });
  }
};

// Get the public URL for a form (example for cloud storage or simple path)
const getPublicUrl = async (req, res) => {
  const { formId } = req.params;

  try {
    const form = await Form.findById(formId);

    if (!form) {
      return res.status(404).json({ message: 'Form not found' });
    }

    // Generate a public URL for the form (depending on your app's setup)
    // This is just an example assuming forms are publicly accessible by ID
    const publicUrl = `${process.env.BASE_URL}/forms/${form._id}`;

    res.status(200).json({ publicUrl });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error generating public URL' });
  }
};

module.exports = {
  createForm,
  addQuestionsToForm,
  getAllForms,
  deleteForm,
  duplicateForm,  // Export the duplicateForm function
  getPublicUrl,    // Export the getPublicUrl function
};
