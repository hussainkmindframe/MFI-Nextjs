/**
 * Global Error Handler Middleware
 * Centralizes error handling for all routes
 */

const errorHandler = (err, req, res, next) => {
  // Only log errors that are not expected 401 auth errors
  if (err.statusCode !== 401 || (err.message && !err.message.includes('Not authorized'))) {
    console.error('ERROR:', {
      message: err.message,
      statusCode: err.statusCode,
      stack: err.stack,
    });
  }

  // Mongoose validation error
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map((e) => e.message);
    err.statusCode = 400;
    err.message = message.join(', ');
  }

  // Mongoose duplicate key error
  if (err.code === 11000) {
    const field = Object.keys(err.keyPattern)[0];
    err.statusCode = 400;
    err.message = `${field.charAt(0).toUpperCase() + field.slice(1)} already exists`;
  }

  // Mongoose bad ObjectId / CastError
  if (err.name === 'CastError') {
    err.statusCode = 400;
    err.message = 'Invalid format for data field or Resource not found';
  }

  // Multer File Upload Errors
  if (err.name === 'MulterError') {
    err.statusCode = 400;
    if (err.message === 'File too large') {
      err.message = 'The uploaded file exceeds the 20MB size limit limit.';
    }
  }

  // JWT errors
  if (err.name === 'JsonWebTokenError') {
    err.statusCode = 401;
    err.message = 'Not authorized to access this route';
  }

  if (err.name === 'TokenExpiredError') {
    err.statusCode = 401;
    err.message = 'Token expired, please login again';
  }

  // Send error response
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || 'Server Error',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
};

export default errorHandler;
