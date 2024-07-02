const passport = require("passport")
const GoogleStrategy = require('passport-google-oauth20').Strategy;
require('dotenv').config();
const User = require('./models/User')

const baseURL = process.env.BASE_URL;

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: `${baseURL}/api/auth/google/callback`,
    passReqToCallback: true
  },
  async function(req, accessToken, refreshToken, profile, done) {
    try{
      // Check if user already exists based on Google ID
      let user = await User.findOne({ googleId: profile.id });

      if(!user){
       // Retrieve role from session
       const role = profile._json.role || req.session.role; // Fallback to role in session if not provided
      // Create new user if not found
        user = await User.create({
          googleId: profile.id,
          email: profile.emails[0].value,
          role: role
        })
        await user.save()
      }

      // Pass user to done callback
      return done(null, user)
    }catch(err){
      return done(err, null)
    }
  }
));

passport.serializeUser((user, done) => {
  done(null, user.id)
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user)
  })
});

module.exports = passport;