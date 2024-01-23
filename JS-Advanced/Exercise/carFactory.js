function carFactory(obj) {
    let car = {
        model: obj.model,
        engine: null,
        carriage: null,
        wheels: null
    }

    if (obj.power <= 90) {
        car.engine = {
            power: 90,
            volume: 1800
        }
    } else if (obj.power <= 120) {
        car.engine = {
            power: 120,
            volume: 2400
        }
    } else {
        car.engine = {
            power: 200,
            volume: 3500
        }
    }

    if (obj.carriage == 'hatchback') {
        car.carriage = {
            type: 'hatchback',
            color: obj.color
        }
    } else {
        car.carriage = {
            type: 'coupe',
            color: obj.color
        }
    }
    let wheelSize = obj.wheelsize % 2 == 0 ? obj.wheelsize - 1 : obj.wheelsize;
    car.wheels = new Array(4).fill(wheelSize);

    return car;
}

console.log(carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}))