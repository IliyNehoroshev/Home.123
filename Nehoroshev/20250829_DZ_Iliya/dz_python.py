#Написать программу, которая спрашивает возраст, выбрасывает исключение, 
# если введенное число отрицательное, в противном случае считает год рождения.

year = input('Год рождения? ')
year = int(year)
age_min = 2
age_max = 200
current_year = 2025
year_min = current_year - age_max
year_max = current_year - age_min
print(f'Год {year} меньше максимума {year_max}? ', year < year_max)
print(f'Год {year} больше минимума {year_min}? ', year > year_min)
print(f'Год в разумных земных значениях? ', year < year_max and year > year_min)
while not (year < year_max and year > year_min):
    print('Повторите ввод! Вот тебе второй шанс!')
    age_de_nessance = input('Год рождения?')
    year = int(age_de_nessance)