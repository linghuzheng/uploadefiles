var http = require('http');
var fs = require('fs');
var multiparty = require('multiparty');
var server = http.createServer(function(req, res){
   var form = new multiparty.Form();
   console.log('request');
   form.parse(req,function(err,fields,files){
     console.log(files);
     if(files){
        files = files.my_file;
        for(var i=0;i<files.length;i++){
          var path = files[i].path;
          console.log(path);
          var  read =  fs.createReadStream(path);
          var write = fs.createWriteStream('./output.php');
          read.pipe(write);
      }   
     }   
   }); 
