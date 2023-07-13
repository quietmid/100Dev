// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console

let favHoliday = 'Christmas'
favHoliday = favHoliday.toUpperCase()
console.log(favHoliday)

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)

let str = "rawness to style"
console.log(str.slice(-3))

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.

function fiveSubHundred(n1, n2, n3, n4, n5){
    let result = 100 - n1 - n2 - n3 - n4 - n5
    console.log(Math.abs(result))
}

fiveSubHundred(1, 4, 6, 44,78)

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.

function lowestAndHighest(a,b,c){
    let min = Math.min(a, b, c);
    let max = Math.max(a, b, c);

    console.log(`The lowest number is ${min} and the highest number is ${max}`)
}

lowestAndHighest(55, 75, 4)

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.


const headsOrTails = _ => Math.random() < .5 ? "heads" : 'tails'



//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.


function coinsFlip(num){
    for(let i = 1; i <= num; i++){
        let result = headsOrTails();
        console.log(result)
    }
}

coinsFlip(10)