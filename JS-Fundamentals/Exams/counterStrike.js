// Write a program that keeps track of every won battle against an enemy. You will receive initial energy. Afterward, you will start receiving the distance you need to reach an enemy until the "End of battle" command is given, or you run out of energy.
// The energy you need for reaching an enemy is equal to the distance you receive. Each time you reach an enemy, you win a battle, and your energy is reduced. Otherwise, if you don't have enough energy to reach an enemy, end the program and print: "Not enough energy! Game ends with {count} won battles and {energy} energy".
// Every third won battle increases your energy with the value of your current count of won battles.
// Upon receiving the "End of battle" command, print the count of won battles in the following format:
// "Won battles: {count}. Energy left: {energy}" 
// Input / Constraints
// On the first line, you will receive initial energy – an integer [1-10000].
// On the following lines, you will be receiving the distance of an enemy – an integer [1-10000].
// Output
// The description contains the proper output messages for each case and the format they should be printed.


function counterStrike(arr) {
    let initialEnergy = arr.shift();
    initialEnergy = Number(initialEnergy);
    let command = arr.shift();
    let wonBattles = 0;
    let everyThirdWonBattle = 0;

    while (initialEnergy > 0) {
        if (command == 'End of battle') {
            console.log(`Won battles: ${wonBattles}. Energy left: ${initialEnergy}`);
            break;
        } else {
            let distance = Number(command);
            if (initialEnergy - distance > 0) {
                everyThirdWonBattle++;
                wonBattles++;
                if (everyThirdWonBattle == 3) {
                    initialEnergy += wonBattles;
                    everyThirdWonBattle = 0;
                }

                initialEnergy -= distance;


            } else if (initialEnergy - distance == 0) {
                wonBattles++;
                initialEnergy -= distance;
            } else {
                initialEnergy -= distance;
            }


        }
        command = arr.shift();
    }

    if (initialEnergy <= 0) {
        initialEnergy = 0;
        console.log(`Not enough energy! Game ends with ${wonBattles} won battles and ${initialEnergy} energy`);
    }
}

counterStrike((["100",
    "10",
    "10",
    "10",
    "1",
    "2",
    "3",
    "73",
    "10"]));