function Person(first, last) {
  var self = this;
  self.first = first;
  self.last = last;
  self.sign = "Astrological";
}

Person.prototype.getFullName = function () {
  return this.first + " " + this.last;
};

// creates a new person object with prototypes names above.
// this means EVERY new Person object now has getFullName on its prototype

var damali = new Person("John", "Doe");
console.log(damali);

var shana = new Person("Shana", "Slavin");
console.log(shana);

Person.prototype.getSign = function () {
  return this.sign + " is a good sign";
};

console.log(shana.getSign());
