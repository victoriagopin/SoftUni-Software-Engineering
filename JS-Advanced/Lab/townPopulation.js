function townPopulation(arr) {
    let towns = {};

    for (let el of arr) {
        let [town, population] = el.split(' <-> ');

        if (town in towns) {
            towns[town] += Number(population);
        } else {
            towns[town] = Number(population);
        }
    }

    let entries = Object.entries(towns);

    for (let entry of entries) {
        console.log(`${entry[0]} : ${entry[1]}`);
    }
}

townPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'])