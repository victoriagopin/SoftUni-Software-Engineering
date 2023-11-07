// You are given an array of strings. Every odd string is representing a resource (e.g. Gold, Silver, Copper, and so on),
// and every even – quantity. Your task is to collect the resources and print them each on a new line.
// Print the resources and their quantities in the format:
// {resource} –> {quantity}
// The quantities inputs will be in the range [1 … 2 000 000 000].

function minerTask(arr) {
    let resources = {};

    for (let i = 0; i < arr.length; i += 2) {
        let resource = arr[i];
        let qty = Number(arr[i + 1]);

        if (resource in resources) {
            resources[resource] += qty;
        } else {
            resources[resource] = qty;
        }
    }
    let entries = Object.entries(resources);

    for (let [resource, qty] of entries) {
        console.log(`${resource} -> ${qty}`);
    }
}

minerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
]);