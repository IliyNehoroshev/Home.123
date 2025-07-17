let arr = [2, 4, 6, 8, 333, 55, 77]
let brr = [2, 4, 6, 8, 333, 55, 77]
let crr = [2, 4, 66]

// Проверить, равны ли массивы arr, brr

let areEqual = arr.length == brr.length
// Установим предполагаемое равенство массивов как равенство их длин

let i = 0  // начнем сравнение с первого элемента
if (areEqual) {
    while((i < arr.length) && (arr[i] == brr[i])) {
        // Пока не достигли конца массивов и пока элементы равны
        i++
    }
    areEqual = i == arr.length   // достигли ли мы конца массива?
}
console.log(arr[i], brr[i])
console.log('равны ли массивы arr, brr? =',areEqual);

// Проверить, равны ли массивы arr, crr

let arcEqual = arr.length == crr.length
if (arcEqual) {
    let i = 0  
    while((i < arr.length) && (arr[i] == crr[i])) {
        i++
    }
    arcEqual = i == arr.length   
    }
console.log('равны ли массивы arr, crr? =',arcEqual);




let my_car = {
    speed: 97,         // km /h
    color: 'red',
}
let your_car = {
    speed: 97,         // km /h
    color: 'red',
}
let bus = {
    speed: 43,         // km /h
    color: 'red',
}

//  Проверить, равны ли моя и твоя машины
carEqual = true
for (let i in my_car) {
    if (my_car[i] !== your_car[i]) {
        carEqual = false;
        break;  // досрочный выход из цикла. Не рекомендован для ежедневного использования
    }
}
console.log('равны ли машины моя и твоя? =',carEqual);


// Проверить, равна ли моя машина автобусу

carEqual = true
for (let i in my_car) {
    if (my_car[i] !== bus[i]) {
        carEqual = false;
        break;  
    }
}
console.log('равны ли машины моя и автобус? =',carEqual);