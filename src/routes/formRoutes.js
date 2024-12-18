// formRoutes.js

const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController'); // Import form controller

// Get all forms
router.get('/', formController.getAllForms);

// Create a new form
router.post('/', formController.createForm);

// Add questions to a form
router.put('/add-questions', formController.addQuestionsToForm);

module.exports = router;
