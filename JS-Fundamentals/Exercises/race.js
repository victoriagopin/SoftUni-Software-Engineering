// Write a function that processes information about a race. On the first line, you will be given a list of participants
// separated by ", ". On the next few lines until you receive a line "end of race" you will be given some info which will
// be some alphanumeric characters. In between them, you could have some extra characters which you should
// ignore. For example: "G!32e%o7r#32g$235@!2e". The letters are the name of the person and the sum of the digits
// is the distance he ran. So here we have George who ran 29 km. Store the information about the person only if the
// list of racers contains the name of the person. If you receive the same person more than once just add the
// distance to his old distance. At the end print the top 3 racers ordered by distance in descending in the format:
// "1st place: {first racer}
// 2nd place: {second racer}
// 3rd place: {third racer}"

function race(arr) {
    let namePattern = /[A-Z]+/gi;
    let digitPattern = /\d/g;
    let participants = {};

    let names = arr.shift().split(', ');

    let command = arr.shift();

    while (command != 'end of race') {
        let nameMatches = command.match(namePattern);
        let digitMatches = command.match(digitPattern);

        let name = nameMatches.join('');

        if (names.includes(name)) {

            if (!(name in participants)) {
                participants[name] = 0;
                for (let i = 0; i < digitMatches.length; i++) {
                    let curNum = Number(digitMatches[i]);
                    participants[name] += curNum;

                }
            } else {
                for (let i = 0; i < digitMatches.length; i++) {
                    let curNum = Number(digitMatches[i]);
                    participants[name] += curNum;

                }
            }
        }


        command = arr.shift();
    }

    let entries = Object.entries(participants).sort((a, b) => b[1] - a[1]);

    console.log(`1st place: ${entries[0][0]}`);
    console.log(`2nd place: ${entries[1][0]}`);
    console.log(`3rd place: ${entries[2][0]}`);
}

race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
    'Mi*&^%$ch123o!#$%#nne787) ',
    '%$$B(*&&)i89ll)*&) ',
    'R**(on%^&ald992) ',
    'T(*^^%immy77) ',
    'Ma10**$#g0g0g0i0e',
    'end of race']);