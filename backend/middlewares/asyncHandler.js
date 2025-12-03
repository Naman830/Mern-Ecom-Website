const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch((error) => {
    if (!res.headersSent) {
      const status = res.statusCode !== 200 ? res.statusCode : 500;
      res.status(status).json({ message: error.message });
    } else {
      next(error);
    }
  });
};

export default asyncHandler;
