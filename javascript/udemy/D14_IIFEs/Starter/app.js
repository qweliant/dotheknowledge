// function statement
function greet(name) {
  console.log("Hello " + name);
}

greet("Damali");

// function expression
var greeting = function (name) {
  console.log("Hello " + name);
};

greeting("Nala");

//immmediately invoked function expression
var greetMe = (function (name) {
  return "Hello " + name;
})("Kevin");

console.log(greetMe);

(function kitty(kittycat) {
  this.name = "Hello " + kittycat;
  console.log("nuttin with this", this);
  return "Hello " + kittycat;
}('power cat'));

console.log(this.name);
