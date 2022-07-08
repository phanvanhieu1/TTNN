const express = require('express');
const router = express.Router();
const controller = require('../controllers/homeController');

router.get('/tin-tong-hop', controller.new_All);
router.get('/all-city',controller.new_All_City)
module.exports = router;