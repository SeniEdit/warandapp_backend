module.exports = function(app, passport) {
  var index = require('../routes/index');
  var users = require('../routes/users');
  var houses = require('../routes/houses');
  var authentication = require('../routes/authentication');

  app.use('/', index);
  app.use('/authenticate', authentication);
  app.use('/users', users);
  app.use('/houses', houses);
}
