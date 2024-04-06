const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

let sqrtValue = "";

buttons.forEach((item) => {
    item.onclick = () => {
        if (item.id === "clear") {
            display.innerText = "";
            sqrtValue = "";
        } else if (item.id === "backspace") {
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length - 1);
        } else if (item.id === "equal") {
            try {
                if (sqrtValue !== "") {
                    display.innerText = Math.sqrt(parseFloat(sqrtValue)).toFixed(2);
                    sqrtValue = "";
                } else {
                    display.innerText = eval(display.innerText);
                }
            } catch (error) {
                display.innerText = "Error";
            }
        } else if (item.id === "sqrt") {
            display.innerText += "√";
        } else if (sqrtValue !== "" || !isNaN(parseInt(item.id))) {
            display.innerText += item.id;
            sqrtValue += item.id;
        }
    };
});

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
let isDark = true;
themeToggleBtn.onclick = () => {
    calculator.classList.toggle("dark");
    themeToggleBtn.classList.toggle("active");
    isDark = !isDark;
};
