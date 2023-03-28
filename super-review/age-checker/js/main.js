//Create a conditonal that checks their age
let age = 17
//If under 16, tell them they can not drive
if (age < 16) {
    return "you can't drive"
}
//If under 18, tell them they can't hate from outside the club, because they can't even get in
if (age < 18) {
    return "you can't hate from outside the club, because you can't even get in!"
}
//If under 21, tell them they can not drink
if (age < 21) {
    return "yo you can't drink"
}
//If under 25, tell them they can not rent cars affordably
if (age < 25) {
   return "you can't rent cars affordably"
}
//If under 30, tell them they can not rent fancy cars affordably
if (age < 30) {
    return "can not rent fancy cars affordably"
}
//If under over 30, tell them there is nothing left to look forward too
if (age > 30) {
    return "just die now"
}
//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph

document.querySelector('h1').addEventListener('click', ageCheck)

function ageCheck() {
    let age = Number(document.querySelector('input').value)

}
