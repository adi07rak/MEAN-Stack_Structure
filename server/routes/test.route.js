const express = require("express");
const router = express.Router();

var myController = require("../controllers/test.controller");

router.use('/specific', myController.mytest);

module.exports = router;