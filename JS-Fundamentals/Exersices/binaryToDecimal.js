function binaryToDecimal(binary) {
    let binaryAsString = String(binary);
    let digit = parseInt(binaryAsString, 2);
    console.log(digit);
}

binaryToDecimal('11110000');