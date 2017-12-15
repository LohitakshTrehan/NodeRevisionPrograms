const http = require('http');

var server = http.createServer(engine);

server.listen(1337,function functionName() {
  console.log("Serevr was hit by a request at leets port");
}); //leets port

function engine(req,res) {
  res.writeHead(200,{'Content-Type': 'text/plain',"MycoustomHeader":"fromm lohitaksh"}); //Add Headers here
  //console.log(req);
  //console.log(res);
  res.end("Hey there from the server. Request from page: " + req.url);
}

//server.createServer(engine).listen(1337);
