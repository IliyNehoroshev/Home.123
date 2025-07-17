// print() // вызов печати на принтер

// "Старый" способ создания класса, конструктора и объекта:

function something () {
    this.a = 9
}

// {a: 9}

// Можно создать объект
let s = new something()
console.log(s.a)


/**  Чтобы создать функцию:
 * 1. Ключевое слово function
 * 2. Название (с теми же ограничениями, что и название переменной: буквы, цифры, подчеркивания, начинается с буквы!)
 * 3. Круглые скобки, в которых можно через запятую перечислить названия будущих аргументов == "формальных параметров"
 * 4. Блок кода, он же тело функции, в нем можно использовать формальные параметры, НЕ ЗНАЯ ЗАРАНЕЕ, чему они равны
 * 5. Оператор возврата - ключевое слово return за которым следует возвращаемое значение
 * 6. Функция имеет право вызывать в своем теле другие функции. В том числе - себя (рекурсия). Если две и более функций вызывают друг друга - это кольцевая рекурсия
 * Существует теорема, согласно которой любую рекурсивную функцию можно переписать без рекурсии циклами. Стек придется реализовывать самому
 */

function hello() {
    console.log('Привет!')
}

// Описание фунцкии сложения трёх чисел
function sum3(a, b, c) {  // Сигнатура (подпись) функции: название и аргументы
    return a + b + c
}

// Вызов функции сложения трех чисел
let mys = sum3(5, 7, 10)
// аргументы передаются в том порядке, в котором они записаны: т.е. 5 попадет в a, 7 в b, 10 в c
console.log('Если сложить 5, 7 и 10 будет ', mys)


function min3(a, b, c) {
    if (a > b) {
        if (b > c) {
            return c
        } else {
            return b
        }
    } else {  // а меньше
        if (c > a) {
            return a
        } else {
            return c
        }
    }
}
console.log('Из 4,2,9 наименьшее это: ', min3(4, 2, 9))
    

function look_at_my_args(a, b) {
    console.log('a = ', a)
    console.log('b = ', b)
    console.log('Все переданное: ', arguments)
}
look_at_my_args(1)
look_at_my_args(1, 2)
look_at_my_args(1, 2, 3)


function itermin() {
    console.log(arguments.length)
    if (arguments.length) {
        let result = arguments[0]
        for (let elem of arguments) {
            if (elem < result) {
                result = elem
            }
        }
        return result
    }        
}

// Рекурсивная функция
function mymin() {
    if (arguments.length) {
        let result = arguments[0]
        // Рекурсивный вызов
        let other = mymin(...Array.from(arguments).slice(1))
        if (other != undefined) {
            if (other < result) {
                return other
            }
        }
        return result
    } 
    // return undefined default      
}
console.log('iteration', itermin(2, 7, 4, 1, 9, 3, 5))
console.log('recursion', mymin(2, 7, 4, 1, 9, 3, 5))


function show_hide(id) {
    let myelem = document.getElementById(id)
    if (myelem.style.display == 'none')  {
        myelem.style.display='block'
    } else {
        myelem.style.display='none'
    }
}


function del(id) {
    document.getElementById(id).remove()
}