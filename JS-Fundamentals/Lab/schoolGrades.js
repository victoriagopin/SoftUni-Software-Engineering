// Write a function that stores students and their grades throughout the year. If a student appears more than once,
// add the new grades to existing ones. Finally, print the students and their average grades, sorted alphabetically by
// student name. The input comes as an array of strings.
// Note: The average grades must be fixed to the second decimal place.

function schoolGrades(arr) {
    let grades = {};


    for (let el of arr) {
        let tokens = el.split(' ');
        let name = tokens.shift();

        let grade = [];
        for (let i = 0; i < tokens.length; i++) {
            let num = Number(tokens[i]);
            grade.push(num);

        }

        if (grades.hasOwnProperty(name)) {

            grades[name] = grades[name].concat(grade);
        } else {
            grades[name] = grade;
        }
    }

    let entries = Object.entries(grades);
    entries.sort((a, b) => a[0].localeCompare(b[0]));

    for (let entry of entries) {
        let name = entry[0];
        let gradesArr = entry[1];
        let counter = 0;
        let total = 0;

        for (let i = 0; i < gradesArr.length; i++) {
            counter++;
            let curGrade = Number(gradesArr[i]);
            total += curGrade;
        }

        let avgGrade = total / counter;
        console.log(`${name}: ${avgGrade.toFixed(2)}`);
    }
}

schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']);