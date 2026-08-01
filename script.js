// Select the display
const display = document.getElementById("display");

// Add value to the display
function appendValue(value) {
    display.value += value;
}

// Clear the display
function clearDisplay() {
    display.value = "";
}

// Delete the last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate the result
function calculate() {
    try {
        // Replace % with /100
        let expression = display.value.replace(/%/g, "/100");

        // Evaluate the expression
        display.value = eval(expression);
    } catch (error) {
        display.value = "Error";
    }
}