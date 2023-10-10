// On the first three lines, you will receive the quantity of food, hay, and cover, which Merry buys for a month (30 days). On the fourth line, you will receive the guinea pig's weight.
// Every day Puppy eats 300 gr of food. Every second day Merry first feeds the pet, then gives it a certain amount of hay equal to 5% of the rest of the food. On every third day, Merry puts Puppy cover with a quantity of 1/3 of its weight.
// Calculate whether the quantity of food, hay, and cover, will be enough for a month.
// If Merry runs out of food, hay, or cover, stop the program!
// Input
// On the first line – quantity food in kilograms - a floating-point number in the range [0.0 – 10000.0].
// On the second line – quantity hay in kilograms - a floating-point number in the range [0.0 – 10000.0].
// On the third line – quantity cover in kilograms - a floating-point number in the range [0.0 – 10000.0].
// On the fourth line – guinea's weight in kilograms - a floating-point number in the range [0.0 – 10000.0].
// Output
// If the food, the hay, and the cover are enough, print:
// "Everything is fine! Puppy is happy! Food: {excessFood}, Hay: {excessHay}, Cover: {excessCover}."
// If one of the things is not enough, print:
// "Merry must go to the pet store!"
// The output values must be formatted to the second decimal place!


function guineaPig(arr) {
    let foodQuantityInKg = Number(arr[0]) * 1000;
    let hayQuantityInKg = Number(arr[1]) * 1000;
    let coverQuantityInKg = Number(arr[2]) * 1000;
    let pigsWeightInKg = Number(arr[3]) * 1000;
    let days = 0;
    let everySecondDay = 0;
    let everyThirdDay = 0;

    while (foodQuantityInKg > 0 && hayQuantityInKg > 0 && coverQuantityInKg > 0) {
        everySecondDay++;
        everyThirdDay++;
        days++;
        foodQuantityInKg -= 300;

        if (everySecondDay == 2) {
            everySecondDay = 0;
            hayQuantityInKg -= (foodQuantityInKg * 5) / 100;
        }

        if (everyThirdDay == 3) {
            coverQuantityInKg -= pigsWeightInKg / 3;
            everyThirdDay = 0;
        }
        if (days == 30) {
            console.log(`Everything is fine! Puppy is happy! Food: ${(foodQuantityInKg / 1000).toFixed(2)}, Hay: ${(hayQuantityInKg / 1000).toFixed(2)}, Cover: ${(coverQuantityInKg / 1000).toFixed(2)}.`)
            break;
        }
    }

    if (foodQuantityInKg < 0 || hayQuantityInKg < 0 || coverQuantityInKg < 0) {
        console.log(`Merry must go to the pet store!`);
    }
}

guineaPig((["1",
    "1.5",
    "3",
    "1.5"]));
