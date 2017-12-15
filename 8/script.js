const express = require('express');
var app = express(); //Express also give fallback messages to un-recognised get requests
console.log(__dirname);
app.use('/cssfiles',express.static(__dirname+'/assests'))

app.get('/',function (req,res) {
  res.send("Hello there :)");
});
app.listen(1337,function () {
  console.log("Listening at leets port");
});
