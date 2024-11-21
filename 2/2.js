// Создайте произвольную строку, выведите в консоль ее длину, первый и
// последний символы. Проверьте, начинается ли строка с foo, заканчивается ли
// на bar, содержит ли она некоторую подстроку.

// Создание произвольной строки
let myString = "foobar";

// Вывод длины строки, первого и последнего символов
console.log("Длина строки:", myString.length);
console.log("Первый символ:", myString.charAt(0));
console.log("Последний символ:", myString.charAt(myString.length - 1));

// Проверка условий
console.log("Начинается с 'foo':", myString.startsWith("foo"));
console.log("Заканчивается на 'bar':", myString.endsWith("bar"));
console.log("Содержит 'oo':", myString.includes("oo"));
