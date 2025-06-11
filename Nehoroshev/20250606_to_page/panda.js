function add_kid() {
    // <input type="button"  onclick="add_kid()" value="Пришёл">
    // <input name="fio" id="fio" placeholder="Имя">
    // <input type="number" id="year" placeholder="Год рождения"></input>
    let li = document.createElement('li')
    kids.appendChild(li)
    console.log(fio.value)
    li.textContent = 'Пришёл: ' + fio.value
}