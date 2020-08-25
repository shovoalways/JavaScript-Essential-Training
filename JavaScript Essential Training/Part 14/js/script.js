/*
JavaScript Switch 
*/

let x = 9;

switch (x) {
  case 0:
    x = 'Off';
    break;
  case 1:
    x = 'On';
    break;
  default:
    x = 'No Value Found'
}
console.log(x);


let day;

switch (new Date().getDay()) {
  case 0:
    day = 'Sunday';
    break;
  case 1:
    day = 'Monday';
    break;
  case 2:
    day = 'Tuesday';
    break;
  case 3:
    day = 'Wednesday';
    break;
  case 4:
    day = 'Thusday';
    break;
  case 5:
    day = 'Friday';
    break;
  default:
    day = 'Saturday'
}
console.log(day);



let offDay;

switch (new Date().getDay()) {
  case 0:
    offDay = 'Its weekend';
    break;
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    offDay = 'Its Office Day';
    break;
  default:
    offDay = 'No value Found'
}
console.log(offDay);