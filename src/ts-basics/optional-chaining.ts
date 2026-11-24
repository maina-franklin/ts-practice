type Customer = {
  birthday?: Date;
};

function getCustomer(id: number): Customer | null {
  return id === 0 ? null : { birthday: new Date() };
}

let missingCustomer = getCustomer(0);
console.log(missingCustomer?.birthday?.getFullYear());

let customer = getCustomer(1);
console.log(customer?.birthday?.getFullYear());