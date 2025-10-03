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
//console.log(--numberOfBottles);
console.log(line1);

/*
for (let i = numberOfBottles; i > 10; i--) {
  console.log(i);
  console.log(line1);
  console.log(i);
  console.log(line1);
  console.log(line2);
  console.log(i - 1);
  console.log(line1);
}
*/

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

//Lektion JS 2
/*
const  string= " Green bottles hanging on the wall";
let numberOfbottles= 10;

console.log(numberOfbottles + string + "." + numberOfbottles + string);

--numberOfbottles;
const string2 = "Output: And if one green bottle, should accidentally fall, there will be " + numberOfbottles + " ";
console.log(string2 + string);
*/

//Uppgift P6

console.log(numberOfBottles + " " + line1 + " " + numberOfBottles + " " + line1);
--numberOfBottles;
console.log(line2+ " " + numberOfBottles + " " + line1);

//P7
/*
const age = 24
const birthyear= 2002
let condition = age == 26 || birthyear == 2002

console.log(condition);

function getAge() {
  return age;
}
let ages = getAge();
console.log(ages);
let result4 = getAge()
result4 =26;
console.log(result4);
*/

//Uppgift P7
const birthYear =2000;
const currentYear = 2025
let age = currentYear - birthYear;

let  isChild = age>= 0 && age <= 10;
let isTeenager = age >= 11 && age <=17;
let isAdult = age >=18;

console.log("You are a child: " + isChild);
console.log("You are a teenager: " + isTeenager);
console.log("You are an adult: " + isAdult);

//P8
/*
const age1 = 18;
const month = 30;
let button= true;

if(button==true){
  console.log("clicked");
}else{
  console.log("not clicked");
}

let clicked= age1>18? || button==true? console.log("clicked") : console.log("not clicked");

 */
// Uppgift P8
let BirthYear = 2000;
let favoriteNumber = 21;
let CurrentYear = 2025
let age1 = CurrentYear - BirthYear;

if (age1 <= 10){
  console.log("You are a child: ");
}else if(age1 <= 17){
  console.log("You are a teenager: ");
}else if(age1 >= 18){
  console.log("You are an adult: ");
}

let greaterNumber;
if (age > favoriteNumber) {
  greaterNumber = age;
} else {
  greaterNumber = favoriteNumber;
}
console.log("The greater number is: " + greaterNumber);

let oddOrEven;
if (favoriteNumber % 2 === 0) {
  oddOrEven = "Your favorite number is an even number.";
} else {
  oddOrEven = "Your favorite number is an odd number.";
}

console.log(oddOrEven);


//P9 Functions
/*
function makeLasagna(){
  console.log("Fry Meat");
  console.log("Cut Onion");
  console.log("Fry Onion");
  console.log("Add tomato sauce");
  console.log("Add Spices");
  console.log("Boil");
}
let isHungry= false;
//Breakfast
if (isHungry){
  makeLasagna();
}
isHungry = true;
//Lunch
if (isHungry){
  makeLasagna();
  makeLasagna();
}

//P9 List
let listExample = ['Hej', 'Hallo', 'Hejsan']
console.log(listExample[0]);

listExample.forEach(char => console.log(char));
*/

//Uppgift P9
function walk(){
  console.log("Move Forward");
}
function turnR(){
  console.log("Turn Right")
}
function turnL(){
  turnR()
  turnR()
  turnR()
}
function turnAround(){
  turnR()
  turnR()
}
move= true

if (move){
  walk()
  walk()
  walk()
  turnAround()
  walk()
  walk()
  walk()
  turnL()
  walk()
  walk()
  walk()
  turnL()
  walk()
  turnAround()
  walk()
}

/*Assignment 2, Example Buying Coffee
Paula Martin
https://github.com/paulajuliannamartin-ux
  */
const customerName = "Anna Andersson";
let customerAge= 30;
let hasCash= false;
let hasCard= true;
let cantPay= hasCash && hasCard;

function greeting(name){
  console.log("Welcome, " + name + "!");
}

//Step 2
function checkAge(age){
  if (age> 12){
    console.log("You can order coffee");
  }else if(age<12){
    console.log("Too young for coffe, maybe try hot chocolate!");
  }
}

function choosePayment(Cash, Card){
  if (Cash == true){
    console.log("You payed with cash.");
  }else if (Card == true){
    console.log("You payed with card.");
  }return (Cash, Card == false);{
    console.log("You have no way to pay!");
  }
}

//Step 3
function chooseBeverage(age1){
  if (age1 < 12){
    console.log("Here is your hot chocolate!");
  }else if (age1 =17<=12){
    console.log("here is your small latte!");
  }else (age1 > 18);{
    console.log("Here is your large cappuccino!");
  }
}

//Step 4
greeting(customerName);
checkAge(customerAge);
chooseBeverage(customerAge);
choosePayment(hasCash, hasCard);

