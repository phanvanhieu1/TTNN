const express = require('express');
const router = express.Router();
const controller = require('../controllers/postController');


// router.get('/', controller.getIndex);
router.get('/', controller.postIndex);

module.exports = router;