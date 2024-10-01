// Exercise 4: Write a function `mostFrequentChar` that takes a string and returns the character
// that appears the most times. If there is a tie, return the first character that reaches the maximum frequency.
// Example: mostFrequentChar("javascript") should return "a".

const mostFrequentChar = function (text) {
    let textString = text.split("")
    console.log(textString)
    let repeated = textString.filter((letter, index) => textString.indexOf(letter) !== index)
    return repeated[0]
}

console.log(mostFrequentChar("javascript")); // Expected output: "a"