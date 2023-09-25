function triplesOfLatinLetters(n) {
    let num = Number(n);
    let letters = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < n; i++) {
        for (let y = 0; y < n; y++) {
            for (let z = 0; z < n; z++) {
                let abc = letters.length;

                console.log(`${letters[i]}${letters[y]}${letters[z]}`);
            }
        }

    }
}

triplesOfLatinLetters('2');