// Exercise 9: Write a function `sortByProperty` that takes an array of objects
// and a property name, and returns the array sorted by that property in ascending order.
// Example: sortByProperty([{name: "Alice", age: 30}, {name: "Bob", age: 25}], "age")
// should return [{name: "Bob", age: 25}, {name: "Alice", age: 30}].
const sortByProperty = function (people, order) {
    switch (order) {
        case "age":
            return people.sort((a, b) => {
                return a.age - b.age
            })
        case "name":
            return people.sort((a, b) => 
                (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)
            )
        default:
            break;
    }
}

console.log(sortByProperty([{name: "Alice", age: 30}, {name: "Bob", age: 25}], "age")); // Expected output: [{name: "Bob", age: 25}, {name: "Alice", age: 30}]