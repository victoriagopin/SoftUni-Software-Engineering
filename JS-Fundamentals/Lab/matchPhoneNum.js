// Write a regular expression to match a valid phone number from Sofia. After you find all valid phones, print them on
// the console, separated by a comma and a space ", ".

function matchPhoneNum([phNums]) {
    let regex = /\+359([ -])2\1\d{3}\1\d{4}/g;

    let result = phNums.match(regex);
    console.log(result.join(', '));
}

matchPhoneNum(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'])