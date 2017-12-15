//Events and Event emmiters
const events = require('events');
var eventEmitter = new events.EventEmitter;

eventEmitter.on('myCoustomEvent',function(arg1,arg2) {
  console.log(arg1+arg2);
})

setTimeout(function () {
  eventEmitter.emit('myCoustomEvent','str1',' str2');
},5000)
