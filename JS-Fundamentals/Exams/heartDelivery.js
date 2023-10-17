function heartDelivery(arr) {
    let neighbourhood = arr.shift().split('@');

    for (let el of arr) {
        let tokens = el.split(' ');
        let command = tokens[0];
        let jumpLength = Number(tokens[2]);

        if (command == 'Jump') {

        }

    }

}

heartDelivery(["10@10@10@2",
    "Jump 1",
    "Jump 2",
    "Love!"])
