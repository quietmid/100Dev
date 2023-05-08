// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let myFavoriteFood = 'pizza'

myFavoriteFood = "pho"

alert(myFavoriteFood)

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let str = 'Bob'
alert(str[1])


// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.

function function1(n1, n2, n3) {
    let prod = (n1/n2) * n3
    alert(prod)
}


// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.

function cubeRoot(number){

    console.log(math.cbrt(number))
}



// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"

function checkForSummer(month){
    let monthLowerCase = month.monthLowerCase()
    if(monthLowerCase === 'june' || monthLowerCase === 'july' || monthLowerCase === 'august'){
        alert('yay')
    }else{
        alert('boo')
    }

}




//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.

function skip5s(n){

  for(let i = 1; i <= n; i++){
    if(i % 5 !== 0){
        console.log(i)
    }



  }  



}

