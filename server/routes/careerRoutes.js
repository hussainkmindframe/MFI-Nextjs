import express from 'express';
import {
  createApplication,
  upload,
  getAllApplications,
  getApplicationById,
  updateApplicationStatus,
  deleteApplication,
  getApplicationStats,
  downloadResume,
} from '../controllers/careerController.js';

const router = express.Router();

// Public routes
router.post('/career', upload.single('resume'), createApplication);

// Admin routes — specific routes pehle, :id wale baad mein
router.get('/careers/stats', getApplicationStats);       // pehle
router.get('/careers', getAllApplications);
router.get('/career/:id/download', downloadResume);      // pehle :id/download
router.get('/career/:id', getApplicationById);
router.put('/career/:id/status', updateApplicationStatus);
router.delete('/career/:id', deleteApplication);

export default router;