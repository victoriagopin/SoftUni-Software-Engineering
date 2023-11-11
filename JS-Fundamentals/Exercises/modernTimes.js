// The input will be a single string.
// Find all special words starting with #. If the found special word does not consist only of letters, then it is invalid and
// should not be printed.
// Finally, print out all the special words you found without the label (#) on a new line.

function modernTimes(text) {
    let textArr = text.split(' ');

    let hashWords = textArr.filter(word => word.startsWith('#') && word.length > 1);

    for (let word of hashWords) {
        word = word.slice(1);
        let isValid = true;

        for (let char of word) {
            if (!/[A-Za-z]/.test(char)) {
                isValid = false;
            }
        }

        if (isValid) {
            console.log(word);
        }
    }
}

modernTimes('Nowadays everyone uses # to tag a #sp12ecial word in #socialMedia');