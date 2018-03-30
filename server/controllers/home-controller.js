const viewsPath = './public/views/home/';
var path = require('path');

module.exports = {

    index: function(req, res){
        res.sendfile('public/views/home/index.html');
        
        console.log('req user homepage: -->');

        if(req.user){
            console.log(req.user);    
        }else{
            console.log('Nqma go, kupe se !');
        }

        
    },

    about: function(req, res){
        res.sendfile('public/views/about.html');
    },

    contact: function(req,res){
        res.write('Not implemented yet')
    }

}