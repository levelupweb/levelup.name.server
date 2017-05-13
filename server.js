var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var morgan      = require('morgan');
var mongoose    = require('mongoose'); 
var config      = require('./config'); 
var port        = config.port; 
var isLoggedIn  = require('./utils/isloggedin')
var cors        = require('cors')
var cookieParser= require('cookie-parser')
var validator   = require('express-validator');
var multer      = require('multer')
var path        = require('path')

// Route instances
var page       = require('./routes/page.js')
var user       = require('./routes/user.js')
var post       = require('./routes/post.js')


mongoose.connect(config.database);
app.set('superSecret', config.secret);
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('/get', isLoggedIn);
app.use(validator());
app.use(cors({credentials: true}));

// Static files
app.use('/storage', express.static('uploads'));

app.use('/page', page);
app.use('/user', user);
app.use('/post', post);

app.listen(port);
console.log('> Сервер работает по адресу: http://localhost:' + port);