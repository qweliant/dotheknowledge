function mapForEach(arr, fn) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i]));
  }

  return newArr;
}

var arr1 = [1, 2, 3];
console.log(arr1);

var arr2 = mapForEach(arr1, function (item) {
  return item * 2;
});
console.log(arr2);

var arr3 = mapForEach(arr1, function (item) {
  return item ^ 256;
});
console.log(arr3);

var checkLimit = function (limiter, item) {
  return item > limiter;
};

// using functional programming i can simplify this further
var arr4 = mapForEach(arr1, checkLimit.bind(this, 10));
console.log(arr4);

// returning a function that returns a function wtih only a single variable defiend is cool
var checkLimit2 = function (limiter) {
  return function (limiter, item) {
    return item > limiter;
  }.bind(this, limiter); // only need to pass in limiter to run function
};

var arr5 = mapForEach(arr1, checkLimit2(3));
console.log(arr5);
