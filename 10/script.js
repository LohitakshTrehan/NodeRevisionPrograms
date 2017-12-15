var express = require('express');
var path = require('path');
var app = express();
var fs = require('fs');
app.use('/cssfiles',express.static(__dirname+'/assests'))
app.get('/',function (req,res) {
  res.sendFile('index.html',{root: path.join(__dirname,'/files')});
});

//using regular expression in url
app.get(/^(.+)$/,function(req,res) {
  console.log(req.params);
  //asking a filename from server
  //lets check if that kind of file exists or not first
  try{
    if(fs.statSync(path.join(__dirname,'/files/',req.params[0]+'.html')).isFile()){
      res.sendFile(req.params[0]+'.html',{root: path.join(__dirname,'/files')});
    }
  }catch(err){
    res.sendFile('404.html',{root: path.join(__dirname,'/files')});
  }
});

app.listen(1337,function() {
  console.log('Listening on leets port');
});
