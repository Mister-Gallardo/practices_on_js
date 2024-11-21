import { PI } from './constants.js';
import { E as e } from './constants.js';

// export default ...
// import ЛюбоеНазвание from '';

export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

export function multiply(a, b) {
    return a * b;
}

export function divide(a, b) {
    if (b === 0) throw new Error("Деление на ноль");
    return a / b;
}

export function areaOfCircle(radius) {
    return PI * radius * radius;
}

export function exponent(base) {
    return Math.pow(e, base);
}
