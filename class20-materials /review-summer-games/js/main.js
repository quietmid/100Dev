//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 

function multiNumsInArr(arr){
    let product = 1
    //
    arr.forEach(num => product *= num)
    // first array, product(which is 1) x num(which is 10)
    // product *= num is also product = product * num
    // first time is 1 * 10 = 10(product)
    // second time is product = 10 * 2
    // third time is 20 * 3
    alert(product)
}

for(let i = 0; i < arr.length; i++){
    product *= arr[i]
}
multiNumsInArr([10,2,3])