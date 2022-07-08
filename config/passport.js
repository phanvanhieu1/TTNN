const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user/user.model');

const bcypt = require('bcrypt');


passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
passport.deserializeUser(function(id, done) {
    User.findById(id, function (err, user) {
      done(err, user);
    });
});

//passport register
passport.use('local.regis',new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
}),(req, username, password, done) => {
    User.findOne({
        'local.use': username
    },(err, user) => {
        if(err) 
        return dine(err);
        if(user)
        return done(null, false, req.flash('signUpMessage','User already exists, pls try another username'));
let {email,firstname, lastname} = req.body;
let newUser = new User();
newUser.local.username = username;
newUser.local.password = password;
newUser.local.email = email;
newUser.local.firstname = firstname;
newUser.local.lastname = lastname;
bcypt.hash(password, 10, (err, hash) => {
    if(err)
    throw err;
    newUser.local.password = hash;
    newUser.save((err, result) => {
        if(err)
        return done(err);
        else 
        return done(null, result);
    })
})
    })
})