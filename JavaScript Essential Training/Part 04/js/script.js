/*
JavaScript Variables
*/



/*
let x = 10;
document.getElementById('demo').innerHTML = firstName;
*/


// "var" and "let" is changable but "const" is not changable
// You can not use reserved keyword
// Your variables name should be meaningful
// Your variables name can not start with number 
// Always follow a rule like if you use camel notation(i.e firstName) then use camel notation or if you use snake notation (i.e firstname) then use only snake notation but I recommend you to use camel notation.
// JavaScript is case sensitive

/*
let firstName; //undefined
let lastName = 'Hossain'; // String
let age = 29; // Number
document.getElementById('demo').innerHTML = firstName;
*/

let firstName = 'Ali'; // String
let lastName = 'Hossain'; // String
let age = 29; // Number
let price1 = '100'; // String
let price2 = 200; // Number
let price3 = 300; // Number

let total = price1 + price2;
document.getElementById('demo').innerHTML = total; //it will not work as you want because JavaScript can not calculate number and string at a time