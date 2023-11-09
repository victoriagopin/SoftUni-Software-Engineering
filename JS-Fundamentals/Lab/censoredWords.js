// Write a function that receives a text as a first parameter and a single word as a second. Find all occurrences of that
// word in the text and replace them with the corresponding count of '*'.

function censoredWords(sentence, word) {
    let censoredWord = '*'.repeat(word.length);

    while (sentence.includes(word)) {
        sentence = sentence.replace(word, censoredWord);
    }
    console.log(sentence);

}

censoredWords('hello world hello',
    'hello');