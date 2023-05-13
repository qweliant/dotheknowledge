// polyfill
if (!Object.create) {
    Object.create = function (o) {
      if (arguments.length > 1) {
        throw new Error('Object.create implementation'
        + ' only accepts the first parameter.');
      }
      function F() {}
      F.prototype = o; // protypal
      return new F();
    };
  }

var person = {
  first: "Default",
  last: "Name",
  greet: function () {
    return "Sup lil nigga, uhh, whats ya name? " + this.first + ".";
  },
};

// purely prototypal
var damali = Object.create(person);
damali.first = "dee"
damali.last = "boyd"
console.log(damali);
