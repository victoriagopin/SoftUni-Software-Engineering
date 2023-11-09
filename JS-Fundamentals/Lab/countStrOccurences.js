// Write a function that receives a text and a single word that you need to search. Print the number of all occurrences
// of this word in the text.

function count(sentence, word) {
    let arr = sentence.split(' ');
    let counter = 0;

    for (let el of arr) {
        if (el == word) {
            counter++;
        }
    }
    console.log(counter);
}

count('softuni is great place for learning new programming languages',
    'softuni');