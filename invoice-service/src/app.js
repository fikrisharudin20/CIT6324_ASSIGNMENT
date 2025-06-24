// invoice-service/src/app.js
const express = require('express');
const cors = require('cors');
const invoiceRoutes = require('./routes/invoiceRoutes');
const sequelize = require('./config/database'); 

const app = express();
app.use(cors());
app.use(express.json());

// Mount invoice routes
app.use('/api/invoices', invoiceRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync()
  .then(() => {
    console.log('Invoice Service database connected and synchronized.');
    app.listen(PORT, () => console.log(`Invoice Service running on port ${PORT}`));
  })
  .catch(err => console.error('Database connection failed: ', err));