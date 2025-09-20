# Создать список lst всех чисел от 1 до 100. 
lst = list(range(1, 100))
print(lst)

# 1. Из него (lst) создать список всех двузначных чисел, начинающихся на 5
lst = list(range(1, 100))
piat = [num for num in lst if 50 <= num <= 59]
print(piat)

# 2. Из него (lst) создать новый список - числа, которые содержат в составе 7
# напоминание in - оператор проверки вхождения  'bc' in 'abc' True
lst = list(range(1, 100))
seven = [num1 for num1 in lst if '7' in str(num1)]
print(seven)


# 3. Из него (lst) создать список строк, содержащих каждый десяток отдельно
# 123456789, 10111213141516171819, 20212223.....  и т.д.
lst = list(range(1, 100))
desiatki = []
for i in range(0, len(lst), 10):
    desiatki.append(str(lst[i:i+10]))
print(desiatki)
