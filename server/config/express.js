const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
const session = require('express-session');
const passport = require('passport');

module.exports = (app)=>{

    //app.use(cookieParser); // have to check how it work
    app.use(bodyParser.urlencoded({extended:true})); // for JSON you have to use '.json()'
    app.use(session({secret:'unicornsAreReal!!!!!!',resave:false, saveUninitialized:false}));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(express.static(__dirname + './../../public'));
    
    console.log('Express Ready!');
}