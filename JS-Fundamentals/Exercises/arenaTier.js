// Pesho is a pro gladiator, he is struggling to become master of the Arena.
// You will receive several input lines in one of the following formats:
// "{gladiator} -> {technique} -> {skill}"
// "{gladiator} vs {gladiator}"
// The gladiator and technique are strings, the given skill will be an integer number. You need to keep track of
// every gladiator.
// When you receive a gladiator and his technique and skill, add him to the gladiator pool, if he isn't present, else add
// his technique or update his skill, only if the current technical skill is lower than the new value.
// If you receive "{gladiator} vs {gladiator}" and both gladiators exist in the tier, they duel with the following rules:
// Compare their techniques, if they got at least one in common, the gladiator with better total skill points wins and
// the other is demoted from the tier -> remove him.
// If they don't have techniques in common, the duel isn't happening and both continue in the Season.
// You should end your program when you receive the command "Ave Cesar".At that point, you should print the
// gladiators, ordered by total skill in descending order, then ordered by name in ascending order.Foreach gladiator
// prints their technique and skill ordered descending, then ordered by technique name in ascending order.
//     Input / Constraints
// You will receive an array of strings as a parameter to your solution.
// • The input comes in the form of commands in one of the formats specified above.
// • Gladiator and technique will always be one - word string, containing no whitespaces.
// • Skill will be an integer in the range[0, 1000].
// • There will be no invalid input lines.
// • The program ends when you receive the command "Ave Cesar".
//     Output
// • The output format for each gladiator is:
//     "{gladiator}: {totalSkill} skill"
// "- {technique} <!> {skill}"

function arenaTier(input) {
    let arena = {};

    while (input[0] != 'Ave Cesar') {
        let line = input.shift();
        let tokens = line.split(' -> ');

        if (tokens.length == 3) {
            let name = tokens[0];
            let tech = tokens[1];
            let skill = Number(tokens[2]);

            if (arena.hasOwnProperty(name) == false) {
                arena[name] = {};
            }

            let gladiator = arena[name];

            if (gladiator.hasOwnProperty(tech) == false || gladiator[tech] < skill) {
                gladiator[tech] = skill;
            }
        } else {
            let [nameA, nameB] = line.split(' vs ');

            let a = arena[nameA];
            let b = arena[nameB];

            if (!a && !b) {
                continue;
            }

            let techsA = Object.keys(a);
            let techsB = Object.keys(b);
            let hasMatch = false;

            for (let tech of techsA) {
                if (techsB.includes(tech)) {
                    hasMatch = true;
                }
            }

            if (!hasMatch) {
                continue;
            }

            let totalA = 0;
            let totalB = 0;

            for (let skill of Object.values(techsA)) {
                totalA += skill;
            }
            for (let skill of Object.values(techsB)) {
                totalB += skill;
            }

            if (totalA > totalB) {
                delete arena[nameB];
            } else {
                delete arena[nameA];
            }

        }
    }
    let result = Object.entries(arena).sort(compareSkill);

    for (let [name, techs] of result) {

        let total = 0;

        for (let skill of Object.values(techs)) {
            total += skill;
        }

        console.log(`${name}: ${total} skill`);

        let sortedTechs = Object.entries(techs).sort(compareTech);
        for (let [tech, skill] of sortedTechs) {
            console.log(`- ${tech} <!> ${skill}`);
        }
    }

    function compareSkill(a, b) {
        let totalA = 0;
        let totalB = 0;

        for (let skill of Object.values(a[1])) {
            totalA += skill;
        }
        for (let skill of Object.values(b[1])) {
            totalB += skill;
        }

        return (totalB - totalA) || a[0].localeCompare(b[0]);
    }

    function compareTech(a, b) {
        return b[1] - a[1] || a[0].localeCompare(b[0]);
    }

}
arenaTier([
    'Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 300',
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 250',
    'Ave Cesar'
])