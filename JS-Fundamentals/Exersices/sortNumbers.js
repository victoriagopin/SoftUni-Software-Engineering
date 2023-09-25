function sortNumbers(a, b, c) {
    let big = 0;
    let middle = 0;
    let smallest = 0;

    if (a >= b && a >= c) {
        big = a;
    } else if (b >= a && b >= c) {
        big = b;
    } else {
        big = c;
    }

    if (a <= b && a <= c) {
        smallest = a;
    } else if (b <= a && b <= c) {
        smallest = b;
    } else {
        smallest = c;
    }

    if (a >= b && a <= c) {
        middle = a;
    } else if (b >= a && b <= c) {
        middle = b;
    } else if (b <= a && b >= c) {
        middle = b;
    } else {
        middle = c
    }



    console.log(`${big}\n${middle}\n${smallest}`);

}


sortNumbers(1.3, 1.9, 1.9);