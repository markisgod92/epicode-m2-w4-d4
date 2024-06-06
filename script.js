const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;
        const operators = ["+", "-", "*", "/"];

        switch (value) {
            case "C":
                currentInput = "";
                break;
            case "=":
                currentInput = eval(currentInput).toString();
                break;
            case "+":
            case "-":
            case "*":
            case "/":
                if (operators.includes(currentInput.at(-1))) {
                    let newInput = currentInput.slice(0, -1)
                    currentInput = newInput;
                };
                currentInput += value;
                break;
            default:
                currentInput += value;
        }

        display.innerText = currentInput;
    })
})