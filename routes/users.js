var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log("Hello Test Commit");
  console.log("modified by wassim SLIM21");
  
  res.send('respond with a resource');
});

module.exports = router;
