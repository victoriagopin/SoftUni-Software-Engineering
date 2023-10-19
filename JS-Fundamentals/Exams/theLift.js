function theLift(arr) {
    let maxCapaityPerCabin = 4;
    let peopleWaiting = Number(arr[0]);
    let cabins = arr[1].split(' ').map(Number);
    let peopleAdded = 0;

    for (let i = 0; i < cabins.length; i++) {
        let curCabin = cabins[i];



        for (let z = curCabin; z < maxCapaityPerCabin; z++) {
            if (peopleWaiting == 0) {
                break;
            }
            peopleWaiting--;
            peopleAdded++;
        }
        cabins[i] += peopleAdded;
        peopleAdded = 0;
    }

    let totalFullCabins = 0;
    for (let cabin of cabins) {
        if (cabin == maxCapaityPerCabin) {
            totalFullCabins++;
        }
    }

    if (totalFullCabins < cabins.length && peopleWaiting == 0) {
        console.log(`The lift has empty spots!`);
        console.log(cabins.join(' '));
    } else if (totalFullCabins == cabins.length && peopleWaiting == 0) {
        console.log(cabins.join(' '));
    }
    else {
        console.log(`There isn't enough space! ${peopleWaiting} people in a queue!`);
        console.log(cabins.join(' '));
    }
}

theLift([
    "16",
    "0 0 0 0"
]);