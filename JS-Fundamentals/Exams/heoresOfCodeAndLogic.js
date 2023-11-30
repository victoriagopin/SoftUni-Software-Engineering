/*
On the first line of the standard input, you will receive an integer n – the number of heroes that you can choose for your party. On the next n lines, the heroes themselves will follow with their hit points and mana points separated by a single space in the following format: 
"{hero name} {HP} {MP}"
HP stands for hit points and MP for mana points
a hero can have a maximum of 100 HP and 200 MP
After you have successfully picked your heroes, you can start playing the game. You will be receiving different commands, each on a new line, separated by " – ", until the "End" command is given. 
There are several actions that the heroes can perform:
"CastSpell – {hero name} – {MP needed} – {spell name}"
If the hero has the required MP, he casts the spell, thus reducing his MP. Print this message: 
"{hero name} has successfully cast {spell name} and now has {mana points left} MP!"
If the hero is unable to cast the spell print:
"{hero name} does not have enough MP to cast {spell name}!"
"TakeDamage – {hero name} – {damage} – {attacker}"
Reduce the hero HP by the given damage amount. If the hero is still alive (his HP is greater than 0) print:
"{hero name} was hit for {damage} HP by {attacker} and now has {current HP} HP left!"
If the hero has died, remove him from your party and print:
"{hero name} has been killed by {attacker}!"
"Recharge – {hero name} – {amount}"
The hero increases his MP. If it brings the MP of the hero above the maximum value (200), MP is increased to 200. (the MP can't go over the maximum value).
 Print the following message:
"{hero name} recharged for {amount recovered} MP!"
"Heal – {hero name} – {amount}"
The hero increases his HP. If a command is given that would bring the HP of the hero above the maximum value (100), HP is increased to 100 (the HP can't go over the maximum value).
 Print the following message:
"{hero name} healed for {amount recovered} HP!"
Input
On the first line of the standard input, you will receive an integer n.
On the following n lines, the heroes themselves will follow with their hit points and mana points separated by a space in the following format.
You will be receiving different commands, each on a new line, separated by " – ", until the "End" command is given.
Output
Print all members of your party who are still alive, in the following format (their HP/MP need to be indented 2 spaces):
"{hero name}
  HP: {current HP}
  MP: {current MP}"
Constraints
The starting HP/MP of the heroes will be valid, 32-bit integers will never be negative or exceed the respective limits.
The HP/MP amounts in the commands will never be negative.
The hero names in the commands will always be valid members of your party. No need to check that explicitly.

*/

function heroesOfCode(arr) {

    let n = Number(arr.shift());
    let party = {};

    for (let i = 0; i < n; i++) {

        let tokens = arr.shift().split(' ');
        let heroName = tokens[0];
        let hp = Number(tokens[1]);
        let mp = Number(tokens[2]);
        let hero = {
            mp: mp,
            hp: hp
        }
        party[heroName] = hero;
    }

    let line = arr.shift();

    while (line != 'End') {
        let tokens = line.split(' - ');
        let command = tokens[0];

        if (command == 'CastSpell') {
            let heroName = tokens[1];
            let mpNeeded = Number(tokens[2]);
            let spellName = tokens[3];

            if (party[heroName].mp >= mpNeeded) {
                party[heroName].mp -= mpNeeded;
                console.log(`${heroName} has successfully cast ${spellName} and now has ${party[heroName].mp} MP!`);
            } else {
                console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
            }

        } else if (command == 'TakeDamage') {
            let heroName = tokens[1];
            let damage = Number(tokens[2]);
            let attacker = tokens[3];

            party[heroName].hp -= damage;

            if (party[heroName].hp > 0) {
                console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${party[heroName].hp} HP left!`);
            } else {
                delete party[heroName];
                console.log(`${heroName} has been killed by ${attacker}!`);
            }
        } else if (command == 'Recharge') {
            let heroName = tokens[1];
            let amount = Number(tokens[2]);

            let recharged = party[heroName].mp + amount <= 200 ? amount : 200 - party[heroName].mp;
            party[heroName].mp += recharged;

            console.log(`${heroName} recharged for ${recharged} MP!`);
        } else if (command == 'Heal') {
            let heroName = tokens[1];
            let amount = Number(tokens[2]);

            let recharged = party[heroName].hp + amount <= 100 ? amount : 100 - party[heroName].hp;
            party[heroName].hp += recharged;
            console.log(`${heroName} healed for ${recharged} HP!`);
        }
        line = arr.shift();
    }

    let entries = Object.entries(party);

    for (let entry of entries) {
        let hero = entry[0];
        let { mp, hp } = entry[1];

        console.log(hero);
        console.log(`  HP: ${hp}`);
        console.log(`  MP: ${mp}`);
    }

}

heroesOfCode([
    "4",
    "Adela 90 150",
    "SirMullich 70 40",
    "Ivor 1 111",
    "Tyris 94 61",
    "Heal - SirMullich - 50",
    "Recharge - Adela - 100",
    "CastSpell - Tyris - 1000 - Fireball",
    "TakeDamage - Tyris - 99 - Fireball",
    "TakeDamage - Ivor - 3 - Mosquito",
    "End"
]);