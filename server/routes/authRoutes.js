/**
 * Authentication Routes
 * Routes for admin login and authentication
 */

import express from 'express';
import { login, getMe, logout } from '../controllers/authController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

/**
 * Public Routes
 */
router.post('/login', login);

/**
 * Protected Routes
 */
router.get('/me', protect, getMe);
router.post('/logout', protect, logout);

export default router;
