var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
var session = require('express-session');
var fbPassport = require('passport-facebook');

//CONFIG
var config = require('./config');

//SERVICES
var passport = require('./services/passport');

//POLICIES
var isAuthed = function(req, res, next) {
  console.log("I be logged in...");
  if (!req.isAuthenticated()) return res.status(401).send();
  return next();
};

// CONTROLLERS
var ThreadCtrl = require('./api/controllers/ThreadCtrl')
var UserCtrl = require('./api/controllers/UserCtrl')
var CommentCtrl = require('./api/controllers/CommentCtrl')

//EXPRESS
var app = express();
app.use(express.static(__dirname + '../public'));
app.use(bodyParser.json());
app.use(session({
  secret: config.SESSION_SECRET,
  saveUninitialized: false,
  resave: false
}));
app.use(passport.initialize());
app.use(passport.session());

//CONNECTIONS
var mongoUri = config.MONGO_URI;
var port = config.PORT;

mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
    console.log("Mongoing like a boss");
    app.listen(port, function() {
        console.log('Bracking on port ' + port);
    });
});

app.use(express.static(__dirname + '/../public'));

//ENDPOINTS

            //AUTHENTICATION
app.post('/api/user/signup', UserCtrl.createUser);
app.post('/api/user/login', passport.authenticate('local', {
  successRedirect: '/api/me'
}));
app.get('/api/user/logout', function(req, res, next) {
  req.logout();
  return res.status(200).send('logged out');
});
           
            // THREADS
app.get('/api/forum', ThreadCtrl.getThreads)
app.get('/api/forum/thread/:id', ThreadCtrl.getThread)
app.put('/api/thread/update/:id', isAuthed, ThreadCtrl.updateThread)
app.post('/api/forum/new', isAuthed, ThreadCtrl.createThread)
// app.delete('/api/forum/thread/:id', ThreadCtrl.deleteThread)


            //PROFILE
app.get('/api/user/:id', UserCtrl.readProfile)
app.put('/api/user/update/:id', isAuthed, UserCtrl.updateUser)
// app.delete('/api/user', isAuthed, userCtrl.delete)


            //COMMENTS
app.post('/api/comment/new', isAuthed, CommentCtrl.createComment)
app.get('/api/comment', CommentCtrl.getComments)







