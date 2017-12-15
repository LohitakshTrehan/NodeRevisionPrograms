var express = require('express');
var router = express.Router();                                                      
var app = express();

app.use('/users',router);

 router.get('/:username',function(req,res) {   //":" is special, it makes url a variable
   res.end(JSON.stringify(req.params));         // We can also use Regular expressions in url feild
 });

 app.get('/',function(req,res) {
   res.end("hello");
 });

 app.listen(1337,function() {
   console.log("listening to the leet port");
 });
