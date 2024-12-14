function scienceExperimentation(input){
    const chemicalsAvailable = Number(input.shift());

    const chemicals = {};

    for(let i = 0; i < chemicalsAvailable; i++){
        const element = input.shift();

        const [chemical, quantity] = element.split(' # ');

        chemicals[chemical] = {
            quantity : Number(quantity),
        };
    }

    let command = input.shift();

    while(command !== 'End'){
        const row = command.split(' # ');
        const action = row.shift();

        if(action == 'Mix'){
            let chemical1 = row.shift();
            let chemical2 = row.shift();
            let amount = Number(row.shift());

            if(chemicals[chemical1].quantity >= amount && chemicals[chemical2].quantity >= amount){
                chemicals[chemical1].quantity -= amount;
                chemicals[chemical2].quantity -= amount;
                console.log(`${chemical1} and ${chemical2} have been mixed. ${amount} units of each were used.`);
            } else if(chemicals[chemical1].quantity < amount || chemicals[chemical2].quantity){
                console.log(`Insufficient quantity of ${chemical1}/${chemical2} to mix.`);
            } 
        } else if(action == 'Replenish'){
            let chemical = row.shift();
            let amount = Number(row.shift());

            if(!chemicals[chemical]){
                console.log(`The Chemical ${chemical} is not available in the lab.`);
            } else {
                const startingCapacity = chemicals[chemical].quantity;
                const newCapacity = Math.min(chemicals[chemical].quantity + amount, 500);
                chemicals[chemical].quantity = newCapacity;
                const increased = newCapacity - startingCapacity;
                if(newCapacity == 500){
                console.log(`${chemical} quantity increased by ${increased} units, reaching maximum capacity of 500 units!`);
                } else {
                    console.log(`${chemical} quantity increased by ${increased} units!`);
                }
            }
        } else if(action == 'Add Formula'){
            const chemical = row.shift();
            const formula = row.shift();

            if(!chemicals[chemical]){
                console.log(`The Chemical ${chemical} is not available in the lab.`);
            } else {
                chemicals[chemical].formula = formula;
                console.log(`${chemical} has been assigned the formula ${formula}.`);
            }

        }


         command = input.shift();
    }

    Object.keys(chemicals).map((chemical) => {
        if(chemicals[chemical].formula){
            console.log(`Chemical: ${chemical}, Quantity: ${chemicals[chemical].quantity}, Formula: ${chemicals[chemical].formula}`);
        } else {
            console.log(`Chemical: ${chemical}, Quantity: ${chemicals[chemical].quantity}`);
        }
    })

}

scienceExperimentation([ '3', 'Sodium # 300', 'Chlorine # 100', 'Hydrogen # 200', 'Mix # Sodium # Chlorine # 200', 'Replenish # Sodium # 250', 'Add Formula # Sulfuric Acid # H2SO4', 'Add Formula # Sodium # Na', 'Mix # Hydrogen # Chlorine # 50', 'End']);