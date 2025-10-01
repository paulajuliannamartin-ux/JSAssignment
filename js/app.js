//P1 Uppgift
console.log("Hello World!");

//P2 Uppgift
console.log("this is line 1");
console.log("this is line 2");
console.log("this is line 3"); console.log("this is line 4");
console.log("this is line 5");

//P3 Uppgift
/*
Paula Martin
2025-10-01
paula.julianna.martin@gmail.com
 */

//Paula Martin
// 2025-10-01
//paula.julianna.martin@gmail.com

console.log("Hello World!");
/*
const exampleString = "this is line 1";
console.log(exampleString);

x = 5
y = 6
z= x+y
console.log(z)
*/

// P4 Uppgift
let numberOfBottles = 10;
const line1 = "green bottles hanging on the wall.";
const line2 = "And if one green bottle, should accidentally fall, there will be";

//Outputs
console.log(numberOfBottles);
console.log(line1);
console.log(numberOfBottles);
console.log(line1);
console.log(line2);
console.log(--numberOfBottles);
console.log(line1);

for (let i = numberOfBottles; i > 10; i--) {
  console.log(i);
  console.log(line1);
  console.log(i);
  console.log(line1);
  console.log(line2);
  console.log(i - 1);
  console.log(line1);
}

//P5

/*let number= 4;
//number=number-2
console.log(number);

number*=2
console.log(number);
*/

// P5 Uppgift

//Uppgift P5.1
let kmh = 72
let ms= kmh/3.6

console.log(kmh);
console.log(ms);

//Uppgift P5.2
let minutes=3
let seconds= minutes*60

console.log(minutes + " minuter = " + seconds + " sekunder");

//Uppgift P5.3
let nummer1= 11
let nummer2= 4

let result = nummer1 / nummer2;

console.log(nummer1 + " / " + nummer2 + " = " + result);

//Uppgift P5.4
let num1 = 11;
let num2 = 4;

let remainder = num1 % num2;

console.log("Remainder of " + num1 + " / " + num2 + " = " + remainder);

//Efter Lunch
/*
let int= 10;
let textstring= "hello world!";

function myfirstfunction(a,b){
  let z=a+b;
  console.log(z);
}

myfirstfunction(1, 6)
*/

//Uppgift P5.5
function Area(radius) {
  return Math.PI * radius * radius;
}
let result1= Area(2)
console.log(result1.toFixed(2));

//Uppgift P5.6
function negate(number) {
  return -number;
}
let result2= negate(11);

console.log(result2);

//Uppgift P5.7
function calculateBMI(weight, height) {
  return weight / (height * height);
}
let bmi = calculateBMI(70, 1.82);

console.log(bmi.toFixed(2));

//Uppgift P5.8
function calculateHypotenuse(a, b) {
  return Math.sqrt(a * a + b * b);
}
let hypotenuse = calculateHypotenuse(3, 4);

console.log(hypotenuse);

//Uppgift P5.9
function convertSeconds(totalSeconds) {
  let minuter = Math.floor(totalSeconds / 60);
  let sekunder = totalSeconds % 60;
  return { minuter: minuter, sekunder: sekunder };
}
let result3 = convertSeconds(111);

console.log(result3.minuter + " minuter och " + result3.sekunder + " sekunder");

