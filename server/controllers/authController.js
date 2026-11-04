/**
 * Authentication Controller
 * Handles admin login and authentication logic
 */

import jwt from 'jsonwebtoken';
import asyncHandler from '../utils/asyncHandler.js';
import ErrorResponse from '../utils/errorResponse.js';
import Admin from '../models/Admin.js';
import { JWT_CONFIG } from '../config/jwt.js';

/**
 * Generate JWT Token
 */
const generateToken = (id) => {
  return jwt.sign({ id }, JWT_CONFIG.SECRET, {
    expiresIn: JWT_CONFIG.EXPIRY,
  });
};

/**
 * @desc    Admin Login
 * @route   POST /api/auth/login
 * @access  Public
 */
export const login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  // Validate input
  if (!email || !password) {
    return next(new ErrorResponse('Please provide email and password', 400));
  }

  // Check if admin exists and get password
  const admin = await Admin.findOne({ email }).select('+password');

  if (!admin) {
    return next(new ErrorResponse('Invalid credentials', 401));
  }

  // Check if admin is active
  if (!admin.isActive) {
    return next(new ErrorResponse('Admin account is inactive', 403));
  }

  // Verify password
  const isMatch = await admin.matchPassword(password);

  if (!isMatch) {
    return next(new ErrorResponse('Invalid credentials', 401));
  }

  // Update last login
  admin.lastLogin = new Date();
  await admin.save();

  // Generate token
  const token = generateToken(admin._id);

  res.status(200).json({
    success: true,
    message: 'Login successful',
    token,
    admin: {
      id: admin._id,
      email: admin.email,
      name: admin.name,
      role: admin.role,
    },
  });
});

/**
 * @desc    Get Current Admin
 * @route   GET /api/auth/me
 * @access  Private
 */
export const getMe = asyncHandler(async (req, res, next) => {
  const admin = await Admin.findById(req.admin.id);

  if (!admin) {
    return next(new ErrorResponse('Admin not found', 404));
  }

  res.status(200).json({
    success: true,
    admin: {
      id: admin._id,
      email: admin.email,
      name: admin.name,
      role: admin.role,
      isActive: admin.isActive,
      lastLogin: admin.lastLogin,
    },
  });
});

/**
 * @desc    Admin Logout (Frontend handles token removal)
 * @route   POST /api/auth/logout
 * @access  Private
 */
export const logout = asyncHandler(async (req, res, next) => {
  res.status(200).json({
    success: true,
    message: 'Logout successful',
  });
});
