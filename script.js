let memory = 0; // Initialize memory variable

// Function to toggle between light and dark themes
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to delete the last character from the display
function deleteLast() {
    var display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

// Function to append characters to the display
function appendCharacter(char) {
    var display = document.getElementById('display');
    // Add closing parenthesis for specific functions
    if (char === 'Math.sin(' || char === 'Math.cos(' || char === 'Math.tan(' || char === 'Math.log(' || char === 'Math.log10(') {
        display.value += char + ')';
    } else {
        display.value += char;
    }
}

// Function to calculate and display the result
function calculate() {
    var display = document.getElementById('display');
    try {
        // Replace percentage symbol with division by 100
        var expression = display.value.replace(/%/g, '/100');
        display.value = eval(expression);
    } catch (e) {
        display.value = 'Error'; // Display error for invalid expressions
    }
}

// Function to clear the memory
function memoryClear() {
    memory = 0;
}

// Function to recall the value stored in memory
function memoryRecall() {
    var display = document.getElementById('display');
    display.value = memory;
}

// Function to add the current display value to memory
function memoryAdd() {
    var display = document.getElementById('display');
    memory += parseFloat(display.value);
}

// Function to subtract the current display value from memory
function memorySubtract() {
    var display = document.getElementById('display');
    memory -= parseFloat(display.value);
}
