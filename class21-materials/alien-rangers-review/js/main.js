//Arrays

//Create and array of tv shows. Loop through and print each show to the console

let tvShows = ['power ranger', 'island', 'DC', 'iron man']

// for(let i = 0; i <= tvShows.length; i++){
//     console.log(tvShows[i])
// }

tvShows.forEach( show => console.log(show))

//Create and array of numbers

let arrayNum = [1,4,5,6,7,10,11]

//Return a new array of numbers that includes every even number from the previous Arrays
// function onlyEvens(arr){

// for (let i = 0; i <= arr.length; i++){
//  if (arr[i] % 2 === 0){
//     console.log(arr[i])
//  }else{
//     i++
//  } 
// }
// }

// let onlyEvens = arr => arr[i] % 2 === 0 ? arr[i] : 




let onlyEvens = arr => arr.filter(n => n % 2 === 0) 

// filter creates a new array for us.

console.log( onlyEvens(arrayNum))
//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number

function sumSecLowAndHigh(arr) {
    let sorted = arr.sort((a,b) => a-b)
    alert( sorted[1] + sorted[sorted.length - 2])
}
sumSecLowAndHigh([2,3,4,1,7,6])