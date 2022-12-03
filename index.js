var express = require('express');
var http = require('http');

var session = require('express-session');
const dotenv = require('dotenv');
dotenv.config();

//some variable
var app = express();
var connectDB = require('./config/connection');


app.use(express.static(__dirname));


//using public folder with the name of /assets
app.use("/assets", express.static(__dirname + "/public"));


//calling port
// var config = require('./config/config.json');
const { parse } = require('path');
const PORT = process.env.PORT
    //view engine
app.set('view engine', 'ejs');




app.use('/', require('./routes/mainpageroute'));
app.use('/contactus', require('./routes/contactus'));

app.listen(PORT, function() {
    console.log("server is started", PORT);
});