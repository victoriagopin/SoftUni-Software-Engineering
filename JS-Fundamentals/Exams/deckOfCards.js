function deckOfCards(arr) {
    let listOfCards = arr.shift().split(', ');
    let numberOfCommands = arr.shift();
    numberOfCommands = Number(numberOfCommands);

    while (numberOfCommands > 0) {
        let tokens = arr.shift().split(', ');
        let command = tokens.shift();

        if (command == 'Add') {
            let cardName = tokens[0];
            if (listOfCards.includes(cardName)) {
                console.log(`Card is already in the deck`);
            } else {
                listOfCards.push(cardName);
                console.log(`Card successfully added`);
            }
        } else if (command == 'Remove') {
            let cardName = tokens[0];
            if (listOfCards.includes(cardName)) {
                let indx = listOfCards.indexOf(cardName);
                listOfCards.splice(indx, 1);
                console.log(`Card successfully removed`);
            } else {
                console.log(`Card not found`);
            }
        } else if (command == 'Remove At') {
            let indx = Number(tokens[0]);
            if (indx < 0 || indx >= listOfCards.length) {
                console.log(`Index out of range`);
            } else {
                listOfCards.splice(indx, 1);
                console.log(`Card successfully removed`);
            }
        } else if (command == 'Insert') {
            let indx = Number(tokens[0]);
            let cardName = tokens[1];
            if (indx < 0 || indx >= listOfCards.length) {
                console.log(`Index out of range`);
            } else if (listOfCards.includes(cardName)) {
                console.log(`Card is already added`);
            } else {
                listOfCards.splice(indx, 0, cardName);
                console.log(`Card successfully added`);
            }
        }

        numberOfCommands--;
    }
    console.log(listOfCards.join(', '));

}

deckOfCards(["Jack of Spades, Ace of Clubs, Jack of Clubs", "2", "Insert, -1, Queen of Spades", "Remove At, 1"]);