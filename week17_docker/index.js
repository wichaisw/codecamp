const express = require('express');
const app = express();

app.emit('/', (req, res) => {
  res.send('Hello anakin');
});

app.listen(8000, () => {
  console.log('server is running on port 8000.')
});