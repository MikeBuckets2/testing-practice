export function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

export function reverseStr(str) {
    return str.split('').reverse().join('');
};

export const calculator = {
    add(a, b) {
        return a + b;
  },
    subtract(a, b) {
        return a - b;
  },
    multiply(a, b) {
        return a * b;
  },
    divide(a, b) {
        return a / b;
  },
};

export function caesarCipher(string, shift) {
    return string
        .split('')
        .map(char => {
        if (!char.match(/[a-z]/i)) return char;

        const isUpper = char === char.toUpperCase();
        const base = isUpper ? 65 : 97;

        const code =
            ((char.charCodeAt(0) - base + shift) % 26) + base;

        return String.fromCharCode(code);
        })
        .join('');
};