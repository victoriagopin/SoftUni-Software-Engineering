// Write a function that collects and orders information about travel destinations.
// As input, you will receive an array of strings.
// Each string will consist of the following information with the format:
// "Country name > Town name > Travel cost"
// The Country name will be a string, the Town name will be a unique string, Travel cost will be a number.
// If you receive the same Town name twice, you should keep the cheapest offer. Have in mind that one Country may
// have several Towns to visit.
// After you finish the organizational part, you need to let Steven know which destination point to visit first. The order
// will be as follows: First sort Country names alphabetically and then sort by lowest Travel cost.

function travelTime(arr) {
    let travelDestinations = {};

    for (let el of arr) {
        let [countryName, townName, travelCost] = el.split(' > ');

        if (!travelDestinations.hasOwnProperty(countryName)) {
            travelDestinations[countryName] = { [townName]: travelCost }
        } else {
            if (travelDestinations[countryName].hasOwnProperty(townName)) {
                if (travelCost > travelDestinations[countryName][townName]) {
                    travelCost = travelDestinations[countryName][travelCost];
                }
            }

            travelDestinations[countryName][townName] = travelCost;
        }
    }

    let sortedDestinations = Object.entries(travelDestinations).sort((a, b) => a[0].localeCompare(b[0]));
    sortedDestinations.forEach(el => {
        let [countryName, townAndPrice] = el;
        let sortedTOwns = Object.entries(townAndPrice).sort((a, b) => a[1] - b[1]).map(a => `${a[0]} -> ${a[1]}`).join(' ');
        console.log(`${countryName} -> ${sortedTOwns}`);
    });

}

travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]);