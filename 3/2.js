// Создайте функцию, которая на вход принимает функцию-колбэк и через
// несколько секунд возвращает некоторые данные. Используйте функцию колбэк, 
// чтобы вывести эти данные в консоль после завершения асинхронной
// операции. Создайте аналогичную функцию с использованием промиса,
// обработайте успешное и неуспешное выполнение промиса. Создайте
// аналогичную функцию с использованием синтаксиса async/await, обработайте
// успешное и неуспешное выполнение функции.
// Приведите пример параллельного выполнения нескольких асинхронных
// функций.

// Функция с колбэком
function fetchData(callback) {
    setTimeout(() => {
        const data = { message: "Данные загружены" };
        callback(data);
    }, 2000);
}

// Пример использования функции с колбэком
fetchData((data) => {
    console.log(data.message);
});

// Функция с промисом
function fetchDataPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true; 
            if (success) {
                resolve({ message: "Данные загружены" });
            } else {
                reject(new Error("Ошибка загрузки данных"));
            }
        }, 2000);
    });
}

// Пример использования функции с промисом
fetchDataPromise()
    .then(data => console.log(data.message))
    .catch(error => console.error(error.message));

// Функция с async/await
async function fetchDataAsync() {
    try {
        const data = await fetchDataPromise();
        console.log(data.message);
    } catch (error) {
        console.error(error.message);
    }
}

// Пример использования функции с async/await
fetchDataAsync();

// Параллельное выполнение нескольких асинхронных функций
async function parallelFetch() {
    const results = await Promise.all([fetchDataPromise(), fetchDataPromise()]);
    results.forEach(result => console.log(result.message));
}

parallelFetch();
