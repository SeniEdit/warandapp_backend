var express = require('express');
var router = express.Router();
var User = require('../models/User.js')
var passport = require('passport')

router.get('/', function(req, res) {
  res.json({message: "je doet een GET, doos"})
})

router.post('/signup', passport.authenticate('local-signup'), function(req, res) {
    resUser = res.req.user;
    res.json({succes: true, _id: resUser._id});
  }
);

router.post('/login', passport.authenticate('local-login'), function(req, res) {
    resUser = res.req.user;
    res.json({succes: true, _id: resUser._id});
});

router.get('/logout', function(req, res) {
  req.logout();
  res.json({success: true});
});

module.exports = router;
