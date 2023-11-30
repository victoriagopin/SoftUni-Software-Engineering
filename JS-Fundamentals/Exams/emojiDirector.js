/*
Your task is to write a program that extracts emojis from a text and find the threshold based on the input.
You have to get your cool threshold. It is obtained by multiplying all the digits found in the input.  The cool threshold could be a huge number, so be mindful.
An emoji is valid when:
It is surrounded by 2 characters, either "::" or "**"
It is at least 3 characters long (without the surrounding symbols)
It starts with a capital letter
Continues with lowercase letters only
Examples of valid emojis: ::Joy::, **Banana**, ::Wink::
Examples of invalid emojis: ::Joy**, ::fox:es:, **Monk3ys**, :Snak::Es::
You need to count all valid emojis in the text and calculate their coolness. The coolness of the emoji is determined by summing all the ASCII values of all letters in the emoji. 
Examples: ::Joy:: - 306, **Banana** - 577, ::Wink:: - 409
You need to print the result of the cool threshold and, after that take all emojis out of the text, count them and print only the cool ones on the console.
Input
On the single input, you will receive a piece of string. 
Output
On the first line of the output, print the obtained Cool threshold in the format:
"Cool threshold: {coolThresholdSum}"
On the following line, print the count of all emojis found in the text in the format:
"{countOfAllEmojis} emojis found in the text. The cool ones are:
{cool emoji 1}
{cool emoji 2}
…
{cool emoji N}"
Constraints
There will always be at least one digit in the text!

*/

function emojiDirector([input]) {
    let pattern = /(::|\*\*)([A-Z][a-z]{2,})(\1)/g;
    let digitPattern = /\d/g;

    let digits = input.match(digitPattern);
    let coolThreshold = Number(digits[0]);

    for (let i = 1; i < digits.length; i++) {
        let curDigit = Number(digits[i]);
        coolThreshold *= curDigit;
    }

    let match = pattern.exec(input);
    let scale = [];

    while (match) {
        let emotion = match[2];
        let coolness = 0;
        for (let char of emotion) {
            let code = char.charCodeAt();
            coolness += code;
        }

        if (coolness > coolThreshold) {
            scale.push(match[0]);


        }
        match = pattern.exec(input);
    }

    let found = input.match(pattern);

    console.log(`Cool threshold: ${coolThreshold}`);
    console.log(`${found.length} emojis found in the text. The cool ones are:`);
    console.log(scale.join('\n'));

}

emojiDirector(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."]);