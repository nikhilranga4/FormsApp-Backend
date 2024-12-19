const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController'); // Import form controller

// Get all forms
router.get('/', formController.getAllForms);

// Create a new form
router.post('/', formController.createForm);

// Add questions to a form
router.put('/add-questions', formController.addQuestionsToForm);

// Delete a form by ID
router.delete('/:formId', formController.deleteForm); // DELETE route for deleting form

module.exports = router;
