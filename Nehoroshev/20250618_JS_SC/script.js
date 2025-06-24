console.log('Ветвления')
console.log('if - если, else - иначе')
console.log('while - пока ...')

const imya = 'Вася'
const name1 = 'Коля'
//const result = 
//const imena_ravny = imya == name1
const imyaVasya = imya == 'Вася'  // Правда ли, что imya - Вася?
console.log('Правда ли, что imya - Вася?', imyaVasya)
// Компьютер не видит вопрос в кавычках!
// Фраза в кавычках написана для нас, чтобы мы понимали,
// на какой вопрос ответил компьютер
// Для компьютера вопрос - это логическое выражение:
//  Сравнение на равенство ==, ===
//  Сравнение на НЕРАВЕНСТВО >, <, >=, <=
const name1Vasya = 'Вася' == name1  // Правда ли, что name1 - Вася?
console.log('Правда ли, что name1 - Вася?', name1Vasya)