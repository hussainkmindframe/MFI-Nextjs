/**
 * Async Handler Utility
 * Wraps async route handlers to catch errors automatically
 * Eliminates the need for try-catch blocks in every controller method
 */

const asyncHandler = (fn) => (req, res, next) => {
  return Promise.resolve(fn(req, res, next)).catch(next);
};

export default asyncHandler;
