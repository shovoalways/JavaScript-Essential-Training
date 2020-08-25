/*
JavaScript Loops  
*/


// Increment
for (let i = 0; i < 8; i++) {
  console.log('Hello World', i);
}


//Decrement
for (let i = 8; i >= 0; i--) {
  console.log('Hello World', i);
  if (i === 5) break;
}

const cars = ['Bus', 'car', 'Bike', 'Cycle'];

for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}


// its easy is code but a bit slow
for (car of cars) {
  console.log(car);
}