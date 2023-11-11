// Write a function, which receives two parameters.
// The first parameter will be a string with some words separated by ', '.
// The second parameter will be a string that contains templates containing '*'.
// Find the word with the same length as the template and replace it.

function revealWords(word, text) {
    let words = word.split(', ');


    for (let el of words) {
        let countRepeat = el.length;
        let slotWord = '*'.repeat(countRepeat);
        text = text.replace(slotWord, el);
    }

    console.log(text);
}

revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages');