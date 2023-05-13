function a() {
  function b() {
    console.log(myVar);
  }
  b();
}

var myVar = 1;
a();

// will give refwerence error outside its block scope
// console.log(letValue);

// can call letVar
console.log(letVar);

for (i = 5; i; i--) {
  var letVar;
  let letValue = 6 - i;
  console.log(letValue);
}
