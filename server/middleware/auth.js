/**
 * Authentication Middleware
 * Verifies JWT tokens and ensures admin authorization
 */

import jwt from 'jsonwebtoken';
import asyncHandler from '../utils/asyncHandler.js';
import ErrorResponse from '../utils/errorResponse.js';
import Admin from '../models/Admin.js';
import { JWT_CONFIG } from '../config/jwt.js';

/**
 * Protect routes - Verify JWT token
 */
export const protect = asyncHandler(async (req, res, next) => {
  let token;

  // Extract token from Authorization header
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  // Make sure token exists
  if (!token) {
    return next(new ErrorResponse('Not authorized to access this route', 401));
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, JWT_CONFIG.SECRET);
    req.admin = decoded;
    next();
  } catch (error) {
    return next(new ErrorResponse('Not authorized to access this route', 401));
  }
});

/**
 * Verify Admin - Ensure user is admin
 */
export const verifyAdmin = asyncHandler(async (req, res, next) => {
  try {
    // Get admin from database
    const admin = await Admin.findById(req.admin.id);

    if (!admin || admin.role !== 'admin' || !admin.isActive) {
      return next(new ErrorResponse('Not authorized to access this route', 403));
    }

    req.adminUser = admin;
    next();
  } catch (error) {
    return next(new ErrorResponse('Not authorized to access this route', 401));
  }
});

/**
 * Combined middleware for protected routes
 */
export const requireAdmin = [protect, verifyAdmin];
