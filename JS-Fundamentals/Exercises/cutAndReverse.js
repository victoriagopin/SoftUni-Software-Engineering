// The input will be a single string.
// Write a function that cuts the given string into half and reverse the two halves.
// Print each half on a separate line.

function cutAndReverse(str) {
    let middle = str.length / 2;
    let leftSide = str.slice(0, middle).split('').reverse().join('');
    let rightSide = str.slice(middle).split('').reverse().join('');


    console.log(leftSide);
    console.log(rightSide);

}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');