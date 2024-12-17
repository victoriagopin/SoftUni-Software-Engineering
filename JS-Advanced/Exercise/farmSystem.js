function farmSystem(input){
    const farmersNum = Number(input.shift());

    const farmers = {};

    for(let i = 0; i < farmersNum; i++){
        const row = input.shift();
        const [farmer, workArea, tasks] = row.split(' ');

        const duties = tasks.split(',');

        farmers[farmer] = {
            workArea,
            tasks: duties
        }
    }

    let command = input.shift();

    while(command !== 'End'){
        const row = command.split(' / ');
        const action = row.shift();
        
        if(action == 'Execute'){
            const farmerName = row.shift();
            const area = row.shift();
            const task = row.shift();

            if(farmers[farmerName].workArea != area || !farmers[farmerName].tasks.includes(task)){
                console.log(`${farmerName} cannot execute the task: ${task}.`);
            } else {
                console.log(`${farmerName} has executed the task: ${task}!`);
            }
        } else if(action == 'Change Area'){
            const farmerName = row.shift();
            const newWorkArea = row.shift();

            farmers[farmerName].workArea = newWorkArea;
            
            console.log(`${farmerName} has changed their work area to: ${newWorkArea}`);
        } else if(action == 'Learn Task'){
            const farmerName = row.shift();
            const newTask = row.shift();

            if(farmers[farmerName].tasks.includes(newTask)){
                console.log(`${farmerName} already knows how to perform ${newTask}.`);
            } else {
                farmers[farmerName].tasks.push(newTask);
                console.log(`${farmerName} has learned a new task: ${newTask}.`);
            }
        }

         command = input.shift();
    }

    Object.keys(farmers).map((farmer) => {
        console.log(`Farmer: ${farmer}, Area: ${farmers[farmer].workArea}, Tasks: ${farmers[farmer].tasks.sort().join(', ')}`);
    })
}

farmSystem([
    "3",
    "Alex apiary harvesting,honeycomb",
    "Emma barn milking,cleaning",
    "Chris garden planting,weeding",
    "Execute / Alex / apiary / harvesting",
    "Learn Task / Alex / beeswax",
    "Execute / Alex / apiary / beeswax",
    "Change Area / Emma / apiary",
    "Execute / Emma / apiary / milking",
    "Execute / Chris / garden / watering",
    "Learn Task / Chris / pruning",
    "Execute / Chris / garden / pruning",
    "End"
  ]);