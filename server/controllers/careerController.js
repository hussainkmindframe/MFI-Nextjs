/**
 * Career Controller
 * Handles all job application business logic
 */
import Career from '../models/Career.js';
import { resumeUpload,cloudinary  } from '../config/cloudinary.js';
import { deleteCloudinaryResource, extractPublicIdFromUrl } from '../utils/cloudinaryUtils.js';
import https from 'https';
import http from 'http';
import { Readable } from 'stream';

// Export the Cloudinary resume upload middleware
export const upload = resumeUpload;

/**
 * @desc    Submit job application
 * @route   POST /api/career
 * @access  Public
 */
export const createApplication = async (req, res, next) => {
  try {
        console.log('req.file:', req.file);
    const { name, email, mobile, subject, age, experience, location, applyFor } = req.body;

    const hasRecent = await Career.hasRecentApplication(email, applyFor);
    if (hasRecent) {
      return res.status(429).json({
        success: false,
        message: 'You have already applied for this position recently. Please try again after 7 days.',
      });
    }

    const resumeUrl = req.file ? req.file.path : '';
    const resumePublicId = req.file ? (req.file.public_id || req.file.filename || extractPublicIdFromUrl(req.file.path || req.file.secure_url)) : undefined;
   // ✅ Yeh bhi add karo
    console.log('resumeUrl:', resumeUrl);
    console.log('resumeOriginalName:', req.file?.originalname);
    
    const application = await Career.create({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      mobile: mobile.trim(),
      subject: subject.trim(),
      age: age.trim(),
      experience: experience.trim(),
      location: location.trim(),
      applyFor,
      resumeUrl,
      resumePublicId,
      resumeOriginalName: req.file ? req.file.originalname : '',
    });

    res.status(201).json({
      success: true,
      message: 'Your application has been submitted successfully! We will get back to you soon.',
      data: {
        id: application._id,
        name: application.name,
        email: application.email,
        applyFor: application.applyFor,
        createdAt: application.createdAt,
      },
    });
  } catch (error) {
    console.error('Error creating application:', error);
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(e => e.message);
      return res.status(400).json({ success: false, message: 'Validation error', errors });
    }
    next(error);
  }
};

/**
 * @desc    Proxy download resume — fetches from Cloudinary, sends as PDF
 * @route   GET /api/career/:id/download
 * @access  Private/Admin
 */
export const downloadResume = async (req, res, next) => {
  try {
    const application = await Career.findById(req.params.id);
    if (!application || !application.resumeUrl) {
      return res.status(404).json({ success: false, message: 'Resume not found' });
    }

    const fileUrl = application.resumeUrl;
    const originalName = application.resumeOriginalName || 'resume.pdf';
    const filename = originalName.endsWith('.pdf') ? originalName : `${originalName}.pdf`;

    const response = await fetch(fileUrl);
    if (!response.ok) {
      console.error(`Failed to fetch resume from storage. Status: ${response.status} ${response.statusText}`);
      return res.status(502).json({ success: false, message: 'Failed to fetch resume from storage' });
    }

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);

    const nodeStream = Readable.fromWeb(response.body);
    nodeStream.pipe(res);

  } catch (error) {
    console.error('Resume proxy error:', error);
    next(error);
  }
};





/**
 * @desc    Get all applications
 * @route   GET /api/careers
 * @access  Private/Admin
 */
export const getAllApplications = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const status = req.query.status;
    const applyFor = req.query.applyFor;
    const search = req.query.search;

    let query = {};
    if (status && ['new', 'reviewing', 'shortlisted', 'rejected'].includes(status)) query.status = status;
    if (applyFor) query.applyFor = applyFor;
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
        { mobile: { $regex: search, $options: 'i' } },
      ];
    }

    const applications = await Career.find(query).sort({ createdAt: -1 }).skip(skip).limit(limit);
    const total = await Career.countDocuments(query);

    res.status(200).json({
      success: true,
      data: applications,
      pagination: {
        page, limit, total,
        pages: Math.ceil(total / limit),
        hasNextPage: page < Math.ceil(total / limit),
        hasPrevPage: page > 1,
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Get single application
 * @route   GET /api/career/:id
 * @access  Private/Admin
 */
export const getApplicationById = async (req, res, next) => {
  try {
    const application = await Career.findById(req.params.id);
    if (!application) {
      return res.status(404).json({ success: false, message: 'Application not found' });
    }
    res.status(200).json({ success: true, data: application });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Update application status
 * @route   PUT /api/career/:id/status
 * @access  Private/Admin
 */
export const updateApplicationStatus = async (req, res, next) => {
  try {
    const { status } = req.body;
    if (!['new', 'reviewing', 'shortlisted', 'rejected'].includes(status)) {
      return res.status(400).json({ success: false, message: 'Invalid status value' });
    }
    const application = await Career.findByIdAndUpdate(
      req.params.id, { status }, { new: true, runValidators: true }
    );
    if (!application) {
      return res.status(404).json({ success: false, message: 'Application not found' });
    }
    res.status(200).json({ success: true, message: 'Status updated successfully', data: application });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Delete application
 * @route   DELETE /api/career/:id
 * @access  Private/Admin
 */
export const deleteApplication = async (req, res, next) => {
  try {
    const application = await Career.findById(req.params.id);
    if (!application) {
      return res.status(404).json({ success: false, message: 'Application not found' });
    }

    const publicId = application.resumePublicId || extractPublicIdFromUrl(application.resumeUrl);
    if (publicId) {
      await deleteCloudinaryResource(publicId, 'raw');
    }

    await Career.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, message: 'Application deleted successfully' });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Get application statistics
 * @route   GET /api/careers/stats
 * @access  Private/Admin
 */
export const getApplicationStats = async (req, res, next) => {
  try {
    const total = await Career.countDocuments();
    const newApps = await Career.countDocuments({ status: 'new' });
    const reviewing = await Career.countDocuments({ status: 'reviewing' });
    const shortlisted = await Career.countDocuments({ status: 'shortlisted' });
    const rejected = await Career.countDocuments({ status: 'rejected' });

    const byPosition = await Career.aggregate([
      { $group: { _id: '$applyFor', count: { $sum: 1 } } },
      { $sort: { count: -1 } },
    ]);

    const last7Days = await Career.aggregate([
      { $match: { createdAt: { $gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) } } },
      { $group: { _id: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } }, count: { $sum: 1 } } },
      { $sort: { _id: 1 } },
    ]);

    res.status(200).json({
      success: true,
      data: { total, new: newApps, reviewing, shortlisted, rejected, byPosition, last7Days },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Get available job positions
 * @route   GET /api/positions
 * @access  Public
 */
export const getAvailablePositions = async (req, res, next) => {
  try {
    const positions = ['Client Servicing Executive', 'Business Development Executive', 'Graphic Designer', 'Web Developer', 'App Developer', 'Other'];
    res.status(200).json({ success: true, data: positions });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Get active positions with full details
 * @route   GET /api/positions/active
 * @access  Public
 */
export const getActivePositions = async (req, res, next) => {
  try {
    const positions = [
      {
        _id: '1',
        title: 'Client Servicing Executive',
        location: 'Mumbai',
        experience: '0-2 years',
        description: 'Client Servicing Executive plays a critical role in satisfying clients and thus bringing repeat business.',
        requirements: ['MBA', 'Good communication skills', 'Problem solving skills'],
        isActive: true,
      },
      {
        _id: '2',
        title: 'Business Development Executive',
        location: 'Mumbai',
        experience: '2-3 years',
        description: 'Shape your career as a Business Development Executive with Mind Frame India Advertising and Communication.',
        requirements: ['MBA Sales & Marketing', 'Excellent Communication Skills', 'Advertising experience'],
        isActive: true,
      },
      {
        _id: '3',
        title: 'Graphic Designer',
        location: 'Mumbai',
        experience: '3 years',
        description: 'Shape your career with Mind Frame India Advertising and Communication.',
        requirements: ['Corel Draw', 'Illustrator', 'Adobe Photoshop', 'Web design experience'],
        isActive: true,
      },
      {
        _id: '4',
        title: 'Web Developer',
        location: 'Mumbai',
        experience: '1-3 years',
        description: 'Build modern, responsive web applications using latest technologies and frameworks.',
        requirements: ['HTML/CSS/JavaScript', 'React/Vue/Angular', 'REST APIs', 'Git'],
        isActive: true,
      },
      {
        _id: '5',
        title: 'App Developer',
        location: 'Mumbai',
        experience: '1-3 years',
        description: 'Create innovative mobile applications using modern technologies.',
        requirements: ['iOS/Android', 'Swift/Kotlin/React Native', 'Mobile UI/UX', 'API integration'],
        isActive: true,
      },
    ];

    res.status(200).json({ success: true, data: positions });
  } catch (error) {
    next(error);
  }
};