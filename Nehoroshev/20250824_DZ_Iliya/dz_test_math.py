#1. Перепишите программу, избежав "continue"
# Посчитайте количество верных и неверных ответов, процент ошибок
# ГОРШОЧЕК, НЕ ВАРИ! Поставьте ограничения:
# По количеству заданий
#По максимуму ошибок
#По минимальному проценту ошибок

from random import randint

correct_answers = 0
incorrect_answers = 0

while True:
    a = randint(1, 10)
    b = randint(1, 10)
    result = a + b
    answer = int(input(f'Сколько будет {a} + {b} = '))

    if answer == result:
        print('Верно')
        correct_answers += 1
    else:
        print('Нет, попробуй ещё раз ')
        incorrect_answers += 1

