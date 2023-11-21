function netherRealms(str) {

    let namePattern = /(?<name>[^ ,]+)/g;
    let letterPattern = /[A-Z]+/gi;

    let arr = str.split().sort((a, b) => a.localeCompare(b));

    for (let el of arr) {
        let match = el.match(namePattern);

        if (match) {
            let health = 0;
            match = el.match(letterPattern);
            let chars = match.join('');
            for (let i = 0; i < chars.length; i++) {
                let curChar = chars[i];
                let code = curChar.charCodeAt();
                health += code;
            }
            console.log(health);
        }
    }
}

netherRealms('M3ph-0.5s-0.5t0.0**')