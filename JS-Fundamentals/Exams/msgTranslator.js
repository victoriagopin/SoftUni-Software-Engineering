function messageTranslator(arr) {
    let pattern = /!(?<command>[A-Z][a-z]{2,})!:\[(?<str>[A-Za-z]{7,})\]/g;
    let charsPattern = /[A-Za-z]/g;

    let n = Number(arr.shift());

    for (let i = 0; i < n; i++) {
        let curMsg = arr.shift();

        let match = pattern.exec(curMsg);
        if (match) {
            let msg = [];
            let command = match[1];
            let str = match[2];
            let chars = str.match(charsPattern);

            for (let char of chars) {
                let code = char.charCodeAt();
                msg.push(code);

            }
            console.log(`${command}: ${msg.join(' ')}`);

        } else {
            console.log("The message is invalid");
        }
    }
}

messageTranslator(["3",

    "go:[outside]",

    "!drive!:YourCarToACarWash",

    "!Watch!:[LordofTheRings]"]);