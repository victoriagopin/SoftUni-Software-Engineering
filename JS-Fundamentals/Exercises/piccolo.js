// Write a function that:
// • Records a car number for every car that enters the parking lot
// • Removes a car number when the car goes out
// • Input will be an array of strings in format [direction, carNumber]
// Print the output with all car numbers which are in the parking lot sorted in ascending by number.
// If the parking lot is empty, print: "Parking Lot is Empty".

function piccolo(arr) {
    let parking = [];
    for (let el of arr) {
        let tokens = el.split(', ');
        let command = tokens.shift();
        let carNum = tokens.shift();

        if (command == 'IN') {
            if (!parking.includes(carNum)) {
                parking.push(carNum);
            }
        } else {
            if (parking.includes(carNum)) {
                let indx = parking.indexOf(carNum);
                parking.splice(indx, 1);
            }
        }
    }

    parking.sort();
    if (parking.length == 0) {
        console.log(`Parking Lot is Empty`);
    } else {
        parking.sort((a, b) => a.localeCompare(b));
        for (let car of parking) {
            console.log(car);
        }
    }
}

piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']);