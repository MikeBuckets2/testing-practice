import { capitalize, reverseStr, calculator } from './script.js';

test('capitalize first letter of string', () => {
    expect(capitalize('word')).toBe('Word');
});

test('takes a string and reverse it', () => {
    expect(reverseStr('tan')).toBe('nat');
});

test('adds two numbers', () => {
    expect(calculator.add(2, 3)).toBe(5);
});

test('subtracts two numbers', () => {
    expect(calculator.subtract(5, 2)).toBe(3);
});

test('multiplies two numbers', () => {
    expect(calculator.multiply(4, 3)).toBe(12);
});

test('divides two numbers', () => {
    expect(calculator.divide(10, 2)).toBe(5);
});