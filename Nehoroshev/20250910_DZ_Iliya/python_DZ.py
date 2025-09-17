#С помощью range вывести все нечётные числа от 77 до 777 включительно

for number in range(77, 778, 2):
    print(number)

#А теперь - используя переменные

nachlo = 77
end = 777
chag = 2

for number in range(nachlo , end + 1, chag):
    print(number)

#А теперь, получив диапазон от пользователя

start = input('Введите число начало:')
start = int(start)
stop = input('Введите число окончания:')
stop = int(stop)
chag = 2

for numb in range(start , stop + 1, chag):
    print(numb)