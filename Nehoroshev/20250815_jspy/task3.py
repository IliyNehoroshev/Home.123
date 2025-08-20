# На дом задано 3 задачи. На решение каждой следующей тратится вдвое меньше времени.
# Измерьте время, затраченное на первую задачу и оцените общее время выполнения ДЗ.
# Ответ снова оформить красиво. Сравнить с реальным значением.

# 1. Надо представить условие в математическом виде - создать переменные и написать формулы

kolvo_zadach = 3
zadacha_1 = 11
zadacha_2 = zadacha_1 / 2
zadacha_3 = zadacha_2 / 2
vremia_dz = zadacha_1 + zadacha_2 + zadacha_3
print('Время ДЗ: ', vremia_dz, ' минут')


def time_for_work():
    hours = input("Введите количество часов: ")
    minutes = input("Введите количество минут: ")
    hours = int(hours)
    minutes = int(minutes)

    return (hours,minutes)

def calculate_flight_time():
    speed_str = input("Ведите скорость (km/h): ")
    city1 = input("Название города отправления : ")
    city2 = input("Название города прибытия: ")
    distance_str = input(f"Enter distance between {city1} and {city2} (km): ")
    
    speed = float(speed_str)
    distance = float(distance_str)
    
    time_hours = distance / speed
    
    hours = time_hours // 1
    minutes = (time_hours % 1) * 60
    
    print(f"\nFlight time from {city1} to {city2}:")
    print(f"{hours:.0f} hours {minutes:.0f} minutes")

calculate_flight_time()


speed_plane = input("Ведите скорость (km/h): ")
distance = input("Введите растояние (км): ")
city1 = input("Название города отправления : ")
city2 = input("Название города прибытия: ")
time = distance / speed_plane
print("Время от", city1, "до", city2, "=", time)


#Так можно "проверить" ложность:
if None:
    print('None истинен')
else:
    print('None в Python расценивается как ложь')

if "":
    print("Истина", "")
else:
    print("Ложь", "")

# Проверьте ложность следующих литералов: '', " ", [], {}, [0], 10
if []:
    print("Истина", [])
else:
    print("Ложь", [])

if " ":
    print("Истина", " ")
else:
    print("Ложь", " ")

if [10]:
    print("Истина", (10))
else:
    print("Ложь", (10))


hour = int(input('Сколько сейчас времени (в часах)?'))
if hour < 8:
    print('Как насчёт утренней пробежки?')
if hour < 11:
    print('Тебя ждёт завтрак')
if hour < 16:
    print('Впереди обед')
if hour < 18:
    print('На полдник пирожные')
if hour < 21:
    print('На ужин гречка')
