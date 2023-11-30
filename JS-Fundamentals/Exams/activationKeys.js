/*
The first line of the input will be your raw activation key. It will consist of letters and numbers only. 
After that, until the "Generate" command is given, you will be receiving strings with instructions for different operations that need to be performed upon the raw activation key.
There are several types of instructions, split by ">>>":
"Contains>>>{substring}":
If the raw activation key contains the given substring, prints: "{raw activation key} contains {substring}".
Otherwise, prints: "Substring not found!"
"Flip>>>Upper/Lower>>>{startIndex}>>>{endIndex}":
Changes the substring between the given indices (the end index is exclusive) to upper or lower case and then prints the activation key.
All given indexes will be valid.
"Slice>>>{startIndex}>>>{endIndex}":
Deletes the characters between the start and end indices (the end index is exclusive) and prints the activation key.
Both indices will be valid.
Input
The first line of the input will be a string consisting of letters and numbers only. 
After the first line, until the "Generate" command is given, you will be receiving strings.
Output
After the "Generate" command is received, print:
"Your activation key is: {activation key}"

*/

function activationKeys(arr) {
    let activationKey = arr.shift();

    let line = arr.shift();

    while (line != 'Generate') {
        let tokens = line.split('>>>');
        let command = tokens[0];

        if (command == 'Contains') {
            let substring = tokens[1];
            if (activationKey.includes(substring)) {
                console.log(`${activationKey} contains ${substring}`);
            } else {
                console.log(`Substring not found!`);
            }

        } else if (command == 'Flip') {
            let cse = tokens[1];
            let startIndx = Number(tokens[2]);
            let endIndx = Number(tokens[3]);

            let firstHalf = activationKey.slice(0, startIndx);
            let leftHlaf = activationKey.slice(endIndx);
            let toModify = activationKey.slice(startIndx, endIndx);

            if (cse == 'Lower') {
                let lower = toModify.toLowerCase();
                activationKey = firstHalf + lower + leftHlaf;
                console.log(activationKey);
            } else {
                let upper = toModify.toUpperCase();
                activationKey = firstHalf + upper + leftHlaf;
                console.log(activationKey);
            }
        } else if (command == 'Slice') {
            let startIndx = Number(tokens[1]);
            let endIndx = Number(tokens[2]);

            let firstHalf = activationKey.slice(0, startIndx);
            let secondHalf = activationKey.slice(endIndx);

            activationKey = firstHalf + secondHalf;
            console.log(activationKey);

        }
        line = arr.shift();
    }
    console.log(`Your activation key is: ${activationKey}`);
}

activationKeys(["134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>-rock",
    "Contains>>>-uni-",
    "Contains>>>-rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate"]);