//---Easy
//create a function that subtracts two numbers and alerts the difference
function difference(x,y) {
    alert(x - y)
} 
// difference(30, 21)
// difference(67, 19)
//create a function that divides three numbers and console logs the quotient
function divides(a, b, c) {
    console.log(a / b / c)
}
// divides(12, 4, 3)
// divides(120, 12, 4)
//create a function that multiplys three numbers and returns the product
function multiplys(d,e,f) {
    sum = d * e * f
    return sum
}
function turnInToMoney() {
let goods = multiplys(4,5,6)
alert( "$" + goods)
}
// turnInToMoney()

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function medium(num1, num2, num3) {
    answer = (num1 + num2) % num3

    return answer
}

console.log(medium(3,3,2))


//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
