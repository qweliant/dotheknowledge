function greet(tosaytoyou) {
  return function (name) {
    return function (catchphrase) {
      console.log(tosaytoyou + " " + name + " " + catchphrase);
    };
  };
}

var sayHi = greet("Hi");
sayHi("tony")("the tiger");
