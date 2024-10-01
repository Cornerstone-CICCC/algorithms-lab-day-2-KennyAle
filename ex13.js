// Exercise 13: Write a recursive function `sumRange` that takes a number `n`
// and returns the sum of all numbers from 1 to `n`.
// Example: sumRange(5) should return 15 (1 + 2 + 3 + 4 + 5).

const sumRange = function (n) {
    // let numbers = []
    // while (n != 0) {
    //     numbers.push(n)
    //     n--
    // }
    // return numbers.reduce((acc, curr) => acc + curr, 0)
    if (n === 0) {
        return 0
    }

    return n + sumRange(n - 1)
}

console.log(sumRange(5)); // Expected output: 15