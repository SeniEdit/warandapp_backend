var express = require('express');
var router = express.Router();
var User = require('../models/User.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/setup', function(req, res) {
  var frank = new User({
    username: 'Frank',
    password: 'test',
    //name: 'Frank',
    //homeCode: 1234
  });

  frank.save(function(err) {
    if (err) throw err;

    console.log('User saved successfully');
    res.json({success: true});
  })
});

module.exports = router;
