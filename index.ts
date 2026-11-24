let age: number = 20;
console.log(age);
let user: [number, string] = [1, "Mosh"];
console.log(user[0].toFixed(2));
console.log(user[1].toUpperCase());
function calculateTax(income: number, taxYear = 2022): number {
  if (taxYear < 2023) return income * 1.2;
  return income * 1.3;
}

console.log(calculateTax(10_000));
console.log(calculateTax(10_000, 2024));
type Employee = {
  readonly id: number;
  name?: string;
  retire: (date: Date) => void;
};

let employee: Employee = {
  id: 1,
  retire: (date: Date) => {
    console.log(date);
  },
};

console.log(employee.id);
employee.retire(new Date());
let anotherEmployee: Employee = {
  id: 2,
  name: "Sam",
  retire: (date: Date) => console.log(date),
};
console.log(anotherEmployee.name);
function kgToLbs(weight: number | string): number {
  if (typeof weight === "number") {
    return weight * 2.2;
  }
  return parseInt(weight) * 2.2;
}

console.log(kgToLbs(10));
console.log(kgToLbs("10kg"));
type Customer = {
  birthday?: Date;
};
function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(1);
console.log(customer.birthday.getFullYear());