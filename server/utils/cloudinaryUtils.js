import { cloudinary } from '../config/cloudinary.js';

export const extractPublicIdFromUrl = (url) => {
  if (!url) return null;

  try {
    const parsedUrl = new URL(url);
    const parts = parsedUrl.pathname.split('/').filter(Boolean);
    const uploadIndex = parts.findIndex((segment) => segment === 'upload');
    if (uploadIndex === -1) {
      return null;
    }

    const remaining = parts.slice(uploadIndex + 1).filter((segment) => {
      if (/^v\d+$/.test(segment)) return false;
      if (/^[a-zA-Z0-9_]+:[^/]+$/.test(segment)) return false;
      return true;
    });

    if (remaining.length === 0) {
      return null;
    }

    const lastSegment = remaining.pop();
    const name = lastSegment.replace(/\.[^.]+$/, '');
    return [...remaining, name].join('/');
  } catch (error) {
    return null;
  }
};

export const deleteCloudinaryResource = async (publicId, resourceType = 'image') => {
  if (!publicId) return false;
  try {
    const result = await cloudinary.uploader.destroy(publicId, {
      resource_type: resourceType,
      invalidate: true,
    });
    return result.result === 'ok' || result.result === 'not found';
  } catch (error) {
    console.error('Cloudinary delete error:', error);
    return false;
  }
};