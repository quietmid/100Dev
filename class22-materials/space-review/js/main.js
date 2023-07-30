//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.

let arr = [5, 45, 33, 10];

function findSum(arr){
let sum = 0;
for(let i = 0; i < arr.length; i++){
    sum += arr[i];
}
return sum;
}

console.log(findSum(arr));

// let sumReduce = arr.reduce( (acc, c) => acc + c, 0 ) 

// console.log(sumReduce)

// comma 0, helps to start the accumulator at 0

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

let array = [3,5,7,9]

function numSquared(array){

return array.map(n => n*n)

}

console.log(numSquared(array))

//Create a function that takes string
//Print the reverse of that string to the console

let string = "stylesheet";


function reverseString(string){
    return string.split('').reverse().join('');
}

console.log(reverseString(string));


//Create a function that takes in a string
//Alert if the string is a palindrome or not


let str = 'book'

function palindromeOrNot(str) {

    if(str === str.split('').reverse().join('')){
        return true
    }else{
        return false
    }
};

alert(palindromeOrNot(str));
