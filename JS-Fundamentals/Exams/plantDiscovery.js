/*
You have now returned from your world tour. On your way, you have discovered some new plants, and you want to gather some information about them and create an exhibition to see which plant is highest rated.
On the first line, you will receive a number n. On the next n lines, you will be given some information about the plants that you have discovered in the format: "{plant}<->{rarity}". Store that information because you will need it later. If you receive a plant more than once, update its rarity.
After that, until you receive the command "Exhibition", you will be given some of these commands:
"Rate: {plant} - {rating}" – add the given rating to the plant (store all ratings)
"Update: {plant} - {new_rarity}" – update the rarity of the plant with the new one
"Reset: {plant}" – remove all the ratings of the given plant
Note: If any given plant name is invalid, print "error"
After the command "Exhibition", print the information that you have about the plants in the following format:
"Plants for the exhibition:- {plant_name1}; Rarity: {rarity}; Rating: {average_rating}
- {plant_name2}; Rarity: {rarity}; Rating: {average_rating}…
- {plant_nameN}; Rarity: {rarity}; Rating: {average_rating}"
The average rating should be formatted to the second decimal place.
Input / Constraints
You will receive the input as described above.
JavaScript: you will receive a list of strings.
Output
Print the information about all plants as described above.
*/

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