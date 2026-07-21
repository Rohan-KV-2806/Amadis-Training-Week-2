// Variables
"use strict";
let name = "Rohan";
let age = 22;
let alive = true;
let voterId = null;
let voted = false;
let intrests = ["red", "blue", "gree", "yellow"];
const DOB = "28/06/2004";
let month_born = 6;

console.log("Your name is:", name);
console.log("Your age is:", age);
console.log("Alive?:", alive);
console.log("Your intrests: ", intrests);
console.log("You are born in:", DOB);

// conditional statements
if(age >= 18 && voterId != null){
    console.log("You can vote")
}else{
    console.log("You cant vote")
}

let a = 15;
let b = 4;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

let c = 20;
let d = 10;

console.log(c > d); 
console.log(c < d);
console.log(c >= d);
console.log(c <= d);
console.log(c == d);
console.log(c != d);
console.log(c === d);
console.log(c !== d);

