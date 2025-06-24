const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryController');

// POST: Create a new inventory item
router.post('/', inventoryController.createInventoryItem);

// GET: Retrieve a single inventory item by ID
router.get('/:id', inventoryController.getInventoryItem);

// PUT: Update an inventory item (for example, its quantity)
router.put('/:id', inventoryController.updateInventoryItem);

// GET: List all inventory items
router.get('/', inventoryController.listInventoryItems);

module.exports = router;