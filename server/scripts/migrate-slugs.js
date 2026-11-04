/**
 * Migration Script to Add Slugs to Existing Blogs
 */

import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Blog from '../models/Blog.js';

dotenv.config();

const generateSlug = (text) => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .trim()
    .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
};

const migrateBlogs = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    const blogs = await Blog.find({});
    console.log(`Found ${blogs.length} blogs for slug migration`);

    for (const blog of blogs) {
      let slugSource = blog.description || blog.title || 'blog';
      let slug = generateSlug(slugSource);
      let existingBlog = await Blog.findOne({ slug });
      let counter = 1;
      while (existingBlog && existingBlog._id.toString() !== blog._id.toString()) {
        slug = `${generateSlug(slugSource)}-${counter}`;
        existingBlog = await Blog.findOne({ slug });
        counter++;
      }
      blog.slug = slug;
      await blog.save();
      console.log(`Updated blog "${blog.title}" with slug "${slug}"`);
    }

    console.log('Migration completed');
  } catch (error) {
    console.error('Migration failed:', error);
  } finally {
    await mongoose.disconnect();
  }
};

migrateBlogs();