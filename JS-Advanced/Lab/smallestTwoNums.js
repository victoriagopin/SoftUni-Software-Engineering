function smallestTwoNums(arr) {
    let twoMinNums = [];
    let min = Math.min(...arr);

    let indx = arr.indexOf(min);
    let n1 = arr.splice(indx, 1);
    twoMinNums.push(n1);


    let min2 = Math.min(...arr);
    let indx2 = arr.indexOf(min2);
    let n2 = arr.splice(indx2, 1);
    twoMinNums.push(n2);

    console.log(twoMinNums.join(' '));
}

smallestTwoNums([3, 0, 10, 4, 7, 3]);