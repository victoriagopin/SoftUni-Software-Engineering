function celebrateValentineDay(input) {
    let neighborhood = input.shift().split('@').map(Number);
    let jumpCommands = input.slice(0, input.indexOf('Love!'));
    let position = 0;

    for (let i = 0; i < jumpCommands.length; i++) {
        let command = jumpCommands[i].split(' ');
        let length = Number(command[1]);
        position = (position + length) % neighborhood.length;

        if (neighborhood[position] === 0) {
            console.log(`Place ${position} already had Valentine's day.`);
        } else {
            neighborhood[position] -= 2;
            if (neighborhood[position] === 0) {
                console.log(`Place ${position} has Valentine's day.`);
            }
        }
    }

    let notCelebrated = neighborhood.filter(x => x > 0).length;
    if (notCelebrated === 0) {
        console.log(`Mission was successful.`);
    } else {
        console.log(`Cupid has failed ${notCelebrated} places.`);
    }
    console.log(`Cupid's last position was ${position}.`);
}

celebrateValentineDay([
    "2@4@2",
    "Jump 2",
    "Jump 2",
    "Jump 8",
    "Jump 3",
    "Jump 1",
    "Love!"
]);


