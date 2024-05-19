/**\
 * 
 * This code implements all three control flow structures:

Conditional statement (if-else): Checks if the user's guess matches the secret number and displays a corresponding message.
Nested conditional statement (if-else): If the guess is incorrect, it further checks if it's higher or lower than the secret number and provides a specific hint.
Loop (while) - optional challenge: This section demonstrates a while loop. It allows the user to guess multiple times within a limited number of attempts (attempts). The loop continues as long as the user has remaining attempts and hasn't guessed the correct number.
 * 
 * 
 */



fun main() {
    val secretNumber = 7  // Change this to any secret number
  
    println("Guess a number between 1 and 10:")
    val guess = readLine()!!.toInt()
  
    // Conditional statement (if-else)
    if (guess == secretNumber) {
      println("Congratulations! You guessed the number!")
    } else {
      // Nested conditional statement (if-else)
      if (guess > secretNumber) {
        println("Your guess is too high. Try again!")
      } else {
        println("Your guess is too low. Try again!")
      }
    }
  
    // Loop (while) - optional challenge
    var attempts = 3  // Change this to adjust the number of allowed guesses
    while (attempts > 0 && guess != secretNumber) {
      println("Incorrect. You have $attempts guesses remaining. Guess again:")
      guess = readLine()!!.toInt()
      attempts--
    }
  
    if (guess == secretNumber) {
      println("Congratulations! You guessed the number!")
    } else {
      println("Sorry, you ran out of guesses. The secret number was $secretNumber.")
    }
  }
  