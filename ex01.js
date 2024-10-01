// Exercise 1: Write a function `capitalizeWords` that takes a string and returns the string
// with the first letter of each word capitalized.
// Example: capitalizeWords("hello world") should return "Hello World".

const capitalizeWords = function(text) {
    words = text.split(" ")
    result = ""
    for (let i = 0; i < words.length; i++) {
        let element = words[i];
        let [firstLetter, ...letters] = element
        let capitalize = firstLetter.toUpperCase() + letters.join("")
        result += ` ${capitalize}`
    }
    return result
}

console.log(capitalizeWords("hello world")); // Expected output: "Hello World"