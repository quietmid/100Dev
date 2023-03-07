// Input validation

// let number = prompt('Enter a Number');
//   if (number < 100 && number > 50) {
//     alert('good');
//   } else { alert("Number must be between 50 and 100!");
// }

// let number = prompt("enter a number");
// while (number < 100) {
//   alert("good");
// }
// alert("Number must be less than 100");
// number = prompt("enter a number");

// multiplication tables

// const number = parseInt(prompt('Enter a number'));
// for (let i = 1; i <= 10; i++) {
//   if (number >= 2 && number <= 10) {
//   console.log(`${number} x ${i} = ${number * i}`);
//   } else {alert("Number must be between 2 and 9");
//   break;
// }
// }

// document.querySelector('#yell').addEventListener('click', convert)

// function convert() {

// let number = document.querySelector('#multi').value; 
// for (let i = 1; i <= 10; i++) {
//     if (number >= 2 && number <= 10) {
//       document.querySelector('#placeToYell').innerText = console.log(`${number} x ${i} = ${number * i}`);
//     } else {alert("Number must be between 2 and 9");
//     break;

    
//   }
// }
// }

document.querySelector('#yell').addEventListener('click', convert);

// multiplication tables
function convert() {
  let number = document.querySelector('#answer').value;
  if (number >= 2 && number <= 9) {
    let result = '';
    for (let i = 1; i <= 10; i++) {
      result += `${number} x ${i} = ${number * i}\n`;
    }
    document.querySelector('#placeToYell').innerText = result;
  } else {
    alert("Number must be between 2 and 9");
  }
}
  
// neither yes nor no
// function convert() {
//   let number = document.querySelector('#answer').value;
//   if (number == "yes" || number == "no") {
//     let result = number;
//     document.querySelector('#placeToYell').innerText = result; 
//   } else {
//     alert("neither yes, nor no");
//   }
// }

// Fizzbuzz

// function convert() {
//   let result = '';
//   for (let i = 1; i <= 100; i++) {
//     if (i % 3 == 0) {
//       result = "Fizz";
//     } else if (i % 5 == 0) {
//       result = "Buzz";
//     } else {
//       result = i;
//     }
//     document.querySelector('#placeToYell').innerText += result + '\n';
//   }
// }

// function convert() {
//   let result = '';
//   for (let i = 1; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//       result = "FizzBuzz";
//     } else if (i % 3 == 0) {
//       result = "Fizz";
//     } else if (i % 5 == 0) {
//       result = "Buzz";
//     } else {
//       result = i;
//     }
//     document.querySelector('#placeToYell').innerText += result + '\n';
//   }
// }