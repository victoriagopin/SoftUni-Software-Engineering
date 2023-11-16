// Yet again, you have forgotten your password. Naturally, it's not the first time this has happened. Actually, you got so tired of it that you decided to help yourself with an intelligent solution.
// Write a password reset program that performs a series of commands upon a predefined string. First, you will receive a string, and afterward, until the command "Done" is given, you will be receiving strings with commands split by a single space. The commands will be the following:
// "TakeOdd"
//  Takes only the characters at odd indices and concatenates them to obtain the new raw password and then prints it.
// "Cut {index} {length}"
// Gets the substring with the given length starting from the given index from the password and removes its first occurrence, then prints the password on the console.
// The given index and the length will always be valid.
// "Substitute {substring} {substitute}"
// If the raw password contains the given substring, replace all of its occurrences with the substitute text given and print the result.
// If it doesn't, prints "Nothing to replace!".
// Input
// You will be receiving strings until the "Done" command is given.
// Output
// After the "Done" command is received, print:
// "Your password is: {password}"
// Constraints
// The indexes from the "Cut {index} {length}" command will always be valid.


function passwordReset(arr) {
    let strToModify = arr.shift();
    let finalStr = strToModify;

    let command = arr.shift();

    while (command != 'Done') {
        let tokens = command.split(' ');
        command = tokens[0];
        if (command == 'TakeOdd') {
            let modifiedStr = '';
            for (let i = 1; i < strToModify.length; i += 2) {
                let curSymbol = strToModify[i];
                modifiedStr += curSymbol;
            }
            finalStr = modifiedStr;
            console.log(finalStr);
        } else if (command == 'Cut') {
            let indx = Number(tokens[1]);
            let length = Number(tokens[2]);


            finalStr = finalStr.substring(0, indx) + finalStr.substring(indx + length)
            console.log(finalStr);
        } else if (command == 'Substitute') {
            let substring = tokens[1];
            let substitute = tokens[2];

            if (finalStr.includes(substring)) {
                while (finalStr.includes(substring)) {
                    finalStr = finalStr.replace(substring, substitute);
                }
                console.log(finalStr);
            } else {
                console.log("Nothing to replace!");
            }
        }

        command = arr.shift();
    }
    console.log(`Your password is: ${finalStr}`);
}

passwordReset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"]);