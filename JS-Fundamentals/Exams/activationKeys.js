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