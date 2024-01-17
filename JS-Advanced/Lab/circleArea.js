function circleArea(r) {
    let type = typeof (r);

    if (type == 'number') {
        let area = Math.PI * (r * r);
        console.log(area.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${type}.`);
    }

}

circleArea(5);