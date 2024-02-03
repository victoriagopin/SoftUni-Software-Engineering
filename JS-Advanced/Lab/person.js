class Person {
    firstName;
    lastNmae;
    age;
    email;

    constructor(firstName, lastNmae, age, email) {
        this.firstName = firstName;
        this.lastNmae = lastNmae;
        this.age = age;
        this.email = email;
    }

    toString() {
        retrun`${this.firstName} ${this.lastNmae} (age: ${this.age}, email: ${this.email})`
    }
}

let myPerson = new Person('Anna', 'Simspon', 22, 'anna@abv.bg');
console.log(myPerson);