class Person {
    firstName;
    lastName;
    age;
    email;

    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastNamee = lastName;
        this.age = age;
        this.email = email;
    }

    toString() {
        retrun`${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
    }
}

let myPerson = new Person('Anna', 'Simspon', 22, 'anna@abv.bg');
console.log(myPerson);