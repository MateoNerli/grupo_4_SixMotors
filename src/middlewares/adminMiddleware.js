const User = require("../models/User");

function adminMiddleware(req, res, next) {
  res.locals.isAdmin = false;

  let emailInCookie = req.cookies.userEmail;
  let userFromCookie = User.findByField("email", emailInCookie);

  if (userFromCookie) {
    req.session.userLogged = userFromCookie;
  }

  if (req.session.userLogged) {
    if (req.session.userLogged.type === "admin") {
      res.locals.isAdmin = true;
    }
  }

  next();
}

module.exports = adminMiddleware;
