var express = require('express'),
router = express.Router();

var vOneRoutes = require('./vOne');
var vTwoRoutes = require('./vTwo');

router.use('/v1',vOneRoutes);
router.use('/v2',vTwoRoutes );



module.exports = router;