//---Easy
//create a function that subtracts two numbers and alerts the difference
function subTwoNums(x,y) {
    var difference = x - y
    alert(difference)
}
//create a function that divides three numbers and console logs the quotient
function dividesThreeNums(num1, num2, num3) {
    console.log(num1/num2/num3)
}
//create a function that multiplys three numbers and returns the product
function multiThreeNums(nu1, nu2, nu3) {
    let product = nu1 * nu2 * nu3
    return product
}

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number

function addFirstTwoDivideLast(n1, n2, n3){
    let firstTwo = n1 + n2
    let finalAnswer = firstTwo % n3 
    return finalAnswer
    // return (n1 + n2) % n3
}

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number

function lastHardQuestion(n1, n2, n3, n4) {
    let newProduct = n1 * n2
    if(newProduct > 100) {
        console.log(newProduct + n3 + n4)
    } else if (newProduct < 100){
        console.log(newProduct - n3 - n4) 
    } else {return (n1 * n2 * n3) % n4}
}
