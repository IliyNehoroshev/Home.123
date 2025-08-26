from random import randint
a = randint(1, 10)
b = randint(1, 10)
while True:
    result = a + b
    answer = int(input('Сколько будет %(a)i + %(b)i = ' % {
        'a': a, 'b': b }))
    if answer != result:
        print('Нет, попробуй ещё раз ')
        continue
    print('Верно')
    a = randint(1, 10)
    b = randint(1, 10)


#Перепишите программу, избежав "continue"
# Посчитайте количество верных и неверных ответов, процент ошибок
# ГОРШОЧЕК, НЕ ВАРИ! Поставьте ограничения:
# По количеству заданий
# По максимуму ошибок
# По минимальному проценту ошибок

