function thePianist(arr) {
    let numOfpieces = Number(arr.shift());
    let favPianoPieces = {};

    for (let i = 0; i < numOfpieces; i++) {
        let tokens = arr.shift().split('|');
        let pieceName = tokens[0];
        let composer = tokens[1];
        let key = tokens[2];

        let piece = {
            composer: composer,
            key: key
        }

        favPianoPieces[pieceName] = piece;
    }

    let line = arr.shift();

    while (line != 'Stop') {
        let tokens = line.split('|');

        let command = tokens[0];

        if (command == 'Add') {
            let pieceName = tokens[1];
            let composer = tokens[2];
            let key = tokens[3];

            let piece = {
                composer: composer,
                key: key
            }

            if (!(pieceName in favPianoPieces)) {
                favPianoPieces[pieceName] = piece;
                console.log(`${pieceName} by ${composer} in ${key} added to the collection!`);
            } else {
                console.log(`${pieceName} is already in the collection!`);
            }

        } else if (command == 'Remove') {
            let pieceName = tokens[1];

            if (pieceName in favPianoPieces) {
                delete favPianoPieces[pieceName];
                console.log(`Successfully removed ${pieceName}!`);
            } else {
                console.log(`Invalid operation! ${pieceName} does not exist in the collection.`);
            }

        } else if (command == 'ChangeKey') {
            let pieceName = tokens[1];
            let newKey = tokens[2];
            if (pieceName in favPianoPieces) {
                let piece = favPianoPieces[pieceName];
                piece.key = newKey;
                console.log(`Changed the key of ${pieceName} to ${newKey}!`);

            } else {
                console.log(`Invalid operation! ${pieceName} does not exist in the collection.`);
            }
        }

    }
}

thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    // 'Add|Sonata No.2|Chopin|B Minor',
    // 'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    // 'Add|Fur Elise|Beethoven|C# Minor',
    // 'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]);