//Write your pseduo code first! 
// 0 -> 32

document.querySelector('#yell').addEventListener('click', convert)


//need the value that is in Celius 

function convert() {

    let cTemp = document.querySelector('#celius').value
        cTemp = cTemp * 9 / 5 + 32;
        document.querySelector('#placeToYell').innerText = cTemp
}

// convert from c to F

//show it



// function cToF(celsius) 
// {
//   var cTemp = celsius;
//   var cToFahr = cTemp * 9 / 5 + 32;
//   var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
//     console.log(message);
// }

// function fToC(fahrenheit) 
// {
//   var fTemp = fahrenheit;
//   var fToCel = (fTemp - 32) * 5 / 9;
//   var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
//     console.log(message);
// } 
// cToF(60);
// fToC(45);
