// Exercise 5: Write a function `countConsonants` that takes a string
// and returns the number of consonants in the string.
// Example: countConsonants("hello world") should return 7.

const countConsonants = function (text) {
    let counter = 0
    for (let i = 0; i < text.length; i++) {
        const letter = text[i];
        if (letter !== "a" && letter !== "e" && letter !== "i" && letter !== "o" && letter !== "u" && letter !== " ") {
            counter++
        }
    }
    return counter
} 

console.log(countConsonants("hello world")); // Expected output: 7