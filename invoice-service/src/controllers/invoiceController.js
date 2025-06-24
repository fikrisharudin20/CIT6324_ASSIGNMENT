// backend/src/controllers/invoiceController.js
const Invoice = require('../models/Invoice');

// Create a new invoice
exports.createInvoice = async (req, res) => {
  try {
    const { clientName, invoiceNumber, dateIssued, dueDate, totalAmount } = req.body;
    const invoice = await Invoice.create({ clientName, invoiceNumber, dateIssued, dueDate, totalAmount });
    res.status(201).json(invoice);
  } catch (error) {
    console.error('Error creating invoice:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get invoice details
exports.getInvoice = async (req, res) => {
  try {
    const id = req.params.id;
    const invoice = await Invoice.findByPk(id);
    if (invoice) res.status(200).json(invoice);
    else res.status(404).json({ error: 'Invoice not found' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};