/**
 * Blog Controller
 * Handles all blog CRUD operations
 */

import asyncHandler from '../utils/asyncHandler.js';
import mongoose from 'mongoose';
import ErrorResponse from '../utils/errorResponse.js';
import Blog from '../models/Blog.js';
import { deleteCloudinaryResource, extractPublicIdFromUrl } from '../utils/cloudinaryUtils.js';

/**
 * @desc    Get all blogs with pagination and search
 * @route   GET /api/blogs
 * @access  Public
 */
export const getAllBlogs = asyncHandler(async (req, res, next) => {
  const { page = 1, limit = 10, search = '', tag = '', category = '' } = req.query;

  // Build filter
  const filter = { published: true };

  if (search) {
    filter.$text = { $search: search };
  }

  if (tag) {
    filter.tags = tag;
  }

  if (category) {
    filter.category = category;
  }

  // Calculate pagination
  const pageNum = parseInt(page, 10) || 1;
  const limitNum = parseInt(limit, 10) || 10;
  const skip = (pageNum - 1) * limitNum;

  // Get total count
  const total = await Blog.countDocuments(filter);

  // Get blogs
  const blogs = await Blog.find(filter)
    .select('-content') // Exclude content for list view
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limitNum);

  res.status(200).json({
    success: true,
    total,
    pages: Math.ceil(total / limitNum),
    currentPage: pageNum,
    blogs,
  });
});

/**
 * @desc    Get single blog by slug
 * @route   GET /api/blogs/:slug
 * @access  Public
 */
export const getBlogBySlug = asyncHandler(async (req, res, next) => {
  const slugOrId = req.params.slug;
  let blog = await Blog.findOne({ slug: slugOrId }).populate('createdBy', 'name email');

  if (!blog && mongoose.isValidObjectId(slugOrId)) {
    blog = await Blog.findById(slugOrId).populate('createdBy', 'name email');
  }

  if (!blog) {
    return next(new ErrorResponse('Blog not found', 404));
  }

  // Increment views
  blog.views += 1;
  await blog.save();

  res.status(200).json({
    success: true,
    blog,
  });
});

/**
 * @desc    Create new blog (Admin only)
 * @route   POST /api/blogs
 * @access  Private (Admin)
 */
export const createBlog = asyncHandler(async (req, res, next) => {
  const { title, description, content, image, tags, category, featured } = req.body;

  // Validate required fields
  if (!title || !description || !content || !image) {
    return next(
      new ErrorResponse('Please provide title, description, content, and image', 400)
    );
  }

  // Handle tags - can be string or array, convert to array if needed
  let tagsArray = [];
  if (tags) {
    if (typeof tags === 'string') {
      tagsArray = tags.split(',').map((tag) => tag.trim()).filter(t => t);
    } else if (Array.isArray(tags)) {
      tagsArray = tags;
    }
  }

  const imagePublicId = req.body.imagePublicId || extractPublicIdFromUrl(image);

  // Create blog
  const blog = await Blog.create({
    title,
    description,
    content,
    image,
    imagePublicId,
    tags: tagsArray,
    category: category || 'Other',
    featured: featured || false,
    createdBy: req.adminUser._id,
  });

  res.status(201).json({
    success: true,
    message: 'Blog created successfully',
    blog,
  });
});

/**
 * @desc    Update blog (Admin only)
 * @route   PUT /api/blogs/:id
 * @access  Private (Admin)
 */
export const updateBlog = asyncHandler(async (req, res, next) => {
  let blog = await Blog.findById(req.params.id);

  if (!blog) {
    return next(new ErrorResponse('Blog not found', 404));
  }

  // Verify ownership
  if (blog.createdBy.toString() !== req.adminUser._id.toString()) {
    return next(new ErrorResponse('Not authorized to update this blog', 403));
  }

  // Prepare update data
  const updateData = { ...req.body };

  // Handle tags
  if (updateData.tags && typeof updateData.tags === 'string') {
    updateData.tags = updateData.tags.split(',').map((tag) => tag.trim());
  }

  if (updateData.image) {
    updateData.imagePublicId = updateData.imagePublicId || extractPublicIdFromUrl(updateData.image);
  }

  // Update blog
  blog = await Blog.findByIdAndUpdate(req.params.id, updateData, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    message: 'Blog updated successfully',
    blog,
  });
});


/**
 * @desc    Delete blog (Admin only)
 * @route   DELETE /api/blogs/:id
 * @access  Private (Admin)
 */


export const deleteBlog = asyncHandler(async (req, res, next) => {
  const blog = await Blog.findById(req.params.id);

  if (!blog) {
    return next(new ErrorResponse('Blog not found', 404));
  }

  if (blog.createdBy.toString() !== req.adminUser._id.toString()) {
    return next(new ErrorResponse('Not authorized to delete this blog', 403));
  }

  // // DEBUG - console mein dekho kya aa raha hai
  // console.log('blog.image:', blog.image);
  // console.log('blog.imagePublicId:', blog.imagePublicId);
  
  const publicId = blog.imagePublicId || extractPublicIdFromUrl(blog.image);
  // console.log('Extracted publicId:', publicId);

  if (publicId) {
    const result = await deleteCloudinaryResource(publicId, 'image');
    // console.log('Cloudinary delete result:', result);
  }

  await Blog.findByIdAndDelete(req.params.id);

  res.status(200).json({ success: true, message: 'Blog deleted successfully' });
});


/**
 * @desc    Get admin blogs (only unpublished and all)
 * @route   GET /api/blogs/admin/all
 * @access  Private (Admin)
 */
export const getAdminBlogs = asyncHandler(async (req, res, next) => {
  const { page = 1, limit = 10, search = '' } = req.query;

  // Build filter
  const filter = { createdBy: req.adminUser._id };

  if (search) {
    filter.$text = { $search: search };
  }

  // Calculate pagination
  const pageNum = parseInt(page, 10) || 1;
  const limitNum = parseInt(limit, 10) || 10;
  const skip = (pageNum - 1) * limitNum;

  // Get total count
  const total = await Blog.countDocuments(filter);

  // Get blogs
  const blogs = await Blog.find(filter)
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limitNum);

  res.status(200).json({
    success: true,
    total,
    pages: Math.ceil(total / limitNum),
    currentPage: pageNum,
    blogs,
  });
});

/**
 * @desc    Upload image for blog
 * @route   POST /api/blogs/upload-image
 * @access  Private (Admin)
 */
export const uploadImage = asyncHandler(async (req, res, next) => {
  if (!req.file) {
    return next(new ErrorResponse('No file uploaded', 400));
  }


  // Get the secure HTTPS URL from Cloudinary response
  const imageUrl = req.file.secure_url || req.file.path || req.file.url;
  const imagePublicId = req.file.public_id || req.file.filename || extractPublicIdFromUrl(imageUrl);

  res.status(200).json({
    success: true,
    message: 'Image uploaded successfully',
    image: imageUrl,
    imagePublicId,
  });
});
