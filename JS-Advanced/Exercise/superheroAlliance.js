function superheroAlliance(n){
    const superheroNumber = Number(n.shift());
    const superheroes = {};

    for(let i = 0; i < superheroNumber; i++){
        const superhero = n.shift();
        const [name, superpowers, energyLevelString] = superhero.split('-');
       
        superheroes[name] = {
            superpowers : superpowers.split(','),
            energyLevel : Number(energyLevelString)
        }
    }

    let action = n.shift();

    while(action !== "Evil Defeated!"){
        const row = action.split(' * ');
        const command = row.shift();
        const name = row.shift();

        if(command == 'Use Power'){
            const superpower = row.shift();
            const energyRequired = Number(row.shift());

            if(superheroes[name].superpowers.includes(superpower) && superheroes[name].energyLevel >= energyRequired){
                const currEnergy = superheroes[name].energyLevel - energyRequired;
                superheroes[name].energyLevel = superheroes[name].energyLevel - energyRequired;
                console.log(`${name} has used ${superpower} and now has ${currEnergy} energy!`);
            } else {
                console.log(`${name} is unable to use ${superpower} or lacks energy!`);
            }  
        } else if(command == 'Train'){
            const trainingEnergy = Number(row.shift());

            if(superheroes[name].energyLevel == 100){
                console.log(`${name} is already at full energy!`);
            } else {
                const startingEnergy = superheroes[name].energyLevel;
                const newEnergy = Math.min(superheroes[name].energyLevel + trainingEnergy, 100);
                superheroes[name].energyLevel = newEnergy;
                console.log(`${name} has trained and gained ${newEnergy - startingEnergy} energy!`);
            }
        } else if(command == 'Learn'){
            const newPower = row.shift();

            if(superheroes[name].superpowers.includes(newPower)){
                console.log(`${name} already knows ${newPower}.`);
            } else {
                superheroes[name].superpowers.push(newPower);
                console.log(`${name} has learned ${newPower}!`);
            }
        }

        action = n.shift();        
    }

    Object.keys(superheroes).map((heroName) => {
        console.log(`Superhero: ${heroName}`);
        console.log(`- Superpowers: ${superheroes[heroName].superpowers.join(', ')}`);
        console.log(`- Energy: ${superheroes[heroName].energyLevel}`);
    })
}

superheroAlliance ([
         "2",
    "Iron Man-Repulsor Beams,Flight-100",
    "Thor-Lightning Strike,Hammer Throw-50",
    "Train * Thor * 20",
    "Learn * Thor * Hammer Throw",
    "Use Power * Iron Man * Repulsor Beams * 30",
    "Evil Defeated!"

    ])
    