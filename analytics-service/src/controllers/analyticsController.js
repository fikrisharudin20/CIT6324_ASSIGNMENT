const ActivityLog = require('../models/Analytics');

// Create a new activity log
exports.createActivityLog = async (req, res) => {
  try {
    const { userId, endpoint, method, message } = req.body;
    const log = await ActivityLog.create({ userId, endpoint, method, message });
    res.status(201).json(log);
  } catch (error) {
    console.error('Error creating activity log:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Retrieve all activity logs
exports.getActivityLogs = async (req, res) => {
  try {
    const logs = await ActivityLog.findAll();
    res.status(200).json(logs);
  } catch (error) {
    console.error('Error retrieving activity logs:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Retrieve a single log by its ID
exports.getActivityLogById = async (req, res) => {
  try {
    const logId = req.params.id;
    const log = await ActivityLog.findByPk(logId);
    if (log) res.status(200).json(log);
    else res.status(404).json({ error: 'Log not found' });
  } catch (error) {
    console.error('Error retrieving activity log:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};