function argumentInfo(...arg) {


    let data = {};

    for (let el of arg) {
        let type = typeof el;
        console.log(`${type}: ${el}`);
        if (!data.hasOwnProperty(type)) {
            data[type] = 0;
        }

        data[type] += 1;
    }

    let entries = Object.entries(data).sort((a, b) => b[1] - a[1]);

    for (let [type, count] of entries) {
        console.log(`${type} = ${count}`);
    }
}

argumentInfo('cat', 42, function () { console.log('Hello world!'); })