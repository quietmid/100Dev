// *Variables*
// Create a variable and console log the value
    let x = 10
    console.log(x)
// Create a variable, add 10 to it, and alert the value
    var y = 1
    var y = y + 10
    alert(y)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subFourNums(n1, n2, n3, n4){
    differences = n1 - n2 - n3 - n4

    alert(differences)
}
subFourNums(20,1,4,7)
// Create a function that divides one number by another and returns the remainder

function dividesNums(num1, num2) {
    return num1 % num2
}
console.log(dividesNums(21,5))
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function addTwoAlertJumanji(num1,num2){
    if (num1 + num2 > 50) {
        alert('Jumanji')
    }
}

addTwoAlertJumanji(25, 27)

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function multiThreeNums(nu1, nu2, nu3){
    if (nu1*nu2*nu3 % 3 === 0){
        alert('ZEBRA')
    } 
}
multiThreeNums(3,4,2)

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in

function logWordsXTimes(word, num){
    for (let i = 1; i <=num; i++){
        console.log(word)
    }
}
logWordsXTimes('damnnn', 5)