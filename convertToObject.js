// Write a function that receives a string in JSON format and converts it to an object.
// Loop through all the keys and print them with their values in format: "{key}: {value}"

function convertToObject(str) {
    let obj = JSON.parse(str);
    let keys = Object.keys(obj);
    for (let key of keys) {
        console.log(`${key}: ${obj[key]}`);
    }
}

json('{"name": "George", "age": 40, "town": "Sofia"}');