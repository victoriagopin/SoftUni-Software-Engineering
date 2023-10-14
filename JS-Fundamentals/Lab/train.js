// You will be given an array of strings.
// The first element will be a string containing wagons (numbers). Each number inside the string represents the
// number of passengers that are currently in a wagon.
// The second element in the array will be the max capacity of each wagon (single number).
// The rest of the elements will be commands in the following format:
// • Add {passengers} – add a wagon to the end with the given number of passengers.
// • {passengers} - find an existing wagon to fit all the passengers (starting from the first wagon)
// At the end, print the final state of the train (all the wagons separated by a space).

function train(arr) {
    let wagons = arr.shift();
    let wagonsAsArr = wagons.split(' ').map(Number);
    let maxPassengerCapacity = arr.shift();

    for (let command of arr) {
        let tokens = command.split(' ');
        let commandOrPassengers = tokens[0];
        let passsengers = Number(tokens[1]);

        if (commandOrPassengers == 'Add') {
            wagonsAsArr.push(passsengers);
        } else {
            let passsengers = Number(commandOrPassengers);
            for (let i = 0; i < wagonsAsArr.length; i++) {
                if (wagonsAsArr[i] + passsengers <= maxPassengerCapacity) {
                    wagonsAsArr[i] += passsengers;
                    break;
                }
            }
        }
    }
    console.log(wagonsAsArr.join(' '));
}

train(['0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6']);