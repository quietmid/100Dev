// List of Words
// Write a program that asks the user for a word until the user types "stop". The program then shows each of these words, except "stop".

const words = [];

while (true){

    const word = prompt("Enter a word (type 'stop' to exit):");
    
    if (word === "stop"){
        break;
    }
    words.push(word);
}

console.log("Words entered (excluding 'stop'):");
for (let i = 0; i < words.length; i++){
    console.log(words[i]);
}