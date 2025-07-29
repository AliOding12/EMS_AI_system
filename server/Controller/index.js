// Import express module using ES6 import
import express from 'express';

// Initialize express app
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('👋 Hello from ES6 Backend!');
});

// GET route
app.get('/api/message', (req, res) => {
  res.json({ message: '📨 This is a message from the server' });
});

// POST route
app.post('/api/data', (req, res) => {
  const data = req.body;
  console.log('📦 Received:', data);
  res.status(201).json({ success: true, data });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
