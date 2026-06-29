const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

let expression = "";

buttons.forEach((button) => {
    button.addEventListener("click", () => {

        const value = button.textContent;

        switch (value) {

            case "AC":
            case "C":
                expression = "";
                display.value = "";
                break;

            case "=":
                try {
                    expression = eval(expression).toString();
                    display.value = expression;
                } catch {
                    display.value = "Error";
                    expression = "";
                }
                break;

            case "×":
                expression += "*";
                display.value = expression;
                break;

            case "÷":
                expression += "/";
                display.value = expression;
                break;

            case "−":
                expression += "-";
                display.value = expression;
                break;

            default:
                expression += value;
                display.value = expression;
        }
    });
});