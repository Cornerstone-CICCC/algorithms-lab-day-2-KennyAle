// Exercise 2: Write a function `arrayDifference` that takes two arrays and returns an array
// containing the elements that are in the first array but not in the second array.
// Example: arrayDifference([1, 2, 3], [2, 3, 4]) should return [1].

const arrayDifference = function(array, array2) {
    let result = []
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (!array2.includes(element)) {
            result.push(element)
        }
    }
    return result
}

console.log(arrayDifference([1, 2, 3], [2, 3, 4])); // Expected output: [1]