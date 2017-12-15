const express = require('express');
var app = express(); //Express also give fallback messages to un-recognised get requests
app.get('/',function (req,res) {
  res.send("Hello there :)");
});
app.listen(1337,function () {
  console.log("Listening at leets port");
});
