function bitcoinMining(input) {
    let firstDay = Number(input[0]);
    let index = 1;
    let counter = 0;
    let moneyWonPerDay = 0;
    let bitcoinPrice = 11949.16;
    let bitcoinBought = 0;
    let day = 0;
    let isDay = false;


    for (let i = 1; i <= input.length; i++) {
        counter++;
        if (counter == 3) {
            counter = 0;
            let thirdDay = firstDay * 67.51;
            totalPerThirdDay = thirdDay * 0.70;
            moneyWonPerDay += totalPerThirdDay;

        } else {
            moneyWonPerDay += firstDay * 67.51;
        }
        if (isDay == false) {
            day++;
        }

        while (moneyWonPerDay >= bitcoinPrice) {
            bitcoinBought++;
            moneyWonPerDay -= bitcoinPrice;

        }

        if (bitcoinBought > 0) {
            isDay = true;
        }
        if (moneyWonPerDay >= bitcoinPrice) {
            bitcoinBought++;
            moneyWonPerDay -= bitcoinPrice;
        }

        firstDay = Number(input[index]);
        index++;

    }

    if (day == 0) {
        day = 1;
    }

    console.log(`Bought bitcoins: ${bitcoinBought}`);

    if (bitcoinBought > 0) {
        console.log(`Day of the first purchased bitcoin: ${day}`);
    }

    console.log(`Left money: ${moneyWonPerDay.toFixed(2)} lv.`);

}


bitcoinMining([3124.15,
    504.212,
    2511.124]);