# 1. Conditional statement (if-else)
fruit = input("What fruit do you want to buy? (apple, banana, orange): ").lower()

if fruit == "apple":
    print("Great choice! Apples are healthy and delicious.")
elif fruit == "banana":
    print("Bananas are a good source of potassium. Enjoy!")
else:
    print(f"{fruit.title()} is a great choice too! We have a wide variety of fruits.")

# 2. Loop (while)
money = 10
fruits = ["apple", "banana", "orange"]
bought_fruits = []

while money > 0 and fruits:
    print(f"\nYou have ${money} remaining. Available fruits: {fruits}")
    fruit_choice = input("Which fruit would you like to buy (or type 'q' to quit)? ").lower()
    
    if fruit_choice == 'q':
        break  # Exit the loop if user chooses to quit
    elif fruit_choice in fruits:
        fruit_price = {
            "apple": 2,
            "banana": 1,
            "orange": 3
        }[fruit_choice]  # Dictionary to store fruit prices
        if money >= fruit_price:
            money -= fruit_price
            bought_fruits.append(fruit_choice)
            fruits.remove(fruit_choice)
            print(f"You bought a {fruit_choice} for ${fruit_price}.")
        else:
            print(f"Sorry, you don't have enough money for {fruit_choice}.")
    else:
        print(f"{fruit_choice} is not available. Please try again.")

# 3. Transfer statement (break) - demonstrated inside the while loop

# Print summary of purchased fruits
if bought_fruits:
  print("\nYou bought these fruits:", bought_fruits)
else:
  print("\nYou didn't buy any fruits.")
