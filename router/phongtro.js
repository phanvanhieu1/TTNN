const express = require("express")
const router = express.Router()
const controller= require('../controllers/phongtroController')

router.get('/', controller.getWard)


module.exports = router;