function needForSpeed(arr) {
    let n = Number(arr.shift());
    let cars = {};

    for (let i = 0; i < n; i++) {
        let tokens = arr.shift().split('|');
        let carModel = tokens[0];
        let mileage = Number(tokens[1]);
        let fuel = Number(tokens[2]);

        let car = {
            mileage: mileage,
            fuel: fuel
        }

        cars[carModel] = car;
    }

    let line = arr.shift();

    while (line != 'Stop') {
        let tokens = line.split(' : ');
        let command = tokens[0];

        if (command == 'Drive') {
            let carModel = tokens[1];
            let distance = Number(tokens[2]);
            let fuel1 = Number(tokens[3]);

            if (cars[carModel].fuel >= fuel1) {
                cars[carModel].fuel -= fuel1;
                console.log(`${carModel} driven for ${distance} kilometers. ${fuel1} liters of fuel consumed.`);
            } else {
                console.log(`Not enough fuel to make that ride`);
            }

        } else if (command == 'Refuel') {
            let carModel = tokens[1];
            let fuel1 = Number(tokens[2]);

            let refuel = cars[carModel].fuel + fuel1 > 75 ? 75 - fuel1 : fuel1;
            cars[carModel].fuel += refuel;
            console.log(`${carModel} refueled with ${refuel} liters`);

        } else if (command == 'Revert') {

        }
    }
}

needForSpeed([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
]);