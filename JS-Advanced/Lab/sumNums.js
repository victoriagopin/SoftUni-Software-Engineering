function sumNums(n1, n2) {
    let start = Number(n1);
    let end = Number(n2);
    let sum = 0;
    for (let i = start; i <= end; i++) {
        let curNum = i;
        sum += curNum;
    }
    console.log(sum);
}

sumNums('-8', '20')