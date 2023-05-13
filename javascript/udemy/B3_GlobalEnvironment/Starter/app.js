// call b and a but at top
b(); // b is available
console.log(a); // a is undefined here but is callable
// "hoisting" both are available because execution context allocates memory for them on startup.
// variables are set to undefined until read

var a = "Hello Mothafucka";

function b() {
  console.log("!!Function B is Called!!");
}

// call b and a
b();
console.log(a);

// variable is already created when this is called
console.log(showUndefined);

// variable has been executed
var showUndefined = 1;
if (showUndefined === undefined) {
  console.log("is undefined");
} else {
  console.log("is defined");
}


function toRun() {
};

function ran() {
	toRun();
};

ran();