// During World War 2, you are a mathematician who joined the cryptography team to decipher the enemy's enigma code. Your job is to create a program to crack the codes. 
// On the first line of the input, you will receive the encrypted message.After that, until the "Decode" command is given, you will be receiving strings with instructions for different operations that need to be performed upon the concealed message to interpret it and reveal its true content.There are several types of instructions, split by '|'
// "Move {number of letters}":
// Moves the first n letters to the back of the string
// "Insert {index} {value}":
// Inserts the given value before the given index in the string
// "ChangeAll {substring} {replacement}":
// Changes all occurrences of the given substring with the replacement text
// Input / Constraints
// On the first line, you will receive a string with a message.
// On the following lines, you will be receiving commands, split by '|'.
//     Output
// After the "Decode" command is received, print this message: "The decrypted message is: {message}"


function imitationGame(arr) {
    let encryptedMsg = arr.shift();
    let input = arr.shift();

    while (input != 'Decode') {
        let tokens = input.split('|');
        let command = tokens[0];

        if (command == 'Move') {
            let numOfLetters = Number(tokens[1]);
            let firstHalf = encryptedMsg.slice(0, numOfLetters);
            let secondHalf = encryptedMsg.slice(numOfLetters);
            encryptedMsg = secondHalf + firstHalf;

        } else if (command == 'Insert') {
            let index = Number(tokens[1]);
            let value = tokens[2];
            let asArr = encryptedMsg.split('');
            asArr.splice(index, 0, value);
            encryptedMsg = asArr.join('');


        } else if (command == 'ChangeAll') {
            let substring = tokens[1];
            let replacement = tokens[2];

            let newMsg = encryptedMsg.split(substring);
            encryptedMsg = newMsg.join(replacement);
        }

        input = arr.shift();
    }

    console.log(`The decrypted message is: ${encryptedMsg}`);
}

imitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'])