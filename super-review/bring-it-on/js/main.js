// *Variables*
// Create a variable and console log the value
var lastHour = 10
console.log(lastHour)
// Create a variable, add 10 to it, and alert the value
    lastHour = lastHour + 10
    alert(lastHour)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
    function subtractsFourNums(n1, n2, n3, n4){
        alert(n1 - n2 - n3 -n4)
    }

// Create a function that divides one number by another and returns the remainder

function getRemainder(num1 , num2){
    return num1 % num2
}

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function jumanji(nu1, nu2){
    if (nu1+nu2 > 50) {
        alert('Jumanji')
    }
}

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function zebraAlert(z1, z2, z3){
    if((z1*z2*z3) % 3 == 0){
        alert('ZEBRA')
    }
}

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
