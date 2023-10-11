// You are given a field size and the indexes of ladybugs inside the field.A ladybug changes its position either to its
// left or to its right by a given fly length.A command to a ladybug looks like this: "0 right 1".This means that the
// little insect placed on index 0 should fly one index to its right.If the ladybug lands on a fellow ladybug, it continues
// to fly in the same direction by the same fly length.If the ladybug flies out of the field, it is gone.
// If you are given a ladybug index that does not have a ladybug there, nothing happens. If you are given a ladybug
// index that is outside the field, nothing happens.
// Your job is to create the program, simulating the ladybugs flying around doing nothing. In the end, print all cells in
// the field separated by blank spaces. For each cell that has a ladybug on it print '1' and for each empty cell print '0'.
// For the example above, the output should be '0 1 0'. 

function ladyBugs(arr) {
    let fieldSize = arr[0];
    let ladyBugsIndxs = arr[1].split(' ').map(Number);
    let field = [];

    for (let i = 0; i < fieldSize; i++) {
        if (ladyBugsIndxs.includes(i)) {
            field[i] = 1;
        } else {
            field[i] = 0;
        }
    }

    for (let z = 2; z < arr.length; z++) {
        let tokens = arr[z].split(' ');

        let curIndx = Number(tokens[0]);
        let direction = tokens[1];
        let flyLength = Number(tokens[2]);


        if (!field[curIndx]) {
            continue;
        }

        field[curIndx] = 0;

        if (direction == 'left') {
            let newIdx = curIndx - flyLength;

            if (newIdx >= 0) {
                while (field[newIdx] == 1) {
                    newIdx -= flyLength;
                }

                if (newIdx >= 0) {
                    field[newIdx] = 1;
                }
            }
        } else {
            let newIdx = curIndx + flyLength;

            if (newIdx < field.length) {
                while (field[newIdx] == 1) {
                    newIdx += flyLength;
                }

                if (newIdx < field.length) {
                    field[newIdx] = 1;
                }

            }
        }



    }
    console.log(field.join(' '));
}

ladyBugs([5,
    '3',
    '3 left 2',
    '1 left -2'])