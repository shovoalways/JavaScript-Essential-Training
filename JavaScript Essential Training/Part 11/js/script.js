/*
JavaScript Math (RANDOM) 
*/

console.log(Math.random().toFixed(3)); // Random Number 
console.log(Math.random().toFixed(3) * 10 + 1); // 0 to 10 Random Number 


let upperValue = 6;
let lowerValue = 0;

let randomNumber = Math.floor(Math.random() * (upperValue - lowerValue) + 1);

console.log(randomNumber);