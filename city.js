// Write a function that receives a single parameter – an object, containing five properties:
// { name, area, population, country, postcode }
// Loop through all the keys and print them with their values in format: "{key} -> {value}"

function city(obj) {
    let keys = Object.keys(obj);
    for (let key of keys) {
        console.log(`${key} -> ${obj[key]}`);
    }
}

city({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
});