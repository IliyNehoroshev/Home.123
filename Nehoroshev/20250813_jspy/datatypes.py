# Логический тип
b = False  # Создана логиеческая переменная со значением "Ложь"
if b:  # ветвление. Требует отступа последующих строк, относящихся к его ветвям
    print('b истинна')  # вывод на экран
else:
    print('b ложна')
print(type(b))

vocabulary = {  # dict. Такой же, как в js, но без обращения через точку
    'cat': 'кошка'
}
# Обращение по ключу на чтение
print('cat переводится как ', vocabulary['cat'])
# Обращение по ключу на запись
vocabulary['dog'] = 'пес'
vocabulary['cat'] = 'кот'
print(vocabulary)

name = 'Wera'
tn = type(name)
print('Тип переменной name - это ', tn)
pointer = id(name)
print('Уникальный идентификатор переменной name - это', pointer)

name = 'Ira'
print('Теперь id переменной name', id(name))  # id изменился!
marks = [11, 8, 10, 9, 12]
marks.append(7)   #  js: arr.push(7)
marks[5] = 10  

massa = 76
print('Мой вес =', massa)

strit = 'Кутузовский проспект'
print(strit)

years = 2025  
if years % 4 == 0:
    print(f"{years} год высокосный")
else:
    print(f"{years} год НЕ высокосный")
