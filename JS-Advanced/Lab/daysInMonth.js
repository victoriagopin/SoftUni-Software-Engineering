function daysInMonth(month, year) {
    let realMonth = month - 1
    let myDate = new Date(year, realMonth + 1);
    myDate.setDate(myDate.getDate() - 1)

    console.log(`${myDate.getDate()}`);
}

daysInMonth(2, 2021)