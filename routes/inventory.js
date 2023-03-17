const express = require('express');
const router = express.Router();
const Inventory = require('../models/inventory');

router.post('/', async (req, res) => {
  try {
    const { payload } = req.body;
    for (const item of payload) {
      const { productId, quantity, operation } = item;
      if (operation === 'add') {
        await Inventory.updateOne({ productId }, { $inc: { quantity } });
      } else if (operation === 'subtract') {
        await Inventory.updateOne({ productId }, { $inc: { quantity: -quantity } });
      }
    }

    res.status(200).json({ message: 'Inventory updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
