var express = require('express');
var router = express.Router();
const passport = require('passport');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

router.get('/auth/google/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/activities',
    failureRedirect : '/activities'
  }
));

router.get("/logout", (req, res) => {
  req.logout(req.user, err => {
      if (err) return next(err);
      res.redirect("/");
  });
});


module.exports = router;
