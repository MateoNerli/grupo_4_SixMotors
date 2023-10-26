const response = require("express");
const { use } = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const db = require("../database/models");
const dotenv = require("dotenv");

use(
  "auth-google",
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/google",
    },
    function (accessToken, refreshToken, profile, done) {
      db.User.findOrCreate({
        where: { googleId: profile.id },
        defaults: {
          name: profile.displayName,
          email: profile.emails[0].value,
          password: profile.id,
          img: profile.photos[0].value,
        },
      })
        .then((user) => {
          return done(null, user[0]);
        })
        .catch((err) => {
          return done(err, null);
        });
    }
  )
);
