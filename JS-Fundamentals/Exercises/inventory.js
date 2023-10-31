// Create a function, which creates a register for heroes, with their names, level, and items (if they have such).
// The input comes as an array of strings. Each element holds data for a hero, in the following format:
// "{heroName} / {heroLevel} / {item1}, {item2}, {item3}..."
// You must store the data about every hero. The name is a string, a level is a number and the items are all strings.
// The output is all of the data for all the heroes you’ve stored sorted ascending by level. The data must be in the
// following format for each hero:
// Hero: {heroName}
// level => {heroLevel}
// Items => {item1}, {item2}, {item3}

function inventory(arr) {
    let heroes = [];

    for (let curInput of arr) {
        let tokens = curInput.split(' / ');
        let heroName = tokens[0];
        let level = Number(tokens[1]);
        let items = tokens[2];

        let heroObj = {
            Hero: heroName,
            level: level,
            items: items
        }

        heroes.push(heroObj);
    }

    heroes.sort((a, b) => a.level - b.level)

    for (let hero of heroes) {
        console.log(`Hero: ${hero.Hero}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }

}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);