// On the first line, you will be given a string containing all of your stops. Until you receive the command "Travel", you will be given some commands to manipulate that initial string. The commands can be:
// "Add Stop:{index}:{string}":
// Insert the given string at that index only if the index is valid.
// "Remove Stop:{start_index}:{end_index}":
// Remove the elements of the string from the starting index to the end index (inclusive) if both indices are valid.
// "Switch:{old_string}:{new_string}":
// If the old string is in the initial string, replace it with the new one (all occurrences).
// Note: After each command, print the current state of the string!
// After the "Travel" command, print the following: "Ready for world tour! Planned stops: {string}".
// Input / Constraints
// JavaScript: you will receive a list of strings.
// An index is valid if it is between the first and the last element index (inclusive) (0 ….. Nth) in the sequence.
// Output
// Print the proper output messages in the proper cases as described in the problem description.


function worldTour(arr) {
    let stops = arr.shift();

    let line = arr.shift();

    while (line != 'Travel') {
        let tokens = line.split(':');
        let command = tokens[0];

        if (command == 'Add Stop') {
            let index = Number(tokens[1]);
            let str = tokens[2];

            if (index >= 0 && index < stops.length) {
                let firstHalf = stops.slice(0, index);
                let secondHalf = stops.slice(index);
                stops = firstHalf + str + secondHalf;
                console.log(stops);
            } else {
                console.log(stops);
            }
        } else if (command == 'Remove Stop') {
            let startIndx = Number(tokens[1]);
            let endIndx = Number(tokens[2]);

            if (startIndx >= 0 && startIndx < stops.length && endIndx >= 0 && endIndx < stops.length) {
                let firstHalf = stops.slice(0, startIndx);
                let secondHalf = stops.slice(endIndx + 1);
                stops = firstHalf + secondHalf;
                console.log(stops);
            } else {
                console.log(stops);
            }
        } else if (command == 'Switch') {
            let oldStr = tokens[1];
            let newStr = tokens[2];

            if (stops.includes(oldStr)) {
                let replaceing = stops.split(oldStr);
                stops = replaceing.join(newStr);
                console.log(stops);
            } else {
                console.log(stops);
            }

        }

        line = arr.shift();
    }
    console.log(`Ready for world tour! Planned stops: ${stops}`);
}

worldTour(["Albania:Bulgaria:Cyprus:Deuchland",
    "Add Stop:3:Nigeria",
    "Remove Stop:4:8",
    "Switch:Albania: Azərbaycan",
    "Travel"]);