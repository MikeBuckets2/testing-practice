import { capitalize } from './script.js';

test('capitalize first letter of string', () => {
    expect(capitalize('word')).toBe('Word');
})