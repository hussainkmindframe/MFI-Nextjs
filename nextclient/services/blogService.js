/**
 * Blog Service
 * Handles all blog-related API calls
 */

import apiClient from './apiClient';

export const blogService = {
  // Public endpoints
  getAllBlogs: (page = 1, limit = 10, search = '', tag = '', category = '') =>
    apiClient.get('/blogs', {
      params: { page, limit, search, tag, category },
    }),

  getBlogBySlug: (slug) =>
    apiClient.get(`/blogs/${slug}`),

  getBlogById: (id) =>
    apiClient.get(`/blogs/${id}`),

  // Admin endpoints
  createBlog: (blogData) =>
    apiClient.post('/blogs', blogData),

  updateBlog: (id, blogData) =>
    apiClient.put(`/blogs/${id}`, blogData),

  deleteBlog: (id) =>
    apiClient.delete(`/blogs/${id}`),

  getAdminBlogs: (page = 1, limit = 10, search = '') =>
    apiClient.get('/blogs/admin/all', {
      params: { page, limit, search },
    }),

  // Image upload
  uploadImage: (file) => {
    const formData = new FormData();
    formData.append('image', file);
    return apiClient.post('/blogs/upload-image', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
};

export default blogService;
