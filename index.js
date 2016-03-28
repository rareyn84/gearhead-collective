var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
var sessions = require('sessions');
var passport = require('passport');
var fbPassport = require('passport-facebook');

// CONTROLLERS
var ThreadCtrl = require('./api/controllers/ThreadCtrl')
var UserCtrl = require('./api/controllers/UserCtrl')
var CommentCtrl = require('./api/controllers/CommentCtrl')

var app = express();
app.use(bodyParser.json());

var mongoUri = "mongodb://rareynolds84:Chulched1!@ds025429.mlab.com:25429/gearhead-collective";
mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
    console.log("Mongoing like a boss")
})

app.use(express.static(__dirname + '/public'));

//ENDPOINTS

            // AUTHENTICATION
app.post('/api/user/signup', UserCtrl.createUser)
app.post('/api/user/login', UserCtrl.loginUser)

            // THREADS
app.get('/api/forum', ThreadCtrl.getThreads)
app.get('/api/forum/thread/:id', ThreadCtrl.getThread)
app.put('/api/thread/update/:id', ThreadCtrl.updateThread)
app.post('/api/forum/new', ThreadCtrl.createThread)
// app.delete('/api/forum/thread/:id', ThreadCtrl.deleteThread)


            //PROFILE
app.get('/api/user/:id', UserCtrl.getProfile)
app.put('/api/user/update/:id', UserCtrl.updateUser)
// app.delete('/api/user', userCtrl.delete)


            //COMMENTS
app.post('/api/comment/new', CommentCtrl.createComment)
app.get('/api/comment', CommentCtrl.getComments)




var port = process.env.PORT || 8008;
app.listen(port, function() {
    console.log('Hulk smashing on port ' + port)
})

