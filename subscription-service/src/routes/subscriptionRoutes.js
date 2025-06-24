const express = require('express');
const router = express.Router();
const subscriptionController = require('../controllers/subscriptionController');

// Route to create a new subscription
router.post('/', subscriptionController.createSubscription);

// Route to fetch a subscription by ID
router.get('/:id', subscriptionController.getSubscription);

module.exports = router;