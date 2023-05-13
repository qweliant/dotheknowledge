var person = {
  first: "john",
  last: "doe",
  getFullName: function () {
    var fullName = this.first + " " + this.last;
    return fullName;
  },
};

var logName = function (lang1, lang2) {
  // which context will this reference?
  console.log("Logged: " + this.getFullName());
  console.log("Arguments: " + lang1, lang2);
  console.log("-----------------------------");
};

// we can bind to the person context to a copy of the logName function
var logPersonName = logName.bind(person);
logPersonName("en");

// calls the function with context
logName.call(person, "fr", "tk");

// needs an array
logName.apply(person, ["ng", "jp"])


// function borrowing
var person2 = {
    firstname: 'Jane',
    lastname: 'Doe'
}

console.log(person.getFullName.apply(person2));

// function currying
function multiply(a, b) {
    return a*b;   
}

var multipleByTwo = multiply.bind(this, 2);
console.log(multipleByTwo(4));

var multipleByThree = multiply.bind(this, 3);
console.log(multipleByThree(4));