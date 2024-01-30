function solution() {
    let ingridients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    let recepies = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    }


    return function (str) {
        let tokens = str.split(' ');
        let command = tokens[0];
        let qty = Number(tokens[2]);

        switch (command) {
            case 'restock':
                let ingridient = tokens[1];

                return restock(ingridient, qty);
                break;
            case 'prepare':
                let recipe = tokens[1];
                return prepare(recipe, qty);
                break;
            case 'report': return print();
                break;
        }


        function print() {
            let result = [];
            let entries = Object.entries(ingridients);
            for (let [ingridient, qty] of entries) {
                let x = `${ingridient}=${qty}`
                result.push(x);
            }
            return result.join(' ');
        }

        function restock(ingridient, qty) {
            ingridients[ingridient] += qty;
            return 'Success'
        }

        function prepare(recipe, qty) {
            let prepareIngridients = {};
            let entries = Object.entries(recepies[recipe]);
            for (let [ingridient, qtyNeeded] of entries) {
                let needed = qty * Number(qtyNeeded);
                if (ingridients[ingridient] < needed) {
                    return `Error: not enough ${ingridient} in stock`;
                }

                prepareIngridients[ingridient] = needed;
            }

            let newEntries = Object.entries(prepareIngridients);
            for (let [key, value] of newEntries) {
                ingridients[key] -= value;
            }
            return 'Success';
        }
    };
}

let manager = solution();
console.log(manager("restock flavour 50")); // Success 
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock
console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare apple 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager("report"));