var express = require('express'),
router = express.Router();

var controller = require('../controllers/control');

router.post('/parse',controller.vTwoFn);

module.exports = router;