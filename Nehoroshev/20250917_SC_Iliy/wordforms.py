#Написать (можно с функцией, но можно и отдельным файлом)
#проверку числа и выбор верной формы существительного с числительным
#0 коров
#1 корова
#2,3,4, коровы
#5 коров
#11 коров
#21 корова

# Делится ли на? - это "остаток от деления равен нулю?"
# Остаток от деления - это %
print(4 % 2 == 0)  # делится на 

#1,      коровА
#2, 3, 4 коровЫ
#5
kolichestvo = input('Сколько коров? ')  # 0 #11
kolichestvo = int(kolichestvo)
def word_form(kolichestvo, words):
    '''Функция получает на вход 2 параметра
    1 параметр - количество
    2 параметр - словарь, содержащий 1, "мало" (2,3,4) и много (5+, 11-19 и т.д.)
    {'one': 'год', 'few': 'года', 'many': 'лет'}
    '''
    #if (kolichestvo % 100 > 9) and (kolichestvo % 100 < 21):
    #    return 'коров'  # print(kolichestvo, ' коров')
    #else:
    if (kolichestvo % 100 < 10) or (kolichestvo % 100 > 20):
        if (kolichestvo % 10 == 2) or (kolichestvo % 10 == 3) or (kolichestvo % 10 == 4):
            return words['few']  # words[234]  # 'коровы'  # print(kolichestvo, ' коровы')
        if (kolichestvo % 10 == 1):
            return words['one']  # words[1] 'корова'  # print(kolichestvo, ' корова')
        #if (kolichestvo % 10 > 4):
        #    return 'коров' # print(kolichestvo, ' коров')
    return words['many']  # 'коров'

print(kolichestvo,word_form(kolichestvo, {'one': 'корова', 'few': 'коровы', 'many': 'коров'}))

# Вопросы, на которые можно ответить "да" или "нет" должны 
# превращаться в логические выражения
# чтобы ответить на вопрос"равен" или "нет", надо использовать знак ==
# Ответом на логический вопрос должна быть константа 
# True (истина) или False (ложь)