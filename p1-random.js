/*
    CIT 281 Project 1
    Name: Jake McIntosh
*/

const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// Returns random letter
function getRandomLetter(){
    return alphabet[getRandomInteger(0, 26)];
}

// Returns random string
// For loop
// Each loop adds a random letter to main string
function randomString(){
    let lengthMainString = getRandomInteger(5, 26);
    let mainString = "";
    for (let i = 0; i < lengthMainString; i++){
        mainString = mainString + getRandomLetter();
    }
    return mainString;
}

console.log(randomString());