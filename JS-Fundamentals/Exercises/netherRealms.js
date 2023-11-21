function netherRealms(str) {

    let namePattern = /(?<name>[^ ,]+)/g;
    let letterPattern = /[A-Z]+/gi;
    let damagePattern = /[+-]?\d\.?\d*/g;

    let arr = str.split(', ').map(name => name.trim()).sort((a, b) => a.localeCompare(b));

    for (let el of arr) {
        let match = el.match(namePattern);

        if (match) {
            let health = 0;
            let damage = 0;
            match = el.match(letterPattern);
            let damageMatch = el.match(damagePattern);
            if (damageMatch) {
                let nums = damageMatch.map(Number);
                for (let num of nums) {
                    damage += (num);
                }
            }
            let chars = match.join('');
            for (let i = 0; i < chars.length; i++) {
                let curChar = chars[i];
                let code = curChar.charCodeAt();
                health += code;
            }


            let multiplication = 0;
            let division = 0;
            for (let j = 0; j < el.length; j++) {
                let curSymbol = el[j];
                if (curSymbol == '*') {
                    multiplication++;
                } else if (curSymbol == '/') {
                    division++;
                }
            }

            if (multiplication != 0 && division == 0) {
                multiplication = multiplication * 2;
                damage = damage * multiplication;
            }

            if (division != 0 && multiplication == 0) {
                division = division * 2;
                damage = damage / division;
            }

            if (division != 0 && multiplication != 0) {
                multiplication = multiplication * 2;
                damage = damage * multiplication;
                division = division * 2;
                damage = damage / division;
            }

            console.log(`${el} - ${health} health, ${damage.toFixed(2)} damage`);
        }
    }
}

netherRealms('m15*/c-5.0   ')