// You will receive an array with strings in the form of JSON's.
// You have to parse these strings and combine them into one object.Every string from the array will hold terms and a
// description.If you receive the same term twice, replace it with the new definition.
// Print every term and definition in that dictionary on new line in format:
// `Term: ${term} => Definition: ${definition}`
// Don't forget to sort the dictionary alphabetically by the terms as in real dictionaries

function dictionary(arr) {
    let dictionary = [];
    for (let el of arr) {
        let json = JSON.parse(el);


        dictionary.push(json);
    }

    dictionary.sort((a, b) => {
        const keyA = Object.keys(a)[0];
        const keyB = Object.keys(b)[0];
        return keyA.localeCompare(keyB);
    });

    let finalResult = [];

    for (let el of dictionary) {
        let curEl = Object.keys(el)[0];
        let curValue = Object.values(el)[0];

        let foundIndex = finalResult.findIndex(obj => Object.keys(obj)[0] === curEl);

        if (foundIndex != -1) {

            finalResult[foundIndex][curEl] = curValue;

        } else {
            let obj = { [curEl]: curValue };
            finalResult.push(obj);
        }
    }

    for (let word of finalResult) {
        let [term, definition] = Object.entries(word)[0];
        console.log(`Term: ${term} => Definition: ${definition}`);
    }

}

dictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds(coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]);