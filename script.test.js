import { capitalize, reverseStr, calculator, caesarCipher, analyzeArray } from './script.js';

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

test('shifts letters by the given factor', () => {
    expect(caesarCipher('abc', 1)).toBe('bcd');
});

test('wraps from z to a', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('preserves letter case', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});

test('ignores punctuation and spaces', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

test('analyzes an array of numbers', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6,
    });
});