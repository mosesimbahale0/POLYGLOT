// Select the button element
const changeColorButton = document.getElementById("changeColorButton");

// Add an event listener for the button click
changeColorButton.addEventListener("click", function() {
  // Get a random RGB color value
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const newColor = `rgb(${red}, ${green}, ${blue})`;

  // Change the background color of the body element
  document.body.style.backgroundColor = newColor;
});
