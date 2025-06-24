const SupportTicket = require('../models/SupportTicket');

// Create a new support ticket
exports.createSupportTicket = async (req, res) => {
  try {
    const { userId, subject, description } = req.body;
    const ticket = await SupportTicket.create({ userId, subject, description });
    res.status(201).json(ticket);
  } catch (error) {
    console.error('Error creating support ticket:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get a support ticket by ID
exports.getSupportTicket = async (req, res) => {
  try {
    const id = req.params.id;
    const ticket = await SupportTicket.findByPk(id);
    if (ticket) {
      res.status(200).json(ticket);
    } else {
      res.status(404).json({ error: 'Support ticket not found' });
    }
  } catch (error) {
    console.error('Error retrieving support ticket:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// (Optional: List all support tickets)
// You can add additional functionality if needed, for example:
// exports.listSupportTickets = async (req, res) => { ... }