#Задание 3:
#Написать программу, в которой есть переменная, равная 25
#Вывести на экран все числа от 1 до 25
#Обязательно использовать цикл while

konets_max = input('Введите max число :')
konets_max = int(konets_max)
nachalo_min = input('Введите mix число :')
nachalo_min = int(konets_max)
while nachalo_min <= konets_max:
  print(nachalo_min)
  nachalo_min += 1
