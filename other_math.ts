export function power(base: number, exponent: number): number {
  return Math.pow(base, exponent);
}

export function modulus(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Cannot calculate modulus with zero divisor.");
  }
  return a % b;
}

export function average(numbers: number[]): number {
  if (numbers.length === 0) {
    return 0;
  }
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
}

export function factorial(n: number): number {
  if (n < 0) {
    throw new Error("Factorial is not defined for negative numbers.");
  }
  if (n === 0) {
    return 1;
  }
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}