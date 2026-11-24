"use strict";
let age = 20;
console.log(age);
let user = [1, "Mosh"];
console.log(user[0].toFixed(2));
console.log(user[1].toUpperCase());
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2023)
        return income * 1.2;
    return income * 1.3;
}
console.log(calculateTax(10000));
console.log(calculateTax(10000, 2024));
let employee = {
    id: 1,
    retire: (date) => {
        console.log(date);
    },
};
console.log(employee.id);
employee.retire(new Date());
let anotherEmployee = {
    id: 2,
    name: "Sam",
    retire: (date) => console.log(date),
};
console.log(anotherEmployee.name);
function kgToLbs(weight) {
    if (typeof weight === "number") {
        return weight * 2.2;
    }
    return parseInt(weight) * 2.2;
}
console.log(kgToLbs(10));
console.log(kgToLbs("10kg"));
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log(customer?.birthday?.getFullYear());
