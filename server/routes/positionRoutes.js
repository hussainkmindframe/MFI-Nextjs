import express from 'express';
import {
  createPosition,
  getAllPositions,
  getActivePositions,
  getPositionById,
  updatePosition,
  deletePosition,
  togglePositionStatus,
  getPositionStats,
  getFeaturedPositions,
  bulkDeletePositions,
  updateApplicationCount,
} from '../controllers/positionController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// Public routes — no auth required (specific routes first)
router.get('/positions/active', getActivePositions);
router.get('/positions/featured', getFeaturedPositions);

// Admin routes — require auth (specific routes before parameterized)
router.get('/positions/stats', protect, getPositionStats);
router.post('/positions/bulk-delete', protect, bulkDeletePositions);

// Generic routes (must come after specific routes)
router.get('/positions', protect, getAllPositions);
router.post('/positions', protect, createPosition);
router.get('/positions/:id', getPositionById);
router.put('/positions/:id', protect, updatePosition);
router.delete('/positions/:id', protect, deletePosition);
router.patch('/positions/:id/toggle', protect, togglePositionStatus);
router.patch('/positions/:id/increment-applications', updateApplicationCount);

export default router;


