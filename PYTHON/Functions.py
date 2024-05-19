def convert_to_celsius(fahrenheit):
  """Converts a temperature from Fahrenheit to Celsius.

  Args:
      fahrenheit (float): The temperature in Fahrenheit.

  Returns:
      float: The converted temperature in Celsius.
  """
  celsius = (fahrenheit - 32) * 5 / 9
  return celsius

def convert_to_fahrenheit(celsius):
  """Converts a temperature from Celsius to Fahrenheit.

  Args:
      celsius (float): The temperature in Celsius.

  Returns:
      float: The converted temperature in Fahrenheit.
  """
  fahrenheit = (celsius * 9 / 5) + 32
  return fahrenheit

# Example usage
user_choice = input("Enter 'C' to convert from Celsius to Fahrenheit or 'F' to convert from Fahrenheit to Celsius: ").upper()

if user_choice == 'C':
  celsius_value = float(input("Enter the temperature in Celsius: "))
  fahrenheit_value = convert_to_fahrenheit(celsius_value)
  print(f"{celsius_value}°C is equal to {fahrenheit_value:.2f}°F")
elif user_choice == 'F':
  fahrenheit_value = float(input("Enter the temperature in Fahrenheit: "))
  celsius_value = convert_to_celsius(fahrenheit_value)
  print(f"{fahrenheit_value}°F is equal to {celsius_value:.2f}°C")
else:
  print("Invalid choice. Please enter 'C' or 'F'.")
