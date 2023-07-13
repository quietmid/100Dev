// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let favoriteDrink = " lager ";
favoriteDrink = favoriteDrink.trim()
console.log(favoriteDrink)

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".

let numerOfFood = "pie juice apple grape oranges"
if (numerOfFood.search('apple') !== -1){
    console.log('yes')
}else{
    console.log('no')
}

console.log(numberOfFood.search('bob'))
console.log(numberOfFood.includes("apple"))

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

function rockPaperScissors(){
    let random = math.random()
    if( random < .33){
        return "rock"
    } else if (random < .66) {
        return "paper"
    } else {
        return "scissors"
    }
}
console.log(rockPaperScissors())

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function checkWin(playerChoice){
    let botChoice = rockPaperScissors()
    if ((playerChoice === 'rock' && botChoice === 'scisscors') || (playerChoice === 'paper' && botChoice === 'rock') || (playerChoice === 'scissors' && botChoice === 'paper')){
        console.log('I won!')
    } else if (playerChoice === botChoice){
        console.log('We tied')
    } else {
        console.log('Bot Won')
    }
}

// checkWin('scissors')

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

function playGameXTime(arr){
    arr.forEach( choice => checkWin(choice))
}

playGameXTime(['rock', 'paper', 'scissors'])