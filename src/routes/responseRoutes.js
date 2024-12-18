const express = require('express');
const { saveFormResponse, getResponsesForForm } = require('../controllers/responseController');
const router = express.Router();

// Route to save a response for a form
router.post('/', saveFormResponse);

// Route to get all responses for a specific form by form ID
router.get('/:formId', getResponsesForForm);

module.exports = router;
