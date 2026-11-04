/**
 * Express Application Setup
*/

import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import blogRoutes from './routes/blogRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import careerRoutes from './routes/careerRoutes.js';
import positionRoutes from './routes/positionRoutes.js';
import errorHandler from './middleware/errorHandler.js';
import ErrorResponse from './utils/errorResponse.js';

const app = express();

// Middleware
const allowedOrigins = process.env.CORS_ORIGIN
  ? process.env.CORS_ORIGIN.split(',').map(o => o.trim())
  : ['http://localhost:3000'];

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (mobile apps, curl, etc.)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) return callback(null, true);
    return callback(new Error('Not allowed by CORS'));
  },
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from uploads directory
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api', contactRoutes);
app.use('/api', careerRoutes);
app.use('/api', positionRoutes);


// Root route — confirms API is live
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Mindframe Agency API is running 🚀',
    version: '1.0.0',
    endpoints: '/api/health | /api/blogs | /api/auth',
  });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ success: true, message: 'Server running' });
});

// 404 handler
app.use((req, res, next) => {
  next(new ErrorResponse(`Route ${req.originalUrl} not found`, 404));
});

// Error handler
app.use(errorHandler);



export default app;