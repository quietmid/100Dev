// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".




let array = [10,25,9,7,8,100,6,55]

function compareArrays(){
    if (array[0] < array[-1]){
        alert('hi')
    }else if(array[0] > array[-1]){
        alert('bye')
    }else{
        alert('we close in an hour')
    }
}