const adviceIdElement = document.getElementById("advice-id");
const adviceTextElement = document.getElementById("advice-text");
const diceButton = document.getElementById("dice-button");

//  click event  to fetch and display new advice
diceButton.addEventListener("click", async () => {
  try {
    // Fetching advice from  API
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    
    // Extracting advice data
    const { id, advice } = data.slip;
    
    // Displaying the advice ID and content
    adviceIdElement.textContent = id;
    adviceTextElement.textContent = `"${advice}"`;
  } catch (error) {
    // Display a error message.
    adviceTextElement.textContent = "Oops! Could not fetch advice. Please try again.";
  }
});
