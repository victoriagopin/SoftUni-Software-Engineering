function biscuitFactory(arr) {
    let numOfBiscuitsPerDay = Number(arr[0]);
    let workersCount = Number(arr[1]);
    let competingFactory = Number(arr[2]);

    let dailyIncome = numOfBiscuitsPerDay * workersCount
    let fullDays = 20 * dailyIncome;
    let halfDays = 10 * (Math.floor(dailyIncome * 0.75));
    let ourFactory = fullDays + halfDays;

    console.log(`You have produced ${ourFactory} biscuits for the past month.`);

    if (ourFactory > competingFactory) {
        let difference = ourFactory - competingFactory;
        let percentage = (difference / competingFactory) * 100;
        console.log(`You produce ${percentage.toFixed(2)} percent more biscuits.`);
    } else {
        let difference = competingFactory - ourFactory;
        let percentage = (difference / competingFactory) * 100;
        console.log(`You produce ${percentage.toFixed(2)} percent less biscuits.`);
    }
}

biscuitFactory(["65",

    "12",

    "26000"]);