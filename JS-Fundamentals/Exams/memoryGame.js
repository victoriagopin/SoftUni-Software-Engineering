
// Write a program that recreates the Memory game.
// On the first line, you will receive a sequence of elements. Each element in the sequence will have a twin. Until the player receives "end" from the console, you will receive strings with two integers separated by a space, representing the indexes of elements in the sequence.
// If the player tries to cheat and enters two equal indexes or indexes which are out of bounds of the sequence, you should add two matching elements at the middle of the sequence in the following format:
// "-{number of moves until now}a" 
// Then print this message on the console:
// "Invalid input! Adding additional elements to the board"
// Input
// On the first line, you will receive a sequence of elements.
// On the following lines, you will receive integers until the command "end".
// Output
// Every time the player hit two matching elements, you should remove them from the sequence and print on the console the following message:
// "Congrats! You have found matching elements - {element}!"
// If the player hit two different elements, you should print on the console the following message:
// "Try again!"
// If the player hit all matching elements before he receives "end" from the console, you should print on the console the following message: 
// "You have won in {number of moves until now} turns!"
// If the player receives "end" before he hits all matching elements, you should print on the console the following message:
// "Sorry you lose :(
// {the current sequence's state}"
// Constraints
// All elements in the sequence will always have a matching element.
function memoryGame(arr) {
    let sequence = arr.shift().split(' ');
    let command = arr.pop();
    let moves = 0;

    for (let el of arr) {
        if (sequence.length === 0) {
            break;
        }
        let tokens = el.split(' ');
        let indx1 = tokens[0];
        let indx2 = tokens[1];

        if (indx1 < 0 || indx1 >= sequence.length || indx2 < 0 || indx2 >= sequence.length || indx1 === indx2) {
            moves++;
            let middle = Math.floor(sequence.length / 2);
            sequence.splice(middle, 0, `-${moves}a`);
            sequence.splice(middle, 0, `-${moves}a`);
            console.log(`Invalid input! Adding additional elements to the board`);
        } else {
            moves++;
            let el1 = sequence[indx1];
            let el2 = sequence[indx2];
            if (el1 === el2) {
                sequence = sequence.filter((_, index) => index !== Math.max(+indx1, +indx2));
                sequence = sequence.filter((_, index) => index !== Math.min(+indx1, +indx2));
                console.log(`Congrats! You have found matching elements - ${el1}!`);
            } else {
                console.log('Try again!');
            }
        }
    }

    if (sequence.length > 0) {
        console.log(`Sorry you lose :(`);
        console.log(sequence.join(' '));
    } else {
        console.log(`You have won in ${moves} turns!`);
    }
}

memoryGame(['a 2 4 a 2 4',
    '0 3',
    '0 2',
    '0 1',
    '0 1',
    'end']);