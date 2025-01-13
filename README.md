## Advanced Calculator with Dark Theme
**This is the outcome of this project:**

![calculator](https://github.com/user-attachments/assets/0b2e6e77-469c-4723-b8ea-bd3b338c4b8a)



### Overview

This project is an advanced calculator built using HTML, CSS, and JavaScript. It includes basic arithmetic operations, as well as advanced functions such as trigonometric, logarithmic, and power calculations. The calculator also features memory functions and a dark theme toggle to enhance user experience.

### Features

1. **Basic Arithmetic Operations**:
    - Addition
    - Subtraction
    - Multiplication
    - Division

2. **Advanced Functions**:
    - Square Root
    - Power
    - Trigonometric Functions: Sine, Cosine, Tangent
    - Logarithmic Functions: Natural Logarithm (ln), Common Logarithm (log)
    - Percentage Calculation

3. **Memory Functions**:
    - Memory Clear (MC)
    - Memory Recall (MR)
    - Memory Add (M+)
    - Memory Subtract (M-)

4. **Dark Theme Toggle**:
    - Users can switch between light and dark themes for a better visual experience.

### Project Structure

- `index.html`: The main HTML file that contains the structure of the calculator and the theme toggle button.
- `styles.css`: The CSS file that provides styling for the calculator, including light and dark theme styles.
- `script.js`: The JavaScript file that contains all the functionalities for the calculator, including basic operations, advanced functions, memory functions, and theme toggle.

### HTML

The HTML file includes the basic structure of the calculator, with input fields for display and buttons for various operations. It also includes the theme toggle button at the top.

### CSS

The CSS file defines the styling for the calculator in both light and dark themes. It includes styles for the body, calculator container, display screen, and buttons. The dark theme styles are applied using a `dark-theme` class toggled on the body element.

### JavaScript

The JavaScript file contains functions to handle basic and advanced calculator operations, memory functions, and theme toggling. The functions include:
- `clearDisplay()`: Clears the calculator display.
- `deleteLast()`: Deletes the last character from the display.
- `appendCharacter(char)`: Appends a character to the display, with special handling for functions requiring parentheses.
- `calculate()`: Evaluates the expression in the display and shows the result, with error handling for invalid expressions.
- `memoryClear()`: Clears the memory.
- `memoryRecall()`: Recalls the value stored in memory.
- `memoryAdd()`: Adds the current display value to memory.
- `memorySubtract()`: Subtracts the current display value from memory.
- `toggleTheme()`: Toggles between light and dark themes by adding or removing the `dark-theme` class on the body element.

### Usage

To use this calculator, simply open the `index.html` file in a web browser. You can perform basic and advanced calculations, use memory functions, and toggle between light and dark themes as desired.

### Contributing

Contributions are welcome! If you have any ideas for new features or improvements, please feel free to create a pull request or open an issue.

### License

This project is licensed under the MIT License. See the LICENSE file for more details.
