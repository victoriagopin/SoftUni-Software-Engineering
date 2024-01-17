function stringLeng(a, b, c) {
    let total = a.length + b.length + c.length;
    let avg = total / 3;

    console.log(total);
    console.log(Math.floor(avg));
}

stringLeng('chocolate', 'ice cream', 'cake')