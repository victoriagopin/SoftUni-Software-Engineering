// Write a program, which matches a date in the format "dd{separator}MMM{separator}yyyy".

function matchDates([dates]) {
    let regex = /(?<day>\d{2})(?<sep>[-./])(?<month>[A-Z][a-z]{2})\k<sep>(?<year>\d{4})/g;


    let match = regex.exec(dates);

    while (match != null) {
        let { day, month, year } = match.groups;

        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
        match = regex.exec(dates);
    }
}

matchDates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016']);