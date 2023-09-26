function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let helmetBroken = 0;
    let swordBroken = 0;
    let shieldBroken = 0;
    let armorBroken = 0;
    let gamesCount = 0;
    let anthGamesCount = 0;

    for (let i = 1; i <= lostFights; i++) {
        gamesCount++;
        anthGamesCount++;
        if (i % 2 == 0) {
            helmetBroken++;
        }
        if (i % 3 == 0) {
            swordBroken++;
        }

        if (gamesCount == 6) {
            shieldBroken++;
            gamesCount = 0;
        }

        if (anthGamesCount == 12) {
            armorBroken++;
            anthGamesCount = 0;
        }



    }

    let total = (helmetBroken * helmetPrice) + (swordBroken * swordPrice) + (shieldBroken * shieldPrice) + (armorBroken * armorPrice);
    console.log(`Gladiator expenses: ${total.toFixed(2)} aureus`);
}


gladiatorExpenses(23,
    12.50,
    21.50,
    40,
    200);