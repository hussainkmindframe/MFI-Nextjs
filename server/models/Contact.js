/**
 * Contact Model
 * Schema for storing contact form submissions
 */

import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    minlength: [2, 'Name must be at least 2 characters'],
    maxlength: [100, 'Name cannot exceed 100 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true,
    minlength: [10, 'Phone number must be at least 10 digits'],
    maxlength: [20, 'Phone number cannot exceed 20 digits']
  },
  company: {
    type: String,
    trim: true,
    maxlength: [200, 'Company name cannot exceed 200 characters'],
    default: ''
  },
  anything: {
    type: String,
    trim: true,
    maxlength: [1000, 'Message cannot exceed 1000 characters'],
    default: ''
  },
  services: {
    type: [String],
    required: [true, 'At least one service must be selected'],
    validate: {
      validator: function(services) {
        return services && services.length > 0;
      },
      message: 'Please select at least one service'
    }
  },
  status: {
    type: String,
    enum: ['pending', 'contacted', 'completed'],
    default: 'pending'
  }
}, {
  timestamps: true // Automatically adds createdAt and updatedAt
});

// Indexes for better query performance
contactSchema.index({ createdAt: -1 });
contactSchema.index({ email: 1 });
contactSchema.index({ status: 1 });

// Remove __v when sending response
contactSchema.methods.toJSON = function() {
  const obj = this.toObject();
  delete obj.__v;
  return obj;
};

// Static method for spam prevention
contactSchema.statics.hasRecentSubmission = async function(email, phone) {
  const recent = await this.findOne({
    $or: [{ email }, { phone }],
    createdAt: { $gte: new Date(Date.now() - 60 * 1000) }
  });
  return !!recent;
};

const Contact = mongoose.model('Contact', contactSchema);
export default Contact;