// Alphabet War
function alphabetWar(fight) {
    let x = 0
    let y = 0

    for (let i = 0; i < fight.length; i++) {
        if(fight[i] === 'w') {
            x += 4;
        } else if(fight[i] === 'p') {
            x += 3;
        } else if(fight[i] === 'b') {
            x += 2;
        } else if(fight[i] === 's') {
            x += 1;
        } else if (fight[i] === 'm') {
            y += 4;
        } else if (fight[i] === 'q') {
            y += 3;
        } else if (fight[i] === 'd') {
            y += 2;
        } else if (fight[i] === 'z') {
            y += 1;
        }
    }
    if(x>y) {
        return "Left side Wins!"
    } else if (y > x) {
        return "Right side Wins!"
    } else {
        return "Let's fight again!"
    }
}
// Building Blocks
class Block{
    constructor(data){
        [this.w, this.l, this.h] = data
    }
    getWidth() {
        return this.w
    }
    getLength() {return this.l}
    getHeight() {return this.h}
    getVolume() {return this.w * this.l * this.h}
    getSurfaceArea() {return 2 * (this.w * this.l + this.l * this.h + this.w * this.h)}
}
// Lost without a Map
function maps(x) {
    let answer = x.map(n => n*2);
    return answer
}
//  Sum without highest and lowest numer

function sumArray(array) {
    if (!array || array.length <= 2) {
        return 0
    } 
    var max = Math.max.apply(Math, array);
    var min = Math.min.apply(Math, aray);
    let sum = 0

    for(let i = 0; i < array.lenght; i ++) {
        (sum += array[i]);
    }
    return sum - max - min;
}
// Even or Odd

function evenOrOdd(number) {
    if(number % 2 == 0){
        return "Even"
    } return "Odd"
}
// Sum Arrays

function sum (numbers) {
    let finalSum = 0
    for(let i = 0; i < numbers.lenth; i++) {

        finalSum += numbers[i]
    }
    return finalSum;
}
// Are you Playing Banjo
function areYouPlayingBanjo(name) {
    if (name[0] === 'R'){
        return name + ' plays banjo'
    } else if (name[0] === 'r') {
        return name + ' plays banjo'
    } 
    return name + " does not play banjo";
}
// Total amount of points
function points(games) {
    let finalPoints = 0;
    for (let i = 0; i < games.length; i++) {
        if (games[i][0] > games[i][2]) {
        finalPoints += 3;
    } else if (games[i][0] < games[i][2]) {
        finalPoints += 0;
    } else if (games[i][0] = games[i][2]) {
        finalPoints += 1;
    }
}
return finalPoints;
}
// Grasshopper - Summation
var summation = function (num) {
    let result = 0;
    for (let i = 1; i < num.length; i++) {
        result = result + i;
    }
    return result
}
// Abbreviate a Two Word Name
function abbrevName(name) {
    let parts = name.split(" ")
    let initials = ""
    initials = parts[0][0].toUpperCase() + "." + parts[1][0].toUpperCase();

    return initials
}
// DNA to RNA Conversion
function DNAtoRNA(dna) {
    for (let i = 0; i < dna.length; i++) {
        dna = dna.replace("T", "U")
    }
    return dna;
}
// Take a Ten Mins Walk
function isValidWalk(walk) {
    if (walk.length !== 10) {
        return false;
    }
    let x = 0;
    let y = 0;

    for (let i = 0; i < walk.length; i++) {
        if (walk[i] === 'n') {
            y++;
        } else if (walk[i] === 's') {
            y --;
        } else if (walk[i] === 'e') {
            x ++;
        } else if (walk[i] === 'w') {
            x --;
        } 
    }
    return x === 0 && y === 0;
}

// Convert a String to a Number!
const stringToNumber = function(str) {
    var number = Number(str)
    return number
    return null;
}
// Simple Change Machine
function changeMe(moneyIn) {
    switch (moneyIn) {
        case '£5': return '20p '.repeat(25).trim()
        case '£2': return '20p '.repeat(10).trim()
        case '£1': return '20p '.repeat(5).trim()
        case '50p': return '20p 20p 10p'
        case '20p': return '10p 10p'
        default: return moneyIn
    }
    console.log(changeMe())
}
// Convert number to reversed array of digits
function digitize(n) {
    return Array.from(String(n), Number).reverse()
}