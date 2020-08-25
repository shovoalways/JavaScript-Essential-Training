/*
JavaScript Data Types
*/

// let name = 'Ali Hossain';
// let lastName = 'Shovo';
// let age = 29;
// let phone = 'iPhone' + 11; // Output => iPhone11
// let phone2 = 11 + 12 + 'iPhone' + 11; // Output => 23iPhone11
// name = "My name is 'Ali Hossain'";


// console.log(typeof phone2);

// document.getElementById('demo').innerText = name;


/*
JavaScript boolean
*/

// let phone = 11;
// let mobile = 7;

// document.getElementById('demo').innerHTML = phone == mobile; // Output => false




/*
JavaScript array
*/

// let phone = ['Samsung', 'Apple', 'Oneplus'];
// phone[3] = 'Nokia'

// document.getElementById('demo').innerHTML = phone[1];
// console.log(phone);


/*
JavaScript Object
*/

let brand = 'Apple';
let model = 'iPhone 11 pro max';
let storage = '256 GB';
let color = 'Black';


document.getElementById('demo').innerHTML = brand + " " + model + " " + storage + " " + color;

let phone = {
  brand: 'Apple',
  model: 'iPhone 11 pro max',
  storage: '256 GB',
  color: 'Black',
};

document.getElementById('demo').innerHTML = phone.model;

console.log(phone);