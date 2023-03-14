//--- Easy
//create a variable and assign it a number
var age = 15;
//minus 10 from that number
age = age - 10;
//print that number to the console
console.log(age);
//--- Medium
//create a variable that holds a value from the input
// let realAge = document.querySelector('#danceDanceRevolution').value
// //add 25 to that number
// realAge = realAge + 25
// //alert that number
// alert(realAge)


//--- Hard
//create a variable that holds the h1
const h1Holder = document.querySelector('h1')
//add an event listener to that element that console logs the sum of the two previous variables
h1Holder.addEventListener('click', sum)

function sum() {
    let realAge = document.querySelector('#danceDanceRevolution').value
    console.log(age + Number(realAge))
}