import { capitalize, reverseStr } from './script.js';

test('capitalize first letter of string', () => {
    expect(capitalize('word')).toBe('Word');
});

test('takes a string and reverse it', () => {
    expect(reverseStr('tan')).toBe('nat');
});