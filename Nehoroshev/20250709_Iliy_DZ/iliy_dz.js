let arr = [2, 4, 6, 8, 333, 55, 77]
let brr = [2, 4, 6, 8, 333, 55, 77]
let crr = [2, 4, 66, 7]

let check
if (arr.length == crr.length) {
    console.log('Равны')
} else {
    console.log('Не равны')
    //  Знаем что не равны, нужно посчитать на каком номере элемента происходит разрыв;
    for (i=0; arr[i]==crr[i]; i++) {
        check = i
        if (arr[i]!=crr[i]) {
            break
            console.log('Проверка')
        }
    }
} console.log(check)