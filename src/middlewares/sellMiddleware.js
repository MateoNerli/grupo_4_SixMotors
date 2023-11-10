function sellMiddleware(req, res, next) {
  if (!req.isAuthenticated()) {
    return res.redirect("/login");
  }
}
