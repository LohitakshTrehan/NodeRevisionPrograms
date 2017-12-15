const express = require('express');
const cookieParser = require('cookie-parser');
var app = express();
app.use(cookieParser());
app.get('/',function(req,res) {
  res.cookie("myCookie","first one created");
  res.end('Wow');
});
//now to remove a cookie
app.get('/typeThis',function(req,res) {
  res.clearCookie('myCookie');
  res.end('removed');
});

app.listen(1337,function() {
  console.log("listening the leet port");
});
