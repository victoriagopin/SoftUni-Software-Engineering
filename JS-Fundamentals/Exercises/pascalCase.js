// You will receive a single string.
// This string is written in PascalCase format. Your task here is to split this string by every word in it.
// Print them joined by comma and space.

function pascalCase(str) {
    let chars = str.split('');
    let upperCase = true;
    let word = [];
    let words = [];

    for (let i = 0; i < chars.length; i++) {
        let curChar = chars[i]
        if (curChar == curChar.toUpperCase()) {
            word.push(curChar);
            for (let z = i + 1; z < chars.length; z++) {
                let char = chars[z];
                if (char == char.toLowerCase()) {
                    word.push(char);
                } else {
                    let curWord = word.join('');
                    words.push(curWord);
                    word = [];
                    break;
                }
            }
        }
    }

    if (word.length > 0) {
        let curWord = word.join('');
        words.push(curWord);
    }
    console.log(words.join(', '));
}

pascalCase('SplitMeIfYouCanHaHaYouCantOrYouCan');