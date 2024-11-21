// Напишите программу, которая находит среди трех чисел наибольшее,
// используя логические условия.

// Программа для нахождения наибольшего числа среди трех чисел
let num1 = 10;
let num2 = 20;
let num3 = 15;

let maxNum;

if (num1 >= num2 && num1 >= num3) {
    maxNum = num1;
} else if (num2 >= num1 && num2 >= num3) {
    maxNum = num2;
} else {
    maxNum = num3;
}

console.log("Наибольшее число:", maxNum);
