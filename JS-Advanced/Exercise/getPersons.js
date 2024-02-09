function getPersons() {
    class Person {
        constructor(firstName = '', lastName = '', age = 0, email = '') {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = this.age == 'undefined' ? '' : this.age;
            this.email = email;
        }

        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
        }
    }

    return [
        new Person('Anna', 'Simpson', 22, 'anna@abv.bg'),
        new Person('John', 'Smith', 23),
        new Person(), // This will use the default values in the constructor
        new Person('Victor', 'Georgiev', 22, 'victor@abv.bg')
    ];
}

let myPersonsArray = getPersons();
console.log(myPersonsArray);