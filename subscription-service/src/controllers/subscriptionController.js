const Subscription = require('../models/Subscription');

// Create a new subscription
exports.createSubscription = async (req, res) => {
  try {
    const { userId, planType, billingCycle } = req.body;
    const subscription = await Subscription.create({ userId, planType, billingCycle });
    res.status(201).json(subscription);
  } catch (error) {
    console.error('Error creating subscription:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get subscription details by ID
exports.getSubscription = async (req, res) => {
  try {
    const id = req.params.id;
    const subscription = await Subscription.findByPk(id);
    if (subscription) {
      res.status(200).json(subscription);
    } else {
      res.status(404).json({ error: 'Subscription not found' });
    }
  } catch (error) {
    console.error('Error retrieving subscription:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};