// models/Position.js
import mongoose from 'mongoose';

const positionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Position title is required'],
    trim: true,
    minlength: [3, 'Title must be at least 3 characters'],
    maxlength: [100, 'Title cannot exceed 100 characters'],
    unique: true,
  },
  description: {
    type: String,
    default: '',
    maxlength: [2000, 'Description cannot exceed 2000 characters'],
  },
  location: {
    type: String,
    default: 'Mumbai',
    trim: true,
  },
  experience: {
    type: String,
    default: 'Entry Level',
    trim: true,
  },
  salary: {
    type: String,
    default: 'Negotiable',
    trim: true,
  },
  jobType: {
    type: String,
    enum: ['Full-time', 'Part-time', 'Contract', 'Internship', 'Remote'],
    default: 'Full-time',
  },
  requirements: [{
    type: String,
    trim: true,
  }],
  responsibilities: [{
    type: String,
    trim: true,
  }],
  isActive: {
    type: Boolean,
    default: true,
  },
  isFeatured: {
    type: Boolean,
    default: false,
  },
  applicationCount: {
    type: Number,
    default: 0,
  },
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Admin',
  },
}, { timestamps: true });

// Indexes for better query performance
positionSchema.index({ createdAt: -1 });
positionSchema.index({ isActive: 1 });
positionSchema.index({ title: 1 });
positionSchema.index({ isFeatured: 1 });
positionSchema.index({ jobType: 1 });

// Virtual for formatted date
positionSchema.virtual('formattedDate').get(function() {
  return this.createdAt.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
});

// Method to increment application count
positionSchema.methods.incrementApplicationCount = async function() {
  this.applicationCount += 1;
  await this.save();
};

positionSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.__v;
  return obj;
};

const Position = mongoose.model('Position', positionSchema);
export default Position;