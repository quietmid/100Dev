//Create a stopwatch object that has four properties and three methods

let stopwatch = {}

stopwatch.brand = 'Nike'
stopwatch.color = 'Orange'
stopwatch.size = 'Medium'
stopwatch.shape = 'round'

stopwatch.start = function (){
    console.log('STARTTTTINNNNG')
}

stopwatch.stop = function(){
    console.log('STAHP')
}

stopwatch.sayBrand = function(){
    console.log( stopwatch.brand )
}