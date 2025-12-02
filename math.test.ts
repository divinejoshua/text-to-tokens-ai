import { add, subtract, multiply, divide } from './math.ts';
import assert from 'assert';

function test(name: string, fn: () => void) {
  try {
    fn();
    console.log(`✓ ${name}`);
  } catch (error: any) {
    console.error(`✗ ${name}`);
    console.error(error.message);
    process.exit(1);
  }
}

console.log('Running math.ts tests...');

test('add function should correctly add two numbers', () => {
  assert.strictEqual(add(1, 2), 3, 'add(1, 2) should be 3');
  assert.strictEqual(add(-1, 1), 0, 'add(-1, 1) should be 0');
  assert.strictEqual(add(0, 0), 0, 'add(0, 0) should be 0');
  assert.strictEqual(add(1.5, 2.5), 4, 'add(1.5, 2.5) should be 4');
});

test('subtract function should correctly subtract two numbers', () => {
  assert.strictEqual(subtract(5, 3), 2, 'subtract(5, 3) should be 2');
  assert.strictEqual(subtract(3, 5), -2, 'subtract(3, 5) should be -2');
  assert.strictEqual(subtract(0, 0), 0, 'subtract(0, 0) should be 0');
  assert.strictEqual(subtract(5.5, 2.5), 3, 'subtract(5.5, 2.5) should be 3');
});

test('multiply function should correctly multiply two numbers', () => {
  assert.strictEqual(multiply(2, 3), 6, 'multiply(2, 3) should be 6');
  assert.strictEqual(multiply(-2, 3), -6, 'multiply(-2, 3) should be -6');
  assert.strictEqual(multiply(0, 5), 0, 'multiply(0, 5) should be 0');
  assert.strictEqual(multiply(2.5, 2), 5, 'multiply(2.5, 2) should be 5');
});

test('divide function should correctly divide two numbers', () => {
  assert.strictEqual(divide(6, 3), 2, 'divide(6, 3) should be 2');
  assert.strictEqual(divide(5, 2), 2.5, 'divide(5, 2) should be 2.5');
  assert.strictEqual(divide(0, 5), 0, 'divide(0, 5) should be 0');
});

test('divide function should throw an error when dividing by zero', () => {
  let errorThrown = false;
  try {
    divide(1, 0);
  } catch (e: any) {
    errorThrown = true;
    assert.strictEqual(e.message, 'Division by zero is not allowed.', 'Error message should be "Division by zero is not allowed."');
  }
  assert.ok(errorThrown, 'Should throw an error when dividing by zero');
});

console.log('All math.ts tests passed!');
