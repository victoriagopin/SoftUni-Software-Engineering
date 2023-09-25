function spiceMustFlow(startingYield) {
    let spices = 0;
    let yieldLeft = 0;
    let days = 0;

    while (startingYield >= 100) {
        days++;
        let consumation = startingYield - 26;
        yieldLeft += consumation;

        startingYield -= 10;


    }

    if (yieldLeft >= 26) {
        yieldLeft -= 26;
    }
    console.log(`${days}\n${yieldLeft}`);
}

spiceMustFlow(450);