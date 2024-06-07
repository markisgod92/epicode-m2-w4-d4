const functionDisplay = document.getElementById("function-display");
const mainDisplay = document.getElementById("main-display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;
        const operators = ["+", "-", "*", "/", "."];

        switch (value) {
            case "C":
                functionDisplay.innerText = "";
                currentInput = "";
                mainDisplay.innerText = currentInput;
                break;
            case "=":
                try {
                    let previousExpr = currentInput;
                    functionDisplay.innerText = previousExpr;
                    currentInput = eval(currentInput).toString();
                    mainDisplay.innerText = currentInput;
                } catch (error) {
                    functionDisplay.innerText = "";
                    mainDisplay.innerText = "ERROR";
                }
                
                break;
            case "+":
            case "-":
            case "*":
            case "/":
            case ".":
                 if (operators.includes(currentInput.at(-1))) {
                    let newInput = currentInput.slice(0, -1)
                    currentInput = newInput;
                };
                currentInput += value;
                mainDisplay.innerText = currentInput;
                break;
            default:
                currentInput += value;
                mainDisplay.innerText = currentInput;
        }

        
    })
})