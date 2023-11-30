/*
Until the "Sail" command is given, you will be receiving:
You and your crew have targeted cities, with their population and gold, separated by "||".
If you receive a city that has already been received, you have to increase the population and gold with the given values.
After the "Sail" command, you will start receiving lines of text representing events until the "End" command is given. 
Events will be in the following format:
"Plunder=>{town}=>{people}=>{gold}"
You have successfully attacked and plundered the town, killing the given number of people and stealing the respective amount of gold. 
For every town you attack print this message: "{town} plundered! {gold} gold stolen, {people} citizens killed."
If any of those two values (population or gold) reaches zero, the town is disbanded.
You need to remove it from your collection of targeted cities and print the following message: "{town} has been wiped off the map!"
There will be no case of receiving more people or gold than there is in the city.
"Prosper=>{town}=>{gold}"
There has been dramatic economic growth in the given city, increasing its treasury by the given amount of gold.
The gold amount can be a negative number, so be careful. If a negative amount of gold is given, print: "Gold added cannot be a negative number!" and ignore the command.
If the given gold is a valid amount, increase the town's gold reserves by the respective amount and print the following message: 
"{gold added} gold added to the city treasury. {town} now has {total gold} gold."
Input
On the first lines, until the "Sail" command, you will be receiving strings representing the cities with their gold and population, separated by "||".
On the following lines, until the "End" command, you will be receiving strings representing the actions described above, separated by "=>".
Output
After receiving the "End" command, if there are any existing settlements on your list of targets, you need to print all of them, in the following format:
"Ahoy, Captain! There are {count} wealthy settlements to go to:
{town1} -> Population: {people} citizens, Gold: {gold} kg
{town2} -> Population: {people} citizens, Gold: {gold} kg
   …
{town…n} -> Population: {people} citizens, Gold: {gold} kg"
If there are no settlements left to plunder, print:
"Ahoy, Captain! All targets have been plundered and destroyed!"
Constraints
The initial population and gold of the settlements will be valid 32-bit integers, never negative, or exceed the respective limits.
The town names in the events will always be valid towns that should be on your list.

*/

function pirates(arr) {

    let line = arr.shift();
    let cities = {};

    while (line != 'Sail') {
        let tokens = line.split('||');
        let cityName = tokens[0];
        let population = Number(tokens[1]);
        let gold = Number(tokens[2]);

        let city = {
            population: population,
            gold: gold
        }

        if (cityName in cities) {
            cities[cityName].population += population;
            cities[cityName].gold += gold;

        } else {
            cities[cityName] = city;
        }
        line = arr.shift();
    }

    let command = arr.shift();

    while (command != 'End') {
        let tokens = command.split('=>');
        let action = tokens[0];

        if (action == 'Plunder') {
            let town = tokens[1];
            let peopleKilled = Number(tokens[2]);
            let goldStolen = Number(tokens[3]);

            cities[town].population -= peopleKilled;
            cities[town].gold -= goldStolen;

            if (cities[town].population <= 0 || cities[town].gold <= 0) {
                console.log(`${town} plundered! ${goldStolen} gold stolen, ${peopleKilled} citizens killed.`);
                console.log(`${town} has been wiped off the map!`);
                delete cities[town];


            } else {
                console.log(`${town} plundered! ${goldStolen} gold stolen, ${peopleKilled} citizens killed.`);
            }
        } else if (action == 'Prosper') {
            let town = tokens[1];
            let goldIncreased = Number(tokens[2]);

            if (goldIncreased < 0) {
                console.log(`Gold added cannot be a negative number!`);
            } else {
                cities[town].gold += goldIncreased;
                console.log(`${goldIncreased} gold added to the city treasury. ${town} now has ${cities[town].gold} gold.`);
            }
        }

        command = arr.shift();
    }
    let entries = Object.entries(cities);
    console.log(`Ahoy, Captain! There are ${entries.length} wealthy settlements to go to:`);

    for (let entry of entries) {
        let town = entry[0];
        let { population, gold } = entry[1];

        console.log(`${town} -> Population: ${population} citizens, Gold: ${gold} kg`);
    }
}

pirates(["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"])