/**
 * This code defines two functions:
 * 
 * calculateTip(billAmount: Double, tipPercentage: Double): Takes the bill amount and tip percentage as
 * input and returns the calculated tip amount.
 * 
 * calculateTotalBill(billAmount: Double, tipAmount: Double): Takes the bill amount and tip amount as input
 *  and returns the total bill amount including the tip.
 * 
 * 
 */


fun calculateTip(billAmount: Double, tipPercentage: Double): Double {
  """
  Calculates the tip amount based on the bill amount and tip percentage.

  Args:
      billAmount: The total cost of the bill.
      tipPercentage: The desired tip percentage (e.g., 15.0 for 15%).

  Returns:
      The calculated tip amount.
  """
  return billAmount * (tipPercentage / 100)
}

fun calculateTotalBill(billAmount: Double, tipAmount: Double): Double {
  """
  Calculates the total bill amount including the tip.

  Args:
      billAmount: The total cost of the bill.
      tipAmount: The calculated tip amount.

  Returns:
      The total bill amount with tip.
  """
  return billAmount + tipAmount
}

fun main() {
  // Get user input
  println("Enter the bill amount:")
  val billAmount = readLine()!!.toDouble()

  println("Enter the desired tip percentage (e.g., 15 for 15%):")
  val tipPercentage = readLine()!!.toDouble()

  // Calculate tip and total bill
  val tipAmount = calculateTip(billAmount, tipPercentage)
  val totalBill = calculateTotalBill(billAmount, tipAmount)

  // Display results
  println("The tip amount is: $tipAmount")
  println("The total bill amount with tip is: $totalBill")
}
