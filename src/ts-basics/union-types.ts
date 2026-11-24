function kgToLbs(weight: number | string): number {
  if (typeof weight === "number") {
    return weight * 2.2;
  }

  const match = weight.trim().match(/^(\d+(?:\.\d+)?)\s*(?:kg)?$/i);
  if (!match) {
    throw new Error(`Invalid weight: "${weight}". Use a number, optionally followed by "kg".`);
  }

  return parseFloat(match[1]) * 2.2;
}

console.log(kgToLbs(10));
console.log(kgToLbs("10kg"));
console.log(kgToLbs("10.5kg"));

try {
  kgToLbs("10lbs");
} catch (error) {
  console.log((error as Error).message);
}