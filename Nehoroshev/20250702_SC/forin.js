const fruit = ['ананас', 'мандарин', 'киви']
//for (let n = 0; n < fruit.length; n++) {
for (let n in fruit) {
    console.log(n, fruit[n])
}


console.log('Задача 1')
for (i=6; i<19; i++) {
    console.log(i)
}
console.log('Задача 2')
let array = [3, 8, 15, 24];
for (let num of array) {
    console.log(num);
}

console.log('Задача 3')
let animals = ['dog', 'cat', 'bird', 'fish']
for(let i in animals) {
 console.log(animals[animals.length - 1 - i]);
}

// Дан массив упорядоченных чисел [2, 4, 6, 7, 8, 14, 16, 18]
//  найти, есть ли в массиве число из поля ввода на странице бинарным поиском

function search() {
    const chislo = me.valueAsNumber // Что ищем?
    // Найти, на какой позиции оно стоит!
    //         0  1  2  3  4   5   6   7
    let arr = [2, 4, 6, 7, 8, 14, 16, 18]
    let left = 0
    let right = arr.length - 1       // 7
    let middle = -1
    while (right - left > 1) {
        // Ищем середину той части массива, которую сейчас анализируем - среднее арифметическое
        middle = Math.floor((right + left) / 2)
        if (chislo < arr[middle]) {
            // ищем в левой половине - сдвигаем правый край левее середины
            right = middle - 1
        } else {
            // ищем в правой половине - сдвигаем левый край до середины
            left = middle
        }
        console.log(left, right)
    }
}

