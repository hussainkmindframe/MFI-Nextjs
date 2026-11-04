/**
 * Cloudinary Configuration
 * Handles image and file uploads to Cloudinary
 */

import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import multer from 'multer';
import dotenv from 'dotenv';

dotenv.config();

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

// Image upload storage (for blog images)
const imageStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'mindframe/blog-images',
    resource_type: 'auto',
    allowed_formats: ['jpg', 'jpeg', 'png', 'gif', 'webp'],
    quality: 'auto:best',
    fetch_format: 'auto',
    access_mode: 'public',
  },
});

// Resume upload storage (for career applications)
const resumeStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    const originalName = file.originalname.replace(/\.[^/.]+$/, '').replace(/\s+/g, '_');
    return {
      folder: 'mindframe/resumes',
      resource_type: 'raw', // Force raw to bypass PDF restrictions
      public_id: `${originalName}_${Date.now()}`, // Keep it unique and extension-free
    };
  },
});

// Image upload middleware
export const imageUpload = multer({
  storage: imageStorage,
  fileFilter: (req, file, cb) => {
    const allowedMimes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    
    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed (JPEG, PNG, GIF, WebP)'), false);
    }
  },
  limits: {
    fileSize: 2 * 1024 * 1024,
  },
});

// Resume upload middleware
export const resumeUpload = multer({
  storage: resumeStorage,
  fileFilter: (req, file, cb) => {
    const allowedMimes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ];

    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Only PDF and Word documents are allowed'), false);
    }
  },
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

// Helper function to get public URL
export const getPublicUrl = (publicId, resourceType = 'auto') => {
  return cloudinary.url(publicId, {
    resource_type: resourceType,
    secure: true,
    sign_url: false,
  });
};

export { cloudinary };