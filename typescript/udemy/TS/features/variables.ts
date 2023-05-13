// these are type annotations for primitives
// let apples: number = '2'; wrong
let apples: number = 6;

let speed: string = "fast";
let hasName: boolean = true;

let nothinReturn: void = void 2;

let nothingMuch: null = null;
let nothin: undefined = undefined;

// there are built in types for objects and functions as well
let now: Date = new Date();

let colors: string[] = ["ch", "r", "cy", "oq", "^5"];
let myNumbers: number[] = [1, 2, 3];
let truths: true[] = [true, true, true];
let falses: false[] = [false, false, false];

// falses.push('false') wrong
// truths.push(false) wrong
truths.push(true); // right
falses.push(false); // right.... ala typescript

class OffRoadCar {}
let car: OffRoadCar = new OffRoadCar();

//object literal type annotation
let point = { x: 21, y: 21 };
// point.u

//               the below stuff defines
//               a fucntion that takes a
//              function and returns a number
// const logNumber: (i: number) => void = (i: number) => {};

/* 
 weve written a bunvh of type annotations 
 that are not actually neccessary because of 
 type inference. this happens when values are declared. 
 --------------------------------------------------------
    let apples: any = 2;
    apples = '5'            legit because type is any
    let apples: = 2;
    apples = '5'            not-legit because type has been inferred as number
*/

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// use annotations when function returns any type
const loc = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(loc);
console.log(coordinates);

const numberValue: number = 64876;
const stringValue: string = "Hello world";

function myFunc(x: number, y: number, city: string) {
  return {
    x,
    y,
    city,
  };
}

type OtherStuff = {
  anime: string;
  games: string;
  coding: string;
};

type Props = {
  name: string;
  dob: Date;
  otherStuf: OtherStuff;
};
