function stringGame(arr) {
    let str = arr.shift();

    let line = arr.shift();

    while (line != 'Done') {
        let tokens = line.split(' ');
        let command = tokens[0];

        if (command == 'Change') {
            let char = tokens[1];
            let replacement = tokens[2];
            let splitted = str.split(char);
            str = splitted.join(replacement);
            console.log(str);
        } else if (command == 'Includes') {
            let substr = tokens[1];
            if (str.includes(substr)) {
                console.log('True');
            } else {
                console.log('False');
            }
        } else if (command == 'End') {
            let substr = tokens[1];
            if (str.endsWith(substr)) {
                console.log('True');
            } else {
                console.log('False');
            }
        } else if (command == 'Uppercase') {
            str = str.toUpperCase();
            console.log(str);
        } else if (command == 'FindIndex') {
            let char = tokens[1];
            let indx = str.indexOf(char);
            console.log(indx);

        } else if (command == 'Cut') {
            let startIndx = Number(tokens[1]);
            let count = Number(tokens[2]);
            let endIndx = startIndx + count;
            str = str.slice(startIndx, endIndx);
            console.log(str);

        }

        line = arr.shift();
    }

}

stringGame(["//Th1s 1s my str1ng!//", "Change 1 i", "Includes string", "End my", "Uppercase", "FindIndex I", "Cut 5 5", "Done"]);