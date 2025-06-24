const Inventory = require('../models/Inventory');

// Create a new inventory item
exports.createInventoryItem = async (req, res) => {
  try {
    const { itemName, quantity, reorderLevel } = req.body;
    const newItem = await Inventory.create({ itemName, quantity, reorderLevel });
    res.status(201).json(newItem);
  } catch (error) {
    console.error('Error creating inventory item:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get a single inventory item by ID
exports.getInventoryItem = async (req, res) => {
  try {
    const id = req.params.id;
    const item = await Inventory.findByPk(id);
    if (item) res.status(200).json(item);
    else res.status(404).json({ error: 'Inventory item not found' });
  } catch (error) {
    console.error('Error retrieving inventory item:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update an inventory item's quantity (or other fields)
exports.updateInventoryItem = async (req, res) => {
  try {
    const id = req.params.id;
    const { quantity } = req.body;
    const [rowsUpdated, [updatedItem]] = await Inventory.update(
      { quantity },
      { where: { inventoryId: id }, returning: true }
    );
    if (rowsUpdated) res.status(200).json(updatedItem);
    else res.status(404).json({ error: 'Inventory item not found' });
  } catch (error) {
    console.error('Error updating inventory item:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// List all inventory items
exports.listInventoryItems = async (req, res) => {
  try {
    const items = await Inventory.findAll();
    res.status(200).json(items);
  } catch (error) {
    console.error('Error listing inventory items:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};