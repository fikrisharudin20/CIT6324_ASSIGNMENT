const express = require('express');
const router = express.Router();
const analyticsController = require('../controllers/analyticsController');

// POST: Create a new activity log
router.post('/', analyticsController.createActivityLog);

// GET: Retrieve all activity logs
router.get('/', analyticsController.getActivityLogs);

// GET: Retrieve a specific log by ID
router.get('/:id', analyticsController.getActivityLogById);

module.exports = router;