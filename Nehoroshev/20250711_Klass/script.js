class Human {
    #firstname                   // приватное поле
    #birthday                    // поле
    constructor(newname, dt) {  // метод
        // аргументы, они же - параметры. При описании - формальные
        this.#firstname = newname  // 'Вася'
        this.#birthday = dt        // new Date(2000, 5, 2)
    }
    get name() {  // getter - обращение без круглых скобок!
        return this.#firstname
    }
    get birthday() {
        // return this.#birthday  // НЕБЕЗОПАСНО! Доступ к модификации даты по частям!
        return new Date(
            this.#birthday.getFullYear(),
            this.#birthday.getMonth(),
            this.#birthday.getDate()
        )
    }
    set birthday(new_bd) {
        if ((new_bd < new Date()) && (new_bd > new Date(1800, 0, 1))) {
            this.#birthday = new_bd
        } else {
            console.error('Неверная дата рождения: ', new_bd)
        }
    }
}

let man = new Human('Вася', new Date(1990, 2, 4))
// при вызове любой функции, даже метода, мы передаем ФАКТИЧЕСКИЕ параметры
let girl = new Human('Ася', new Date(1993, 6, 4))
let boy = new Human('Дима', new Date(2019, 10, 18))
// girl.#firstname = 'Миша' - нельзя! Поле приватное!
console.log(girl.name)

console.log(man.name)
console.log(boy.name)

girl.birthday = new Date(2020, 5, 6)  // Молча ничего не делает!
console.log(girl.birthday)
girl.birthday.setMonth(0)
console.log(girl.birthday)

girl.birthday = new Date(2028,8,8)

console.log(girl.birthday)


class car {
    constructor(vin , shin) {
        this.#vin = vin;
        this.shin = shin;
    }
    get vin() {
        return this.#vin;
    }
    get shin() {
        return this.#shin;
    }

    set shin(значение) {
        if (значение < 4 || значение > 20) {
            console.log("Количество колес должно быть от 4 до 20.");
        } else if (значение % 2 !== 0) {
            console.log("Количество колес должно быть четным.");
        } else {
            this.#shin = значение;
        }
    }
}

const vin = new vin("Toyota", 4);
console.error(vin); 
console.error(shin ); 

shin = 6; 
shin = 3; 
shin = 21; 
shin = 5;