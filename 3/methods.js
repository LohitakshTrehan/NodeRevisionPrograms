// var methods = {}; instead of doing this, now you can do    5.)
var methods = module.exports = {};    //6.)
var output = 1234; //private variable   1.)
methods.updateserver = function() {
  console.log('Important function');
}

methods.eatCookies = function() {
  console.log('Chocolate cookies');
}

methods.node = function() {
  console.log('nodejs is awesome');
}

// exports.data = methods; instead of this, you can write      2.)
//module.exports.data = methods; //3.)  //7.) now you can comment this out
//NodeJS automatically creates module.exports = exports = {}   4.)
