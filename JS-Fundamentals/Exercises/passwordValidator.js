// Write a function that checks if a given password is valid. Password validations
// are:
// The length should be 6 - 10 characters (inclusive)
// It should consist only of letters and digits
// It should have at least 2 digits 
// If a password is a valid print: "Password is valid".
// If it is NOT valid, for every unfulfilled rule print a message:
// "Password must be between 6 and 10 characters"
// "Password must consist only of letters and digits"
// "Password must have at least 2 digits"


function passwordValidator(pass) {

    let passLength = checkLength(pass);
    let passSymbols = checkSymbols(pass);
    let passDigits = checkNumOfDigits(pass);

    if (passLength && passSymbols && passDigits) {
        console.log("Password is valid");
    }

    function checkLength(str) {
        let strLength = str.length;
        if (strLength < 6 || strLength > 10) {
            console.log("Password must be between 6 and 10 characters");
        } else {
            return true;
        }
    }

    function checkSymbols(word) {
        let isTrue = true;
        for (let i = 0; i < word.length; i++) {
            let curDigit = word[i];
            let curSymbol = curDigit.charCodeAt();

            if (
                !((curSymbol > 47 && curSymbol < 58 ||
                    curSymbol > 64 && curSymbol < 91 ||
                    curSymbol > 96 && curSymbol < 124))
            ) {
                isTrue = false;
                console.log("Password must consist only of letters and digits");
                break;
            }
        }
        if (isTrue) {
            return true;
        }
    }

    function checkNumOfDigits(pass) {
        let digits = 0;

        for (let i = 0; i < pass.length; i++) {
            let curDigit = pass[i];
            let curDigitAsAscii = curDigit.charCodeAt();

            if (curDigitAsAscii > 47 && curDigitAsAscii < 58) {
                digits++;
            }

        }
        if (digits < 2) {
            console.log("Password must have at least 2 digits");
        } else {
            return true;
        }

    }
}

passwordValidator('Pa$s$s');