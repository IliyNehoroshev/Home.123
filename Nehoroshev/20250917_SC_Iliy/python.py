# Написать (можно с функцией, но можно и отдельным файлом)
# проверку числа и выбор верной формы существительного с числительным
# 0 коров
# 1 корова
# 2,3,4, коровы
# 5 коров
# 11 коров
# 21 корова

kolvo = input('Сколько быков? ')  # 0 #11
kolvo = int(kolvo)
def cows_form(kolvo):
    if (kolvo % 100 < 10) or (kolvo % 100 > 20):
        if (kolvo % 10 == 2) or (kolvo % 10 == 3) or (kolvo % 10 == 4):
            return 'быка'  # print(kolichestvo, ' коровы')
        if (kolvo % 10 == 1):
            return 'бык'  # print(kolichestvo, ' корова')
        #if (kolichestvo % 10 > 4):
        #    return 'коров' # print(kolichestvo, ' коров')
    return 'быков'

print(kolvo, cows_form(kolvo))
