# JavaScript Type Coercion Explained by Axel Rauschmayer
URL: https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/

Type coercion is the process of converting value from one type to another (such as string to number, object to boolean, and so on). Any type, be it primitive or an object, is a valid subject for type coercion. To recall, primitives are: number, string, boolean, null, undefined + Symbol (added in ES6).


Type coercion can be explicit and implicit. When a developer expresses the intention to convert between types by writing the appropriate code, like Number(value), it’s called explicit type coercion (or type casting). Since JavaScript is a weakly-typed language, values can also be converted between different types automatically, and it is called implicit type coercion. It usually happens when you apply operators to values of different types, like 1 == null, 2/’5', null + new Date(), or it can be triggered by the surrounding context, like with if (value) {…}, where value is coerced to boolean.

**Tags:** favorite


One operator that does not trigger implicit type coercion is ===, which is called the strict equality operator. The loose equality operator == on the other hand does both comparison and type coercion if needed.  Implicit type coercion is a double edge sword: it’s a great source of frustration and defects, but also a useful mechanism that allows us to write less code without losing the readability.


The first rule to know is there are only three types of conversion in JavaScript:  to string to boolean to number Secondly, conversion logic for primitives and objects works differently, but both primitives and objects can only be converted in those three ways.  Let’s start with primitives first.


To explicitly convert values to a string apply the String() function.

Implicit coercion is triggered by the binary + operator, when any operand is a string:

String(123) // explicit
123 + ' ' // implicit

All primitive values are converted to strings naturally as you might expect:

String(123) // '123'
String(-12.3) // '-12.3'
String(null) // 'null'
String(undefined) // 'undefined'
String(true) // 'true'
String(false) // 'false'

Symbol conversion is a bit tricky, because it can only be converted explicitly, but not implicitly. Read more on Symbol coercion rules.

String(Symbol('my symbol')) // 'Symbol(my symbol)' '' + Symbol('my symbol') // TypeError is thrown


To explicitly convert a value to a boolean apply the Boolean() function. Implicit conversion happens in logical context, or is triggered by logical operators ( || && !) .

Boolean(2) // explicit
if (2) { ... } // implicit due to logical context
!!2 // implicit due to logical operator
2 || 'hello' // implicit due to logical operator

Note: Logical operators such as || and && do boolean conversions internally, but actually return the value of original operands, even if they are not boolean.

// returns number 123, instead of returning true
// 'hello' and 123 are still coerced to boolean internally to calculate the expression
let x = 'hello' && 123; // x === 123


list of falsy values.
Boolean('') // false
Boolean(0) // false
Boolean(-0) // false
Boolean(NaN) // false
Boolean(null) // false
Boolean(undefined) // false
Boolean(false) // false


Any value that is not in the list is converted to true, including object, function, Array, Date, user-defined type, and so on. Symbols are truthy values. Empty object and arrays are truthy values as well:
Boolean({}) // true
Boolean([]) // true
Boolean(Symbol()) // true
!!Symbol() // true
Boolean(function() {}) // true


Numeric conversion For an explicit conversion just apply the Number() function, same as you did with Boolean() and String().

Implicit conversion is tricky, because it’s triggered in more cases:

comparison operators (>, <, <=,>=)
bitwise operators ( | & ^ ~)
arithmetic operators (- + * / % ). Note, that binary+ does not trigger numeric conversion, when any operand is a string.
unary + operator
loose equality operator == (incl. !=). Note that == does not trigger numeric conversion when both operands are strings.

Number('123') // explicit
+'123' // implicit
123 != '456' // implicit
4 > '5' // implicit
5/null // implicit
true | 0 // implicit


When converting a string to a number, the engine first trims leading and trailing whitespace, \n, \t characters, returning NaN if the trimmed string does not represent a valid number. If string is empty, it returns 0. null and undefined are handled differently: null becomes 0, whereas undefined becomes NaN. Symbols cannot be converted to a number neither explicitly nor implicitly. Moreover, TypeError is thrown, instead of silently converting to NaN, like it happens for undefined.


When it comes to objects and engine encounters expression like [1] + [2,3], first it needs to convert an object to a primitive value, which is then converted to the final type. And still there are only three types of conversion: numeric, string and boolean.  The simplest case is boolean conversion: any non-primitive value is always coerced to true, no matter if an object or an array is empty or not.  Objects are converted to primitives via the internal [[ToPrimitive]] method, which is responsible for both numeric and string conversion.


