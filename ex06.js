// Exercise 6: Write a function `getQueryParams` that takes a URL string and returns
// an object containing the query parameters as key-value pairs.
// Example: getQueryParams("https://example.com?search=test&page=2")
// should return { search: "test", page: "2" }.

const getQueryParams = function (query) {
    let result = {}
    let url = query.split("?")
    let noUrl = url[1]
    let pairs = noUrl.split("&")
    pairs.forEach(keys => {
        let keyValues = keys.split("=")
        console.log(keyValues)
        result[keyValues[0]] = keyValues[1]   
        console.log(result)
    });
}

console.log(getQueryParams("https://example.com?search=test&page=2")); // Expected output: { search: "test", page: "2" }