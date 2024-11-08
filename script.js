// Select the input box and calculator buttons
let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

// Store the current input as a string
let string = "";

// Adjust font size based on input length
function adjustFontSize() {
    const maxFontSize = 40;
    const minFontSize = 20;
    const maxChars = 12;

    // Calculate new font size, reducing if length exceeds maxChars
    let newSize = maxFontSize - (string.length - maxChars) * 1.5;
    input.style.fontSize = `${Math.max(newSize, minFontSize)}px`;
}

// Set up event listeners for each button
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.innerHTML;

        if (value === '=') {
            // Evaluate expression and handle errors
            try {
                string = eval(string).toString();
                input.value = string;
            } catch {
                input.value = "Error";
                string = "";
            }
        } else if (value === 'AC') {
            // Clear all input
            string = "";
            input.value = "";
        } else if (value === 'DEL') {
            // Remove last character
            string = string.slice(0, -1);
            input.value = string;
        } else {
            // Append clicked value to the input
            string += value;
            input.value = string;
        }

        // Adjust font size after every update
        adjustFontSize();
    });
});
