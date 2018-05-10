const passport = require("passport");
const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;
const LocalStrategy = require("passport-local").Strategy;

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

const localOpts = {};
localOpts.usernameField = "email";
localOpts.passwordField = "password";
localOpts.session = false;
localOpts.passReqToCallback = true;
passport.use(
  new LocalStrategy(localOpts, (req, username, password, done) => {})
);
