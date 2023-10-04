const db = require("../database/models");

function userLoggedMiddleware(req, res, next) {
  // Comprobar si el usuario está autenticado
  if (req.session.userLogged) {
    // El usuario está autenticado, configurar variables locales para el template
    res.locals.isLogged = true;
    res.locals.userLogged = req.session.userLogged;
  } else {
    // El usuario no está autenticado, configurar variables locales para el template
    res.locals.isLogged = false;
  }

  next();
}

module.exports = userLoggedMiddleware;
