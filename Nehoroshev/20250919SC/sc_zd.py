# Задачи:
# 1. Есть список фруктов. Вывести его на печать

frukts = ['banana', 'apple', 'mango', 'pear', 'orange']
for elem in frukts:
    print (elem)

# 2. Есть список валют. Вывести на печать только длины их названий

valut = ['Доллар США','Евро ','Фунт стерлингов','Иена ','Швейцарский франк','Юань']
for valuts in valut:
    dlina = len(valuts)
    print(dlina)


# 3. Есть список чисел от 5 до 15 подряд. Создать новый список из их кубов (6*6*6 - куб шести)

chisla = range(5, 15)  
kub = [chislo**3 for chislo in chisla]  
print(kub)
