// Write a function that manages meeting appointments. The input comes as an array of strings. Each string contains a
// weekday and person’s name. For each successful meeting, print a message. If you receive the same weekday twice,
// the meeting cannot be scheduled so print a conflicting message. In the end, print a list of all successful meetings.

function meetings(arr) {
    let scheduledMeetings = {};

    for (let el of arr) {
        let tokens = el.split(' ');
        let day = tokens[0];
        let name = tokens[1];

        if (!scheduledMeetings.hasOwnProperty(day)) {
            scheduledMeetings[day] = name;
            console.log(`Scheduled for ${day}`);
        } else {
            console.log(`Conflict on ${day}!`);
        }
    }

    let entries = Object.entries(scheduledMeetings);

    for (let entry of entries) {
        console.log(`${entry[0]} -> ${entry[1]}`);
    }
}

meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']);