// Write a function that counts the times each word occurs in a text. Print the words sorted by count in descending
// order. The input comes as an array of strings.

function wordOcc(arr) {
    let map = new Map();

    for (let word of arr) {
        if (!map.has(word)) {
            map.set(word, +1);
        } else {
            let curQty = map.get(word);
            let newQty = curQty + 1;
            map.set(word, newQty);
        }
    }

    let sorted = Array.from(map).sort((a, b) => b[1] - a[1]);
    for (let kvp of sorted) {
        console.log(`${kvp[0]} -> ${kvp[1]} times`);
    }
}

wordOcc(["Here", "is", "the", "first", "sentence",
    "Here", "is", "another", "sentence", "And",
    "finally", "the", "third", "sentence"]);