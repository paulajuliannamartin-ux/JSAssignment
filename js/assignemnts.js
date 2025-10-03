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

