const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).json({ message: 'API is running!', success: true }); ;
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;