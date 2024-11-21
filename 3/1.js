// Создайте функцию, которая принимает несколько аргументов, выполняет над
// ними математическую операцию и возвращает ее результат. Реализуйте в ней
// обработку возможных ошибок с помощью конструкции try…catch, при
// получении ошибки выведите в консоль информацию о ней, приведите пример
// использования. Создайте собственный класс ошибки, приведите пример
// использования.

// Определяем собственный класс ошибки
class MathError extends Error {
    constructor(message) {
        super(message);
        this.name = "MathError";
    }
}

// Функция для выполнения математической операции
function calculate(operation, ...args) {
    try {
        if (args.length === 0) throw new MathError("Нет аргументов для операции");

        switch (operation) {
            case 'add':
                return args.reduce((acc, val) => acc + val, 0);
            case 'subtract':
                return args.reduce((acc, val) => acc - val);
            case 'multiply':
                return args.reduce((acc, val) => acc * val, 1);
            case 'divide':
                return args.reduce((acc, val) => {
                    if (val === 0) throw new MathError("Деление на ноль");
                    return acc / val;
                });
            default:
                throw new MathError("Неизвестная операция");
        }
    } catch (error) {
        console.error(`${error.name}: ${error.message}`);
    }
}

// Пример использования
console.log(calculate('add', 1, 2, 3)); // 6
console.log(calculate('divide', 10, 0)); // Ошибка: Деление на ноль
