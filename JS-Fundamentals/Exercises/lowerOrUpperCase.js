function loweOrUpperCase(letter) {
    let currSymbol = letter.charCodeAt();

    if (currSymbol > 64 && currSymbol < 91) {
        console.log("upper-case")
    } else {
        console.log('lower-case');
    }
}

loweOrUpperCase('L')