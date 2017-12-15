var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var sessions = require('express-session');
var session;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(sessions({
  secret:'@$^*&^%$FDS^%$DGK&^%$#D$RFG',
  resave: false,
  saveUninitialized:true
}));

app.get('/login',function (req,res) {
  session = req.session;
  if(session.uniqueID){
    res.redirect('/redirects');
  }
  res.sendFile('./files/login.html',{root: __dirname});
});

app.post('/login',function(req,res) {
  session = req.session;
  if(session.uniqueID){
    res.redirect('/redirects');
  }
  //if(req.body.username=='admin' && req.body.password=='admin'){
  session.uniqueID = req.body.username;
  res.redirect('/redirects');
});

app.get('/logout',function(req,res) {
  req.session.destroy();
  res.redirect('/login');    ///A change here maybe
});

app.get('/redirects',function(req,res) {
  session = req.session;
  if(session.uniqueID == 'admin'){
    console.log(session.uniqueID);
    res.redirect('/admin');
  }
  else{
    res.send(req.session.uniqueID+' not found<br><a href="/logout">KILL SESSION</a>');
  }
});

app.get('/admin',function(req,res) {
  session = req.session;
  if(session.uniqueID != 'admin'){
    res.send("You are not authorized hacker <a href='/login'>TRY AGAIN</a>")
  }
  res.send("Yo admin :D ---> logout: <a href='/logout'>KILL SESSION</a>")
})

app.listen(1337,function() {
  console.log('Listening on leets port');
});
