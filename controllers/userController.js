const rn = require('random-number');
const Nexmo = require('nexmo');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const User = require('../models/User/user.model');
const feedback = require('../models/User/feedback');
const bcrypt = require('bcrypt');


module.exports.register = (req, res) => {
    res.json({
        message: req.flash('message'),
        result:false
    })
}
module.exports.register_success = (req, res) => {
    res.json({
        message: 'Register success',
        result:true
    })
}