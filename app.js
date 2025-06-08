
    //   Answer no 1

{var city = prompt("enter your city");
if(city === "karachi"){
    console.log("Welcome to city of lights");
}}



         //   Answer no 2

         var gender = prompt("enter your gender");
 if(gender === "male"){
     console.log("Good Morning Sir.")
 }else if(gender === "female"){
    console.log("Good Morning mam.")}

            
                //   Answer no 3

var signal = prompt("color of road traffic signal");
 if(signal === "red"){
    console.log("Must Stop")
}else if(signal === "yellow"){
    console.log("ready to move")
}else if(signal === "green"){
    console.log("move now")}

               //   Answer no 4

var fuel = +prompt("Enter current fuel in litres (e.g. 0.2):");
if (fuel < 0.25) {
  console.log("Please refill the fuel in your car");
} else {
  console.log("Fuel level is sufficient");
}


                          // Answer no 5

var a =4
 if (++a === 5){
alert("given condition for variable a is true");
}

 var b = 82;
if (b++ === 83){
alert("given condition for variable a is true");
}

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}


if (++c < 14){
alert("condition 3 is true");
}


 var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals" );
}


if("car" < "cat"){
alert("car is smaller than cat");
}


      //  answer no 6

var totalMarks = 300;

var sub1 = +prompt("Enter marks for Subject 1");
var sub2 = +prompt("Enter marks for Subject 2");
var sub3 = +prompt("Enter marks for Subject 3");
        //    compute
var obtainedMarks = sub1 + sub2 + sub3;

var percentage = (obtainedMarks / totalMarks) * 100;

var grade;
var remarks;

if (percentage >= 80) {
  grade = "A-one";
  remarks = "Excellent";
  alert(">80")
} else if (percentage >= 70) {
  grade = "A";
  remarks = "Good";
  alert(">= 70")
} else if (percentage >= 60) {
  grade = "B";
  remarks = "You need to improve";
} else {
  grade = "Fail";
  remarks = "Sorry";
  alert("fail")
}

alert("Marks Sheet\n" +
      "Total marks: " + totalMarks + "\n" +
      "Marks obtained: " + obtainedMarks + "\n" +
      "Percentage: " + percentage + "%\n" +
      "Grade: " + grade + "\n" +
      "Remarks: " + remarks);




                        //  answer no 7


var secretNumber = 7; 

var userGuess = +prompt("Guess the secret number between 1 and 10:");

if (userGuess === secretNumber) {
  alert("Bingo! Correct answer");
} else if (userGuess + 1 === secretNumber) {
  alert("Close enough to the correct answer");
} else {
  alert("Sorry, try again!");}



                          // answer no 8
var number = +prompt("Enter a number to check if it's divisible by 3:");

if (number% 3 === 0) {
  alert("The number is divisible by 3.");
} else {
  alert("The number is not divisible by 3.");}

                              //  answer no 9
                             
var number = +prompt("Enter a number to check if it's even or odd:");
if (number % 2 === 0) {
  alert("The number is even.");
} else {
  alert("The number is odd.");
}
                            

                                  //  answer no 10
 var temperature = +prompt("Enter the current temperature:");
if (temperature > 40) {
  alert("It is too hot outside.");
} else if (temperature > 30) {
  alert("The Weather today is Normal.");
} else if (temperature > 20) {
  alert("Today’s Weather is cool.");
} else if (temperature > 10) {
  alert("OMG! Today’s weather is so Cool.");
} else {
  alert("It's very cold today!");
}

                      // answer no 11

let firstNumber = +prompt("Enter the first number:");
let secondNumber = +prompt("Enter the second number:");
let operation = prompt("Enter the operation (+, -, *, /, %):");

var result;

if (operation === "+") {
  result = firstNumber + secondNumber;
  alert("Result: " + result);
}

else if (operation === "-") {
  result = firstNumber - secondNumber;
  alert("Result: " + result);
} 

else if (operation === "*") {
  result = firstNumber * secondNumber;
  alert("Result: " + result);
} 
else if (operation === "/") {
  if (secondNumber !== 0) {
    result = firstNumber / secondNumber;
    alert("Result: " + result);
  } else {
    alert("Error: Division by zero is not allowed.");
  }
} 
else if (operation === "%") {
  result = firstNumber % secondNumber;
  alert("Result: " + result);
} 
else {
  alert("Invalid operation. Please enter one of +, -, *, /, %.");
}

