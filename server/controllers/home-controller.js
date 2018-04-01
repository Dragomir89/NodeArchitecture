const viewsPath = './public/views/home/';
var path = require('path');

module.exports = {

    index: function(req, res){
        res.sendfile('public/views/home/index.html');
        
        console.log('req user homepage: -->');

        if(req.user){
            console.log(req.user.username + ' is logged');    
        }else{
            console.log('session is empty');
        }

        
    },

    about: function(req, res){
        res.sendfile('public/views/about.html');
    },

    contact: function(req,res){
        res.write('Not implemented yet')
    }

}