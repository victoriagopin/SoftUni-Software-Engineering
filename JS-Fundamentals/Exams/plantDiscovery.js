function plantDiscovery(arr) {
    let n = Number(arr.shift());

    let plants = {};

    for (let i = 0; i < n; i++) {
        let tokens = arr.shift().split('<->');

        let plantName = tokens[0];
        let rarity = Number(tokens[1]);

        let plant = {
            rarity: rarity,
            rating: 0,
            ratingsCount: 0
        }

        plants[plantName] = plant;
    }

    let line = arr.shift();

    while (line != 'Exhibition') {
        let tokens = line.split(': ');
        let command = tokens[0];

        if (command == 'Rate') {
            let [plant, rating] = tokens[1].split(' - ');


            if (plant in plants) {
                plants[plant].rating += Number(rating);
                plants[plant].ratingsCount++;

            } else {
                console.log('error');
            }

        } else if (command == 'Update') {
            let [plant, newRarity] = tokens[1].split(' - ');

            if (plant in plants) {
                plants[plant].rarity = Number(newRarity);
            } else {
                console.log('error');
            }

        } else if (command == 'Reset') {
            let plant = tokens[1];

            if (plant in plants) {
                plants[plant].rating = 0;
                plants[plant].ratingsCount = 0;
            } else {
                console.log('error');
            }

        }

        line = arr.shift();
    }

    let entries = Object.entries(plants);

    console.log(`Plants for the exhibition:`);
    for (let entry of entries) {
        let plantName = entry[0];
        let { rarity, rating, ratingsCount } = entry[1];
        let avgRating = ratingsCount > 0 ? Number(rating) / Number(ratingsCount) : 0;
        console.log(`- ${plantName}; Rarity: ${rarity}; Rating: ${avgRating.toFixed(2)}`);
    }
}

plantDiscovery((["2",
    "Candelabra<->10",
    "Oahu<->10",
    "Rate: Oahu - 7",
    "Rate: Candelabra - 6",
    "Exhibition"]));