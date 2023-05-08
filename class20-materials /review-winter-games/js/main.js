//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

function winterGames(arr){
    let evens = []
    arr.forEach(n => {

    if(n % 2 === 0){
        evens.push(n)
    } 
})

return evens
}

console.log( winterGames([2,4,6,7,8,9,11,24,35,36]))