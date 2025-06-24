const express = require('express');
const router = express.Router();
const supportController = require('../controllers/supportController');

// Route to create a new support ticket
router.post('/', supportController.createSupportTicket);

// Route to get a support ticket by its ID
router.get('/:id', supportController.getSupportTicket);

module.exports = router;