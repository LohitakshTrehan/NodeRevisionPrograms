var express = require('express');
var path = require('path');
var app = express();
var fs = require('fs');
const bodyParser = require('body-parser');
app.use(bodyParser());
app.use('/cssfiles',express.static(__dirname+'/assests'))
app.get('/',function (req,res) {
  res.sendFile('index.html',{root: path.join(__dirname,'/files')});
});

app.post('/',function(req,res) {
  //res.sendFile('index.html',{root: path.join(__dirname,'/files')});
  res.end(req.body.firstName);
})

app.listen(1337,function() {
  console.log('Listening on leets port');
});
