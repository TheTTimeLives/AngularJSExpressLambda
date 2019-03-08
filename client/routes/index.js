// index.js
const express = require('express');
const router = express.Router();
// Set Route for Home 
router.get('/', function(req, res, next) {
  res.render('index.html');
});
module.exports = router;