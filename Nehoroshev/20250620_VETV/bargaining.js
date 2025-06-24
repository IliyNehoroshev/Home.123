/**
 * Цикл: Продавец и покупатель торгуются на рынке.
 * Продавец изначально называет цену: 10000 за букет.
 * Покупатель 4000. 
 * На каждом витке цикла продавец уменьшает сумму на 500,
 *  а покупатель повышает на 600. 
 * За какую сумму будет куплен букет?
 */

function next_price() {
// Улучшения: брать со страницы начальные цены покупателя и продавца
let seller       = seller_start.valueAsNumber;  // Начальная цена от продавца
let seller_minus = 500;
let buyer        = buyer_start.valueAsNumber;
let buyer_plus   = 600;

while (buyer < seller) {
    // console.log('продавец: - 10000!\nпокупатель: - 4000?')
    console.log('продавец: -', seller, '!\nпокупатель: -', buyer, '?')
    // Логика покупателя:
    let buyer_next = buyer + buyer_plus; // Вычислил, но вслух не сказал!
    buyer_start.valueAsNumber = buyer_next;             // buyer = buyer + buyer_plus
    let seller_next = seller - seller_minus; // продавец тоже поменял цену
    seller_start.valueAsNumber = seller_next;
    seller       = seller_start.valueAsNumber;
    buyer        = buyer_start.valueAsNumber;

    let p = document.createElement('p')
    p.textContent = 'продавец: -' + seller;
    document.body.appendChild(p)
    p = document.createElement('p')
    p.textContent = 'покупатель: -' + buyer + '?';
    document.body.appendChild(p)
    p = document.createElement('p')
    document.body.appendChild(p)
    
}
console.log('Букет куплен за ', seller_start.valueAsNumber )
}