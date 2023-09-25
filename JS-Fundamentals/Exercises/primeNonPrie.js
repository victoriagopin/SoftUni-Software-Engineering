function primeNumber(num) {
    nonPrime = false;
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            nonPrime = true;
        }


    }
    nonPrime ? console.log('false') : console.log('true');
}

primeNumber(81)