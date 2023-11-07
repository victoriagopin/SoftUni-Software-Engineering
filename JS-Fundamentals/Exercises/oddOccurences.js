// Write a function that extracts the elements of a sentence, if it appears an odd number of times (case-insensitive).
// The input comes as a single string. The words will be separated by a single space

function oddOccurences(str) {
    let arr = str.split(' ');
    let map = new Map();

    for (let word of arr) {
        let lowerCaseWord = word.toLowerCase();
        if (map.has(lowerCaseWord)) {
            let curQty = map.get(lowerCaseWord)
            let newQty = curQty + 1;
            map.set(lowerCaseWord, newQty)
        } else {
            let qty = 1;
            map.set(lowerCaseWord, qty);
        }
    }

    let myMapArray = Array.from(map);

    let filteredMap = myMapArray.filter(([key, value]) => value % 2 != 0);

    let keysString = filteredMap.map(([key, value]) => key).join(' ');

    console.log(keysString);

}

oddOccurences('Cake IS SWEET is Soft CAKE sweet Food');