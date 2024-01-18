function roadRadar(speed, area) {
    if (area == 'motorway') {
        if (speed <= 130) {
            console.log(`Driving ${speed} km/h in a 130 zone`);
        } else {
            let difference = speed - 130;
            if (difference <= 20) {
                let status = 'speeding'
                console.log(`The speed is ${difference} km/h faster than the allowed speed of 130 - ${status}`);
            } else if (difference <= 40) {
                let status = 'excessive speeding';
                console.log(`The speed is ${difference} km/h faster than the allowed speed of 130 - ${status}`);
            } else {
                let status = 'reckless driving';
                console.log(`The speed is ${difference} km/h faster than the allowed speed of 130 - ${status}`);
            }
        }
    } else if (area == 'interstate') {
        if (speed <= 90) {
            console.log(`Driving ${speed} km/h in a 90 zone`);
        } else {
            let difference = speed - 90;
            if (difference <= 20) {
                let status = 'speeding'
                console.log(`The speed is ${difference} km/h faster than the allowed speed of 90 - ${status}`);
            } else if (difference <= 40) {
                let status = 'excessive speeding';
                console.log(`The speed is ${difference} km/h faster than the allowed speed of 90 - ${status}`);
            } else {
                let status = 'reckless driving';
                console.log(`The speed is ${difference} km/h faster than the allowed speed of 90 - ${status}`);
            }
        }
    } else if (area == 'city') {
        if (speed <= 50) {
            console.log(`Driving ${speed} km/h in a 50 zone`);
        } else {
            let difference = speed - 50;
            if (difference <= 20) {
                let status = 'speeding'
                console.log(`The speed is ${difference} km/h faster than the allowed speed of 50 - ${status}`);
            } else if (difference <= 40) {
                let status = 'excessive speeding';
                console.log(`The speed is ${difference} km/h faster than the allowed speed of 50 - ${status}`);
            } else {
                let status = 'reckless driving';
                console.log(`The speed is ${difference} km/h faster than the allowed speed of 50 - ${status}`);
            }
        }
    } else if (area == 'residential') {
        if (speed <= 20) {
            console.log(`Driving ${speed} km/h in a 20 zone`);
        } else {
            let difference = speed - 20;
            if (difference <= 20) {
                let status = 'speeding'
                console.log(`The speed is ${difference} km/h faster than the allowed speed of 20 - ${status}`);
            } else if (difference <= 40) {
                let status = 'excessive speeding';
                console.log(`The speed is ${difference} km/h faster than the allowed speed of 20 - ${status}`);
            } else {
                let status = 'reckless driving';
                console.log(`The speed is ${difference} km/h faster than the allowed speed of 20 - ${status}`);
            }
        }
    }
}

roadRadar(200, 'motorway');