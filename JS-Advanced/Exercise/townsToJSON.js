function townsToJSON(arr) {
    let str = arr.toString();
    let pattern = /[A-Za-z 0-9.?]+/g;
    let objArr = [];

    let matches = str.match(pattern);


    for (let i = 3; i < matches.length; i += 3) {
        let obj = {};
        obj['Town'] = matches[i].trim();
        obj['Latitude'] = Number(Number(matches[i + 1]).toFixed(2));
        obj['Longitude'] = Number(Number(matches[i + 2]).toFixed(2));
        objArr.push(obj);
    }

    console.log(JSON.stringify(objArr));

}

townsToJSON(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']);