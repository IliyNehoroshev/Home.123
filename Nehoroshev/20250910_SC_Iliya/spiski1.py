fruits = ['strawberry', 'qiwi', 'plum']
print(fruits)
fruits [0] = 'pear'
print(fruits)
fruits.append('banana')
print(fruits)
breakfast = fruits.pop()
print(fruits)
del fruits[1]
print(fruits)

fruits += ['mango', 'melon']
print(fruits)

fruits = ['strawberry', 'qiwi', 'plu']
perem = 0
while perem < len(fruits):
  print(fruits[perem])
  perem += 1

fruits = ['strawberry', 'qiwi', 'plu']

for i in range(len(fruits)):
  print(fruits[i])