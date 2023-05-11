// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console

let favHoliday = "Christmas"
favHoliday = favHoliday.toUpperCase() // missing this part
console.log(favHoliday)


//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)

let str = 'rawness no style'
console.log(str.slice(-3))

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.

function fiveSubHund(n1, n2, n3, n4, n5){
 
    let result = 100 - n1 - n2 - n3 - n4 - n5
   
    console.log(Math.abs(result))
}
fiveSubHund(30, 51, 4, 7, 32)

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.

function lowestAndHighest(a,b,c){
    let min = Math.min(a, b, c);
    let max = Math.max(a, b, c);
    
    console.log(`The lowest num is ${min} and the highest num is ${max}`)
}

lowestAndHighest(100, 54, 47)



// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.

// function headsOrTails(){
//     let result = Math.random()
//     if (result < .5){
//         return 'heads'
//     }else{
//         return 'tails'
//     }
// }
// console.log(headsOrTails())


const headsOrTails = _ => Math.random() < .5 ? 'heads' : "tails"

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.


function coinsFlip(num){
    
 for(let i = 1; i <= num; i++){
    let result = headsOrTails();
    console.log(result)
 }   

}

coinsFlip(5)