// controllers/positionController.js
import Position from '../models/Position.js';

/**
 * @desc    Create a new position
 * @route   POST /api/positions
 * @access  Private/Admin
 */
export const createPosition = async (req, res, next) => {
  try {
    const { 
      title, 
      description, 
      location, 
      experience, 
      salary,
      jobType,
      requirements,
      responsibilities,
      isFeatured 
    } = req.body;

    // Check if position already exists
    const existingPosition = await Position.findOne({ title: title.trim() });
    if (existingPosition) {
      return res.status(400).json({ 
        success: false, 
        message: 'This position already exists' 
      });
    }

    const position = await Position.create({
      title: title.trim(),
      description: description?.trim() || '',
      location: location?.trim() || 'Mumbai',
      experience: experience?.trim() || 'Entry Level',
      salary: salary?.trim() || 'Negotiable',
      jobType: jobType || 'Full-time',
      requirements: requirements || [],
      responsibilities: responsibilities || [],
      isFeatured: isFeatured || false,
      isActive: true,
      postedBy: req.user?._id,
    });

    res.status(201).json({
      success: true,
      message: 'Position created successfully',
      data: position,
    });
  } catch (error) {
    console.error('Error creating position:', error);
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(e => e.message);
      return res.status(400).json({ success: false, message: 'Validation error', errors });
    }
    next(error);
  }
};

/**
 * @desc    Get all positions with pagination and search
 * @route   GET /api/positions
 * @access  Private/Admin
 */
export const getAllPositions = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const search = req.query.search || '';
    const isActive = req.query.isActive;
    const jobType = req.query.jobType;

    let query = {};
    
    if (search) {
      query.title = { $regex: search, $options: 'i' };
    }
    
    if (isActive !== undefined && isActive !== '') {
      query.isActive = isActive === 'true';
    }
    
    if (jobType && jobType !== '') {
      query.jobType = jobType;
    }

    const positions = await Position.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
        .lean(); // ✅ add this

      
    const total = await Position.countDocuments(query);

    res.status(200).json({
      success: true,
      data: positions,
      pagination: {
        page,
        limit,
        total,
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
 * @desc    Get active positions only (for frontend)
 * @route   GET /api/positions/active
 * @access  Public
 */
export const getActivePositions = async (req, res, next) => {
  try {
    const { jobType, search } = req.query;
    let query = { isActive: true };
    
    if (jobType && jobType !== 'all') {
      query.jobType = jobType;
    }
    
    if (search) {
      query.title = { $regex: search, $options: 'i' };
    }
    
    const positions = await Position.find(query)
      .sort({ isFeatured: -1, createdAt: -1 });
      
    res.status(200).json({
      success: true,
      count: positions.length,
      data: positions,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Get featured positions
 * @route   GET /api/positions/featured
 * @access  Public
 */
export const getFeaturedPositions = async (req, res, next) => {
  try {
    const positions = await Position.find({ isActive: true, isFeatured: true })
      .sort({ createdAt: -1 })
      .limit(3);
      
    res.status(200).json({
      success: true,
      data: positions,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Get single position
 * @route   GET /api/position/:id
 * @access  Public
 */
export const getPositionById = async (req, res, next) => {
  try {
    const position = await Position.findById(req.params.id);
    if (!position) {
      return res.status(404).json({ success: false, message: 'Position not found' });
    }
    res.status(200).json({ success: true, data: position });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Update position
 * @route   PUT /api/position/:id
 * @access  Private/Admin
 */
export const updatePosition = async (req, res, next) => {
  try {
    const { 
      title, 
      description, 
      location, 
      experience, 
      salary,
      jobType,
      requirements,
      responsibilities,
      isActive,
      isFeatured 
    } = req.body;

    const position = await Position.findById(req.params.id);
    if (!position) {
      return res.status(404).json({ success: false, message: 'Position not found' });
    }

    // Check if new title already exists (if title is being changed)
    if (title && title !== position.title) {
      const existingPosition = await Position.findOne({ 
        title: title.trim(), 
        _id: { $ne: req.params.id } 
      });
      if (existingPosition) {
        return res.status(400).json({ 
          success: false, 
          message: 'This position title already exists' 
        });
      }
    }

    const updated = await Position.findByIdAndUpdate(
      req.params.id,
      {
        title: title?.trim() || position.title,
        description: description?.trim() || position.description,
        location: location?.trim() || position.location,
        experience: experience?.trim() || position.experience,
        salary: salary?.trim() || position.salary,
        jobType: jobType || position.jobType,
        requirements: requirements || position.requirements,
        responsibilities: responsibilities || position.responsibilities,
        isActive: isActive !== undefined ? isActive : position.isActive,
        isFeatured: isFeatured !== undefined ? isFeatured : position.isFeatured,
      },
      { new: true, runValidators: true }
    );

    res.status(200).json({
      success: true,
      message: 'Position updated successfully',
      data: updated,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Delete position
 * @route   DELETE /api/position/:id
 * @access  Private/Admin
 */
export const deletePosition = async (req, res, next) => {
  try {
    const position = await Position.findByIdAndDelete(req.params.id);
    if (!position) {
      return res.status(404).json({ success: false, message: 'Position not found' });
    }
    res.status(200).json({ success: true, message: 'Position deleted successfully' });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Bulk delete positions
 * @route   POST /api/positions/bulk-delete
 * @access  Private/Admin
 */
export const bulkDeletePositions = async (req, res, next) => {
  try {
    const { ids } = req.body;
    if (!ids || !ids.length) {
      return res.status(400).json({ success: false, message: 'No positions selected' });
    }
    
    const result = await Position.deleteMany({ _id: { $in: ids } });
    res.status(200).json({
      success: true,
      message: `${result.deletedCount} positions deleted successfully`,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Toggle position active status
 * @route   PATCH /api/position/:id/toggle
 * @access  Private/Admin
 */
export const togglePositionStatus = async (req, res, next) => {
  try {
    const position = await Position.findById(req.params.id);
    if (!position) {
      return res.status(404).json({ success: false, message: 'Position not found' });
    }

    position.isActive = !position.isActive;
    await position.save();

    res.status(200).json({
      success: true,
      message: `Position ${position.isActive ? 'activated' : 'deactivated'} successfully`,
      data: position,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Update application count
 * @route   PATCH /api/position/:id/increment-applications
 * @access  Public
 */
export const updateApplicationCount = async (req, res, next) => {
  try {
    const position = await Position.findById(req.params.id);
    if (!position) {
      return res.status(404).json({ success: false, message: 'Position not found' });
    }
    
    await position.incrementApplicationCount();
    
    res.status(200).json({
      success: true,
      message: 'Application count updated',
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Get position statistics
 * @route   GET /api/positions/stats
 * @access  Private/Admin
 */
export const getPositionStats = async (req, res, next) => {
  try {
    const total = await Position.countDocuments();
    const active = await Position.countDocuments({ isActive: true });
    const inactive = await Position.countDocuments({ isActive: false });
    const featured = await Position.countDocuments({ isFeatured: true });
    
    // Get applications stats
    const applicationsStats = await Position.aggregate([
      { $group: { _id: null, total: { $sum: '$applicationCount' } } }
    ]);
    
    const totalApplications = applicationsStats[0]?.total || 0;

    res.status(200).json({
      success: true,
      data: {
        total,
        active,
        inactive,
        featured,
        totalApplications,
      },
    });
  } catch (error) {
    next(error);
  }
};