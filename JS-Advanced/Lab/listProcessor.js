function listProcessor(arr) {

    let result = [];

    let funcs = {
        add: function (char) {
            result.push(char);
            return result;
        },
        remove: function (char) {

            while (result.includes(char)) {
                let indx = result.indexOf(char);
                result.splice(indx, 1);
            }
            return result;
        },
        print: function () {
            console.log(result.join(','));
        }
    };

    for (let el of arr) {
        let [command, char] = el.split(' ');
        if (command !== 'print') {
            funcs[command](char);
        } else {
            funcs[command]();
        }

    }

    return funcs;

}

listProcessor(['add pesho', 'add george', 'add peter', 'add peter', 'remove peter', 'print']);