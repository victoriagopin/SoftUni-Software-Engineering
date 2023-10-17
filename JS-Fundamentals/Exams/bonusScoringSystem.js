// Create a program that calculates bonus points for each student enrolled in a course. On the first line, you are going to receive 
// the number of students. On the second line, you will receive the total number of lectures in the course. The course has an additional bonus, which you will receive 
// on the third line. On the following lines, you will be receiving the count of attendances for each student.
// The bonus is calculated with the following formula:
// {total bonus} = {student attendances} / {course lectures} * (5 + {additional bonus})
// Find the student with the maximum bonus and print them, along with his attendance, in the following format:
// "Max Bonus: {max bonus points}."
// "The student has attended {student attendances} lectures."
// Round the bonus points at the end to the nearest larger number.
// Input / Constraints
// On the first line, you are going to receive the number of the students – an integer in the range [0…50].
// On the second line, you will receive the number of the lectures – an integer number in the range [0...50].
// On the third line, you will receive the additional bonus – an integer number in the range [0….100].
// On the following lines, you will be receiving the attendance of each student.
// There will never be students with equal bonuses.
// Output
// Print the maximum bonus points and the attendance of the given student, rounded to the nearest larger number, scored by a student in this course in the format described above.


function bonusScoringSystem(arr) {
    let convertToNums = arr.map(Number);
    let numOfStudents = convertToNums.shift();
    let numOfLectures = convertToNums.shift();
    let additionalBonus = convertToNums.shift();
    let curNum = 0;
    let maxBonus = 0;

    for (let i = 0; i < convertToNums.length; i++) {
        let attendances = convertToNums[i];
        if (attendances > curNum) {
            curNum = attendances;
        }
        totalBonus = attendances / numOfLectures * (5 + additionalBonus);

        if (totalBonus > maxBonus) {
            maxBonus = totalBonus;
        }

    }
    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
    console.log(`The student has attended ${curNum} lectures.`);

}

bonusScoringSystem([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
]);