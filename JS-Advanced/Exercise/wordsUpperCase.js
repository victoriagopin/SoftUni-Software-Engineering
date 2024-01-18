function wordsUppercase(str) {
    let pattern = /[A-Za-z]+/g;

    let match = str.match(pattern);
    let result = [];
    for (let word of match) {
        let transformedWord = word.toUpperCase();
        result.push(transformedWord);
    }

    console.log(result.join(', '));

}

wordsUppercase('hello');