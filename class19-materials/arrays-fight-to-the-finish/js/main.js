//Create an array of movie titles. Loop through the array and (add) each element to the h2.
let movies = ['shrek1 ', 'shrek2 ', 'shrek3 ', 'shrek4 ']

for(let i = 0; i < movies.length; i++){
document.querySelector('h2').innerText += movies[i]
}
//Create an array of numbers. Loop through the array and add three to each number and replace the old number.

let numbers = [1,2,3,4,5]

for(let i = 0; i < numbers.length; i++){
    numbers[i] + 3 
    // shove or push 
}

numbers.forEach((item, idx) =>{
    numbers[i] = item + 3
} )

//Find the average of all the numbers from question three(two)

let sum = 0

numbers.forEach((num) => sum+=num)

// for(let i = 0; i < numbers.length; i ++){
//     sum += numbers[i]
// }