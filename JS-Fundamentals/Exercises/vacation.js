function vacation(num, groupType, day) {
    let price = 0;
    if (groupType === 'Students') {
        switch (day) {
            case 'Friday':
                price = 8.45;
                break;
            case 'Saturday':
                price = 9.80;
                break;
            case 'Sunday':
                price = 10.46;
                break;
        }

    } else if (groupType === 'Business') {
        switch (day) {
            case 'Friday':
                price = 10.90;
                break;
            case 'Saturday':
                price = 15.60;
                break;
            case 'Sunday':
                price = 16;
                break;
        }
    } else if (groupType === 'Regular') {
        switch (day) {
            case 'Friday':
                price = 15;
                break;
            case 'Saturday':
                price = 20;
                break;
            case 'Sunday':
                price = 22.50;
                break;
        }
    }
    let totalPrice = price * num;
    if (groupType === 'Students' && num >= 30) {
        totalPrice *= 0.85;
    } else if (groupType === 'Business' && num >= 100) {
        totalPrice = (num - 10) * price;
    } else if (groupType === 'Regular' && num > 10 && num < 20) {
        totalPrice *= 0.95;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

vacation(40,
    "Regular",
    "Saturday");