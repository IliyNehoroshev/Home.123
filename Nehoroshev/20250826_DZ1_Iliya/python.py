# Пользователь вводит с клавиатуры два числа 
# (начало и конец диапазона). Требуется проанализировать все
# числа в этом диапазоне. Нужно вывести на экран:
# 1. Все числа диапазона;
# 2. Все числа диапазона в убывающем порядке;
# 3. Все числа, кратные 7;
# 4. Количество чисел, кратных 5.

nachalo = input('Введи первое число: ')
nachalo = int(nachalo)
konets = input('Введи второе число: ')
konets = int(konets)

print('Задание 1: все числа диапазона')

num = nachalo  # Создаем переменную-бегунок

# 1. Все числа диапазона
while num <= konets:
    print(num)
    num = num + 1

print('Задание 2: в обратном порядке')

# 2. Все числа диапазона в убывающем порядке
num = konets  # 
# num по-прежнему равен 9
while num >= nachalo:
    print(num)
    num = num - 1

kratno = 7
print('Задание 3: кратно %i' % kratno)
# 3. Все числа, кратные 7
num = nachalo - nachalo % kratno + kratno
while num <= konets:
    print(num)
    num = num + kratno

kratno = 5
print('Задание 4: количество чисел, кратных %i' % kratno)
# 4. Количество чисел, кратных 5
num = nachalo - nachalo % kratno + kratno
kolvo = 0
otladka = False # True
while num <= konets:
    if otladka:
        print(num)
    num = num + kratno
    kolvo += 1
print(kolvo)