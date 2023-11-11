// Write a function that receives a single string and replace any sequence of the same letters with a single
// corresponding letter.

function replaceRepatingChars(str) {
    let noRepeates = '';
    let previousChar = '';

    for (let char of str) {
        if (char != previousChar) {
            noRepeates += char;
            previousChar = char;
        }
    }
    console.log(noRepeates);
}

replaceRepatingChars('aaaaabbbbbcdddeeeedssaa');