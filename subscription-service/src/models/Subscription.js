const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Subscription = sequelize.define('Subscription', {
  subscriptionId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  planType: {
    type: DataTypes.STRING,
    allowNull: false
  },
  billingCycle: {
    type: DataTypes.STRING,
    allowNull: false  
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'Active'
  }
}, {
  tableName: 'subscriptions',
  timestamps: true
});

module.exports = Subscription;