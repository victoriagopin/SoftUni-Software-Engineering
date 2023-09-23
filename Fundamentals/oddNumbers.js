function oddNumber(n) {
    let sum = 0;
    let count = 0;
    let result = 0;;

    for (let i = 1; count < n; i += 2) {
        sum += i;
        result += i;
        console.log(result);
        result = 0;
        count++;
    }
    console.log(`Sum: ${sum}`);

}

oddNumber(5);