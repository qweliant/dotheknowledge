const carMakers = ["ford", "toyota", "chevy"];
// carMakers.push(100); // inference means we have an array of strings. if we add another value the array type would be any
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [];

// using inference we get an object we know is a string
// and as a result a strongly typed collection
const car = carMakers[0];
const myCar = carMakers.pop();

carMakers.map((car: string) => {
  car.toLowerCase();
});

// what is the operation precedence here? how does memory get allocated for a type
const importantDates: (Date | string)[] = [new Date(), "2030-10-10"];
importantDates.push("08-03-1992");

// importantDates.push({ one: "is lonely" }); // not valid
