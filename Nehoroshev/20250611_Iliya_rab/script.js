let my_button = document.createElement('button');

document.body. appendChild(my_button);
 let ol = document.createElement('ol')
        document.body.appendChild(ol)
 let p = document.createElement('p')
    document.body.appendChild(p)
    p.textContent = 'Текст вашего абзаца'
        // Второй раз для переменной мы не пишем let!
        // Переменную можно переиспользовать
    p = document.createElement('p')
    document.body.appendChild(p)
    p.textContent = 'Текст другого абзаца'
let li = document.createElement('li')
    ol.appendChild(li)
    li.textContent = 'Текст элемента списка'
        
    li = document.createElement('li')
    ol.appendChild(li)
    li.textContent = 'Текст второго элемента списка'