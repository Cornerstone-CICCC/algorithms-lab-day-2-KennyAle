// Exercise 3: Write a function `findMissingNumber` that takes an array of integers from 1 to `n`
// with one number missing and returns the missing number.
// Example: findMissingNumber([1, 2, 4, 5]) should return 3.

const findMissingNumber = function(numbers) {
    console.log(numbers)
    for (let i = 0; i < numbers.length -1; i++) {
        if (numbers[i] + 1 != numbers [i + 1]) {
            return numbers[i] + 1
        }
    }
}

console.log(findMissingNumber([1, 2, 4, 5])); // Expected output: 3