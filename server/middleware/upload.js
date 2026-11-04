/**
 * Multer Configuration for File Uploads
 * Handles image uploads to Cloudinary
 */

import { imageUpload } from '../config/cloudinary.js';

// Default upload middleware (for backward compatibility, uses image upload)
export default imageUpload;
