// Exercise 10: Write a function `convertToCamelCase` that takes a string
// with words separated by spaces or underscores, and returns the string in camelCase format.
// Example: convertToCamelCase("hello_world") should return "helloWorld".

const convertToCamelCase = function(text) {
    let words
    !text.includes("_") ? words = text.split(" ") : words = text.split("_")
    result = words[0]
    for (let i = 1; i < words.length; i++) {
        let element = words[i];
        let [firstLetter, ...letters] = element
        let capitalize = firstLetter.toUpperCase() + letters.join("")
        result += capitalize
    }
    return result
}

console.log(convertToCamelCase("hello world")); // Expected output: "helloWorld"
console.log(convertToCamelCase("hello_world")); // Expected output: "helloWorld"