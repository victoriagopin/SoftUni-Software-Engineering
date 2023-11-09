// Write a function that receives a string and two numbers. The numbers will be a starting index and count of
// elements to substring. Print the result.

function substringFunc(word, start, count) {
    let end = start + count;
    console.log(word.substring(start, end));
}

substringFunc('ASentence', 1, 5);