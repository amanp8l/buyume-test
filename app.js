
const express = require('express');
const app = express();
const inventoryRoute = require('./routes/inventory');

app.use(express.json());

app.use('/inventory', inventoryRoute);

app.listen(8000, () => {
  console.log('Server started on port 8000');
});
