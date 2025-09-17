# from .word import forms
from word import forms
import random


alph = list('0123456789')
# то же самое
alph = [str(i) for i in range(10)]  # генератор - списка
N = 4

def create(N):
    result = ''
    for i in range(N):
        result += alph.pop(random.randint(0, len(alph)))
    return result

def check(user, answer):
    bulls = 0
    cows = 0
    for i in range(len(user)):
        if user[i] == answer[i]:
            bulls += 1
        elif user[i] in answer:
            cows += 1
    return bulls, cows

def play():
    answer = create(N)
    print(answer)
    user = ''
    tries = 0
    while user != answer:
        print(
            'введите число длиной ',
            N,
            forms(N, ('цифра', 'цифры', 'цифр')))
        user = input()
        b, c = check(user, answer)
        print(b, forms(b, ('бык', 'быка', 'быков')),
              c, forms(c, ('корова', 'коровы', 'коров')))
        tries += 1
    print('Угадали за ', tries, forms(tries, ('попытку', 'попытки', 'попыток')))

play()