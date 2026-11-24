function calculateTax(income: number, taxYear = 2022): number {
  if (taxYear < 2023) return income * 1.2;
  return income * 1.3;
}

console.log(calculateTax(10_000));
console.log(calculateTax(10_000, 2024));