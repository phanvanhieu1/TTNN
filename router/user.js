const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');
const passport = require('passport');



router.post('/register', passport.authenticate('local.register', {
    successRedirect: '/user/register_success',
    failureRedirect: '/user/register',
    failureFlash: true
}));
router.get('/register_success',controller.register_success);
router.get('/register',controller.register);
module.exports = router;