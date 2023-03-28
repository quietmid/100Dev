//Write your pseduo code first! 
// an input that let's the person to put celsius value
document.querySelector('h1').addEventListener('click', convert)
// an eventlistener that start the function
function convert(){
    let enteredVal = Number(document.querySelector('input').value)
    let temp = enteredVal * 1.8 + 32
    document.querySelector('h2').innerText = temp
}
// the function that converts celsius to fahrenheit 

// display the answer as innerText