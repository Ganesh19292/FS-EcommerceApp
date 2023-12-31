"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
var Customer = /** @class */ (function () {
    function Customer(firstName, lastName) {
        this.fName = firstName;
        this.lName = lastName;
    }
    Object.defineProperty(Customer.prototype, "fName", {
        get: function () {
            return this._fName;
        },
        set: function (value) {
            this._fName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
exports.Customer = Customer;
