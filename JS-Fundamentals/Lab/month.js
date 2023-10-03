// Write a program, that takes an integer as a parameter and prints the corresponding month. If the number is more
// than 12 or less than 1 print "Error!"

function month(num) {
    if (num == 1) {
        console.log('January');
    } else if (num == 2) {
        console.log('February');
    } else if (num == 3) {
        console.log('March');
    } else if (num == 4) {
        console.log('April');
    } else if (num == 5) {
        console.log('May');
    } else if (num == 6) {
        console.log('June');
    } else if (num == 7) {
        console.log('July');
    } else if (num == 8) {
        console.log('August');
    } else if (num == 9) {
        console.log('September');
    } else if (num == 10) {
        console.log('October');
    } else if (num == 11) {
        console.log('November');
    } else if (num == 12) {
        console.log('December');
    } else {
        console.log('Error!');
    }
}

month(34);