var Customer = /** @class */ (function () {
    function Customer(firstName, lastName) {
        this.fName = firstName;
        this.lName = lastName;
    }
    return Customer;
}());
var myCustomer = new Customer("Jack", "Sparrow");
console.log(myCustomer.fName);
