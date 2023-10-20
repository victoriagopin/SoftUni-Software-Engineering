// You are at the shooting gallery again, and you need a program that helps you keep track of moving targets.On the first line, you will receive a sequence of targets with their integer values, split by a single space.Then, you will start receiving commands for manipulating the targets until the "End" command.The commands are the following:
// "Shoot {index} {power}"
// Shoot the target at the index if it exists by reducing its value by the given power(integer value). 
// Remove the target if it is shot.A target is considered shot when its value reaches 0.
// "Add {index} {value}"
// Insert a target with the received value at the received index if it exists. 
// If not, print: "Invalid placement!"
// "Strike {index} {radius}"
// Remove the target at the given index and the ones before and after it depending on the radius.
// If any of the indices in the range is invalid, print: "Strike missed!" and skip this command.
//     Example: "Strike 2 2"
//     "End"
//     Print the sequence with targets in the following format and end the program:
//     "{target1}|{target2}…|{targetn}"
//     Input / Constraints
//     On the first line, you will receive the sequence of targets – integer values [1-10000].
//     On the following lines, until the "End" will be receiving the command described above – strings.
//     There will never be a case when the "Strike" command would empty the whole sequence.
//     Output
//     Print the appropriate message in case of any command if necessary.
//     In the end, print the sequence of targets in the format described above.


function movingTarget(arr) {
    let targets = arr.shift().split(' ').map(Number);

    for (let el of arr) {
        let tokens = el.split(' ');
        let command = tokens.shift();

        if (command == 'Shoot') {
            let indx = Number(tokens[0]);
            let power = Number(tokens[1]);
            if (indx >= 0 && indx < targets.length) {
                targets[indx] -= power;
                if (targets[indx] <= 0) {
                    targets.splice(indx, 1);
                }
            }
        } else if (command == 'Add') {
            let indx = Number(tokens[0]);
            let value = Number(tokens[1]);

            if (indx >= 0 && indx < targets.length) {

                targets.splice(indx, 0, value);
            } else {
                console.log(`Invalid placement!`);
            }
        } else if (command == 'Strike') {
            let indx = Number(tokens[0]);
            let radius = Number(tokens[1]);

            if (indx - radius >= 0 && indx + radius < targets.length) {
                targets.splice(Math.max(0, indx - radius), radius * 2 + 1);
            } else {
                console.log(`Strike missed!`);
            }
        } else if (command == 'End') {
            console.log(targets.join('|'));
        }
    }
}

movingTarget(["1 2 3 4 5",
    "Strike 0 1",
    "End"]);