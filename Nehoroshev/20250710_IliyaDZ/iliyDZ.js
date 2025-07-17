
console.log('Задача 1')

function hello(name) {
                console.log('Привет,', name, '!')
            }

console.log('Задача 2')

function issum(a , b , c) {
    return a + b == c
}
console.log(issum(1, 2, 3)) // true
console.log(issum(1, 2, 5)) // false

console.log('Задача 3')
function equal(arr1, arr2) {
            if (arr1.length != arr2.length)
                return false
            for(let i = 0; i < arr1.length; i++) {
                if (arr1[i] != arr2[i])
                    return false
            }
            return true
        }
        console.log(equal([1, 2, 3], [1, 2, 3])) // true
        console.log(equal([1, 2], [1, 2, 3])) // false
        console.log(equal([11, 22, 33], [0, 2, 3])) // false

console.log('Задача 4')

 function buttons(N) {
            for (let i = 0; i < N; i++) {
                let btn = document.createElement('input')
                btn.setAttribute('type', 'button')
                btn.value = i + 1
                document.body.appendChild(btn)
            }
        }
        buttons(150)
        
console.log('Задача 5')

function del(id) {
            document.getElementById(id).remove()
        }
        
        function buttons(N) {
            for (let i = 0; i < N; i++) {
                let btn = document.createElement('input')
                btn.setAttribute('type', 'button')
                btn.value = i + 1
                document.body.appendChild(btn)
            }
        }
        buttons(150)
        
console.log('Задача 6')

  function cart(goodname, price, quantity, sum) {
            let tr = document.createElement('tr')
            let td
            for (let a of arguments) {
                td = document.createElement('td')
                td.textContent = a
                tr.appendChild(td)
            }
            tb.appendChild(tr)
        }
        cart('яблоки', 12, 3, 36)
        cart('груши', 3, 5, 15)
        cart('сливы', 6, 7, 42)       


        // "Старый" способ создания класса, конструктора и объекта:

function something () {
    this.a = 9
}

// {a: 9}

// Можно создать объект
let s = new something()
console.log(s.a)