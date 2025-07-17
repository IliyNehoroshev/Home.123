// Использование строгого режима облегчает поиск ошибок!

'use strict'
// 1. Создаем переменную
// 2. В фигурных скобках перечисляем свойства-переменные, описывающие наш объект 
// 3. Пары ключ: значение
let car = {
    speed: 97,         // km /h
    nomer: 'A546BC',
    'year of manufacturing': 2020
}

// Подобно позиционному масиву - обращение за значением по ключу
console.log(car['speed'])
console.log(car['year of manufacturing'])

// ОСОБЕННОСТЬ JS!
console.log(car.speed)

// ОШИБКА!
// console.log(car.year of manufacturing)

// Примеры из курса, которые вы уже видели
// document.body
// console.log()
// inputid.value
// HTMLElement.appendChild()
// array.length


// Добавлять новые свойства (поля и методы) можно как через точку, так и через квадратные скобки
car.color = 'red'

car['brand'] = 'Lada'

Object.freeze(car)

car.driver = 'Вера Олеговна'

console.log(car)