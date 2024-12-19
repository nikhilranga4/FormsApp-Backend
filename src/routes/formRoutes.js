const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController'); // Import form controller

// Get all forms
router.get('/', formController.getAllForms);

// Create a new form
router.post('/', formController.createForm);

// Add questions to a form
router.post('/add-questions', formController.addQuestionsToForm); // Changed to POST

// Delete a form by ID
router.delete('/:formId', formController.deleteForm); // DELETE route for deleting form

// Duplicate a form by ID
router.post('/:formId/duplicate', formController.duplicateForm); // Added POST route for duplication

// Get the public URL for a form
router.get('/:formId/public', formController.getPublicUrl); // Added GET route for public URL

module.exports = router;
