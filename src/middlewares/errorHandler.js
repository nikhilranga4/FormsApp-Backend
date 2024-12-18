// errorHandler.js

// Custom error handler middleware
function errorHandler(err, req, res, next) {
  console.error(err.stack);

  // Set the status code and send the error message in the response
  res.status(err.status || 500).json({
    message: err.message || 'Internal Server Error',
    stack: process.env.NODE_ENV === 'production' ? null : err.stack, // Hide stack trace in production
  });
}

module.exports = errorHandler;
