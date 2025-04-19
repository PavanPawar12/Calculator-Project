// Select the input box and all buttons
let input = document.getElementById("inputbox");
let buttons = document.querySelectorAll("button");

// Initialize an empty string for input
let string = "";

// Convert buttons to an array and add event listeners
let arr = Array.from(buttons);

arr.forEach((button) => {
    button.addEventListener("click", (e) => {
        let buttonText = e.target.innerHTML;

        // Handle "=" for result
        if (buttonText === "=") {
            try {
                string = eval(string);
                input.value = string;
            } catch {
                input.value = "Error";
                string = "";
            }
        }
        // Handle "AC" to clear input
        else if (buttonText === "AC") {
            string = "";
            input.value = string;
        }
        // Handle "DEL" to delete last character
        else if (buttonText === "DEL") {
            string = string.slice(0, -1);
            input.value = string;
        }
        // Handle "%" for percentage
        else if (buttonText === "%") {
            string = (parseFloat(string) / 100).toString();
            input.value = string;
        }
        // Append button value to the string
        else {
            string += buttonText;
            input.value = string;
        }
    });
});
