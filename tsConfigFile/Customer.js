"use strict";
class Customer {
    get fName() {
        return this._fName;
    }
    set fName(value) {
        this._fName = value;
    }
    constructor(firstName, lastName) {
        this.fName = firstName;
        this.lName = lastName;
    }
}
let myCustomer = new Customer("Jack", "Sparrow");
console.log(myCustomer.fName);
