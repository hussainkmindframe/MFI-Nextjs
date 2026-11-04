/**
 * Server Entry Point
 */

import dotenv from 'dotenv';
import app from './app.js';
import connectDB from './config/database.js';

dotenv.config();

// Database connect karo
connectDB();

// Server start karo
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`
╔════════════════════════════════════════╗
║  Mindframe Agency Server               ║
║  ✓ Server running on port ${PORT}       ║
║  ✓ Environment: ${process.env.NODE_ENV}  ║
╚════════════════════════════════════════╝
  `);
});


