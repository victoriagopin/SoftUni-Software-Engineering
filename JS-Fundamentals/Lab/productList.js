//You will receive an array of products. Print a numbered array of all the products ordered by name.

function productList(arr) {
    let sorted = arr.sort();

    for (let i = 1; i <= arr.length; i++) {
        curElement = arr[i - 1];
        console.log(`${i}.${curElement}`);
    }
}

productList(['Potatoes', 'Tomatoes', 'Onions',
    'Apples'])