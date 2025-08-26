def calculate_product_of_digits():
  """
  Получает от пользователя четырехзначное число и вычисляет произведение его цифр.
  """

  while True:
    try:
      number = input("Введите четырехзначное число: ")

      if not number.isdigit():
        print("Ошибка: Введите только цифры.")
        continue  # Просим пользователя ввести число заново

      if len(number) != 4:
        print("Ошибка: Введите именно четырехзначное число.")
        continue  # Просим пользователя ввести число заново

      number = int(number) # Преобразуем строку в целое число (для удобства)
      break # Выходим из цикла, если ввод корректен

    except ValueError:
      print("Ошибка: Некорректный ввод. Введите число.")

  product = 1
  for digit in str(number):
    product *= int(digit)

  print("Произведение цифр:", product)


# Вызываем функцию для запуска программы
calculate_product_of_digits()