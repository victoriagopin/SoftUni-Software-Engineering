// For this problem, you have to write a function, which generates a password depending on input information. As
// such, you will be given an array of three strings. The first two strings will be at least 10 characters long, the third
// one will be one word.
// Your task here is to concatenate the first two strings and replace all vowels in the concatenated string with symbols
// from the third string. The first vowel must be replaced with the first character from the third string, the second
// vowel with the second character from that string, and so on. If the third string is less than the vowels count in the
// newly formed string you need to start over with the character on the 0 index. When you replace all vowels reverse
// the new password and print it on the console in a format:
// 'Your generated password is {password}'
// Note: All replaced vowels with the characters from the third string must be upper-case, the rest of the characters
// are lower-case.

function passwordGenerator(arr) {
    let concatenatedStr = arr[0] + arr[1];
    let arrOfChars = concatenatedStr.split('');
    let wordToReplaceWith = arr[2].split('');
    let vowels = ['a', 'o', 'u', 'e', 'i'];
    let indx = 0;

    for (let char of arrOfChars) {
        if (vowels.includes(char)) {
            let indxOfChar = arrOfChars.indexOf(char);
            let curChar = wordToReplaceWith[indx];
            let charToReplace = curChar.toUpperCase();
            arrOfChars.splice(indxOfChar, 1, charToReplace)
            indx++;
            if (indx > wordToReplaceWith.length - 1) {
                indx = 0;
            }
        }
    }
    let result = arrOfChars.reverse().join('');
    console.log(`Your generated password is ${result}`);
}
passwordGenerator([
    'ilovepizza',
    'ihatevegetables',
    'orange'
]);