var express = require('express');
var mongoose = require('mongoose');
var config = require('./config');
var setupController = require('./Controllers/setupController');
var apiController = require('./Controllers/apiController');

var app = express();

//var port = process.env.port || 3000;
var port = 9000;

app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

/* Esta dando erro de funcao */
mongoose.connect(config.getDbConnectionString());

setupController(app);
//Testar usando Postman
apiController(app);

app.get('/', function(req, res){
    res.render('index');
});

app.listen(port);