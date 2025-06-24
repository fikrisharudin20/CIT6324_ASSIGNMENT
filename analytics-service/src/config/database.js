const fs = require('fs');
const path = require('path');

// Construct the absolute path to the .env file in the parent directory.
const dotenvPath = path.join(__dirname, '..', '.env');
console.log('Looking for .env file at:', dotenvPath);
console.log('Exists:', fs.existsSync(dotenvPath));
console.log('DB_NAME=', process.env.DB_NAME); 
console.log('DB_HOST=', process.env.DB_HOST);

// Load the environment variables
require('dotenv').config({ path: dotenvPath });

// Verify that the DB_PASSWORD has been loaded:
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
console.log('Type of DB_PASSWORD:', typeof process.env.DB_PASSWORD);

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD ? process.env.DB_PASSWORD.toString() : '', // ensure it’s a string
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432,
    dialect: 'postgres'
  }
);

module.exports = sequelize;