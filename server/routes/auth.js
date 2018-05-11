/**
 * Module contains routing for authentication
 */
const passport = require("passport");
const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;
const LocalStrategy = require("passport-local").Strategy;
const router = require("express").Router();
const { UsersController } = require("../controllers");
/**
 * Passport Strategies
 */

//Json Web Token Strategy
const jwtOpts = {};
jwtOpts.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();
jwtOpts.secretOrKey = secretKey;
jwtOpts.issuer = "beechat";
jwtOpts.audience = "beechat";
passport.use(
  new JWTStrategy(jwtOpts, (jwtPayload, done) => {
    done(null, jwtPayload.user);
  })
);

//Local Strategy
const localOpts = {};
localOpts.usernameField = "email";
localOpts.passwordField = "password";
localOpts.session = false;
localOpts.passReqToCallback = true;
passport.use(
  new LocalStrategy(localOpts, (req, username, password, done) => {})
);
/**
 * Handle signup request
 * @function signup
 * @return {Object}
 * message @type {string}
 * success @type {boolean}
 */
router.post("/signup", (req, res, next) => {
  let newUser = req.body.user;
  UsersController.createUser(newUser, true)
    .then(user => {
      return res.status(200).send({ message: "Registered Successfully" });
    })
    .catch(err => {
      return res.status(400).send({ message: err });
    });
});

module.exports = router;
