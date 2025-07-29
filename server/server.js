const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Basic root route
app.get('/', (req, res) => {
  res.send('EMS AI System Server is running.');
});

// Start the server
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

