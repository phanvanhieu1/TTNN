const express = require('express');
const router = express.Router();
const controller = require('../controllers/postController');


router.get('/', controller.getIndex);
router.post('/', controller.postIndex);

module.exports = router;