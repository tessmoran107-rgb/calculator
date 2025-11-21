const add = (a, b) => { return a + b; }
const subtract = (a, b) => { return a - b; }
const multiply =  (a, b) => { return a * b; }
const divide = (a, b) => { return a / b; }
let justCalculated = false;

const operate = (a, operator, b) => {
    if (operator === "+") {
        return add(a, b);
    } else if (operator === "-") {
        return subtract(a, b);
    } else if (operator === "x") {
        return multiply(a, b);
    } else if (operator === "÷") {
        return divide (a, b);
    } else {
        return "error";
    }
}

let calculate = function() {
    let userInput = (document.querySelector(".input").textContent).split(" ");
    let a = Number(userInput[0]);
    let operator = userInput[1];
    let b = Number(userInput[2]);
    let result = document.createElement("p");
    result.textContent = operate(a, operator, b);
    document.querySelector(".input").innerHTML = "";
    document.querySelector(".input").appendChild(result);
    justCalculated = true;
}

document.querySelectorAll(".symbol").forEach(btn => {
    btn.addEventListener("click", () => {
        justCalculated = false;
        if(document.querySelector(".input").textContent.length > 3) {
            calculate();
            const symbol = btn.textContent.trim();
            const element = document.createElement("p");
            element.textContent = ` ${symbol} `;
            element.classList.add("operator")
            document.querySelector(".input").appendChild(element);
        } else {
        const symbol = btn.textContent.trim();
        const element = document.createElement("p");
        element.textContent = ` ${symbol} `;
        element.classList.add("operator")
        document.querySelector(".input").appendChild(element);
    }})
})

document.querySelectorAll(".number").forEach(btn => {
    btn.addEventListener("click", () => {
        if (justCalculated) {
            document.querySelector(".input").innerHTML = "";
            justCalculated = false;
        }
        const numVal = btn.textContent;
        const element = document.createElement("p");
        element.textContent = `${numVal}`;
        document.querySelector(".input").appendChild(element);
    })
})

let clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
    document.querySelector(".input").innerHTML = "";
    justCalculated = false;
})

let equals = document.querySelector(".equals");
equals.addEventListener("click", () => {
    calculate();

 })





















