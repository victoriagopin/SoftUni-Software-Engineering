function biggestNumber(a, b, c) {

    let big = 0;

    if (a >= b && a >= c) {
        big = a;
    } else if (b >= a && b >= c) {
        big = b;
    } else {
        big = c;
    }

    console.log(`${big}`);

}


biggestNumber(130, 5, 99)