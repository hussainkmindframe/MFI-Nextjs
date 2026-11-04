import mongoose from 'mongoose';

const careerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email'],
  },
  mobile: {
    type: String,
    required: [true, 'Mobile number is required'],
    trim: true,
  },
  subject: {
    type: String,
    required: [true, 'Subject is required'],
    trim: true,
  },
  age: {
    type: String,
    required: [true, 'Age is required'],
  },
  experience: {
    type: String,
    required: [true, 'Experience is required'],
  },
  location: {
    type: String,
    required: [true, 'Location is required'],
  },
  applyFor: {
    type: String,
    required: [true, 'Please select a position'],
    // Remove the enum validator or make it dynamic
    // enum: {...} // COMMENT THIS OUT IF IT EXISTS
  },
  resumeUrl: {
    type: String,
    required: [true, 'Resume is required'],
  },
  resumePublicId: {
    type: String,
  },
  resumeOriginalName: {
    type: String,
  },
  status: {
    type: String,
    enum: ['new', 'reviewing', 'shortlisted', 'rejected'],
    default: 'new',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Add index for better query performance
careerSchema.index({ email: 1, applyFor: 1, createdAt: -1 });

// Static method to check recent applications
careerSchema.statics.hasRecentApplication = async function(email, position, days = 7) {
  const recentDate = new Date();
  recentDate.setDate(recentDate.getDate() - days);
  
  const count = await this.countDocuments({
    email: email.toLowerCase().trim(),
    applyFor: position,
    createdAt: { $gte: recentDate }
  });
  
  return count > 0;
};

export default mongoose.model('Career', careerSchema);