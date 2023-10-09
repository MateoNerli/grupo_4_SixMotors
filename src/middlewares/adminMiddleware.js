const adminMiddleware = (req, res, next) => {
  const { user } = req;
  if (user && user.type === 1) {
    user.isAdmin = true;
  }
  next();
};

module.exports = adminMiddleware;
