function filterEmployees(data, critirea) {
    let arrOfObj = JSON.parse(data);
    let [key, value] = critirea.split('-');
    let result = [];

    for (let el of arrOfObj) {
        if (key in el) {
            let entries = Object.entries(el);
            for (let [curKey, val] of entries) {
                if (curKey == key && val == value) {
                    let firstName = el['first_name'];
                    let lastName = el['last_name'];
                    let email = el['email'];
                    result.push(firstName, lastName, email);
                }
            }

        }
    }
    let counter = 0;
    for (let i = 0; i < result.length; i += 3) {
        console.log(`${counter}. ${result[i]} ${result[i + 1]} - ${result[i + 2]}`);
        counter++
    }
}

filterEmployees(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
    'last_name-Johnson')