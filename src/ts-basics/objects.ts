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

let anotherEmployee: Employee = {
  id: 2,
  name: "Sam",
  retire: (date: Date) => console.log(date),
};

console.log(employee.id);
console.log(anotherEmployee.name);
employee.retire(new Date(2020, 11, 31));