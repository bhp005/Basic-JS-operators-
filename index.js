// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS </h1>`;

// Es6

// Arrow Functions

//Old Version
function addTwoNum(a, b) {
  return a + b;
}
 
// console.log(addTwoNum(4, 4));
// Es6 Way of writing functions

const subTwoNum = (a, b) => a - b;

// console.log(subTwoNum(8, 10));

//   var,let ,const

//var scope limited

let myName = 'Nasir';
// console.log(myName);
// myName = 'Andrius';
// console.log(myName);

let myLastName = 'Iqbal';
console.log(myLastName);
myLastName = 'Vegan';
console.log(myLastName);

//let and const

//Destructuring

let { sportsCar, adventureCar } = {
  sportsCar: 'Ferrari',
  adventureCar: 'Range Rover',
};

// let { sportsCar, adventureCar } = cars;

// console.log(sportsCar, adventureCar);

// ...Spread

let fruits = ['banana', 'apple', 'kiwi'];
let vegetables = ['tomato', 'spinach'];
let grocery = [...fruits, ...vegetables];
console.log(grocery);

// Ternary Operator
// ? ifTrue: ifFalse

// let pass = false;

// pass ? console.log('hey you passed in exam') : console.log('You Failed');
// if (pass) {
//   console.log('hey you passed in exam');
// } else {
//   console.log('You Failed');
// }

