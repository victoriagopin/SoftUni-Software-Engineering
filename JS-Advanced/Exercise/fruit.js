function fruit(fruit, weight, pricePerKg) {
    let wieightInKg = weight / 1000;
    let price = wieightInKg * pricePerKg;

    console.log(`I need $${price.toFixed(2)} to buy ${wieightInKg.toFixed(2)} kilograms ${fruit}.`);
}

fruit('orange', 2500, 1.80);