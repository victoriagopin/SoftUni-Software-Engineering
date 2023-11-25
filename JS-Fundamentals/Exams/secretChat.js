/*
On the first line of the input, you will receive the concealed message. After that, until the "Reveal" command is given, you will receive strings with instructions for different operations that need to be performed upon the concealed message to interpret it and reveal its actual content. There are several types of instructions, split by ":|:"
"InsertSpace:|:{index}":
Inserts a single space at the given index. The given index will always be valid.
"Reverse:|:{substring}":
If the message contains the given substring, cut it out, reverse it and add it at the end of the message. 
If not, print "error".
This operation should replace only the first occurrence of the given substring if there are two or more occurrences.
"ChangeAll:|:{substring}:|:{replacement}":
Changes all occurrences of the given substring with the replacement text.
Input / Constraints
On the first line, you will receive a string with a message.
On the following lines, you will be receiving commands, split by ":|:".
Output
After each set of instructions, print the resulting string. 
After the "Reveal" command is received, print this message:"You have a new text message: {message}"

*/

function secretChat(arr) {
    let msg = arr.shift();

    let line = arr.shift();

    while (line != 'Reveal') {
        let tokens = line.split(':|:');
        let command = tokens[0];

        if (command == 'InsertSpace') {
            let indx = Number(tokens[1]);

            let rightHalf = msg.slice(0, indx);
            let leftHalf = msg.slice(indx);
            msg = rightHalf + ' ' + leftHalf;
            console.log(msg);

        } else if (command == 'Reverse') {
            let substr = tokens[1];
            if (msg.includes(substr)) {
                let modified = msg.split(substr).join('');
                let reversed = substr.split('').reverse().join('');
                msg = modified + reversed;
                console.log(msg);
            } else {
                console.log('error');
            }

        } else if (command == 'ChangeAll') {
            let substr = tokens[1];
            let replacement = tokens[2];

            let modified = msg.split(substr);
            msg = modified.join(replacement);
            console.log(msg);
        }

        line = arr.shift();
    }
    console.log(`You have a new text message: ${msg}`);
}

secretChat([
    'Hiware?uiyhho',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
]);