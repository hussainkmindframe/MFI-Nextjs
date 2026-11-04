/**
 * Blog Model
 * Represents a blog post with all necessary fields
 */

import mongoose from 'mongoose';

// Function to generate slug from description
const generateSlug = (text) => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .trim()
    .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
};

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide a blog title'],
      trim: true,
      maxlength: [200, 'Title cannot be more than 200 characters'],
    },
    description: {
      type: String,
      required: [true, 'Please provide a blog description'],
    },
    content: {
      type: String,
      required: [true, 'Please provide blog content'],
    },
    image: {
      type: String,
      required: [true, 'Please provide a blog image URL'],
    },
    imagePublicId: {
      type: String, // For Cloudinary image deletion
      default: null,
    },
    tags: [
      {
        type: String,
        trim: true,
      },
    ],
    author: {
      type: String,
      default: 'Admin',
    },
    category: {
      type: String,
      enum: ['Marketing', 'Social Media',  'Other'],
      default: 'Other',
    },
    featured: {
      type: Boolean,
      default: false,
    },
    slug: {
      type: String,
      unique: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    published: {
      type: Boolean,
      default: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Admin',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Pre-save middleware to generate slug
blogSchema.pre('save', async function (next) {
  if (this.isModified('description') || this.isNew) {
    let slugSource = this.description || this.title || 'blog';
    let slug = generateSlug(slugSource);
    let existingBlog = await mongoose.model('Blog').findOne({ slug });
    let counter = 1;
    while (existingBlog && existingBlog._id.toString() !== this._id.toString()) {
      slug = `${generateSlug(slugSource)}-${counter}`;
      existingBlog = await mongoose.model('Blog').findOne({ slug });
      counter++;
    }
    this.slug = slug;
  }
  next();
});

// Index for search functionality
blogSchema.index({ title: 'text', description: 'text', content: 'text' });
blogSchema.index({ tags: 1 });
blogSchema.index({ createdAt: -1 });

export default mongoose.model('Blog', blogSchema);
