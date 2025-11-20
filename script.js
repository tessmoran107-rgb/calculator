/*let addBtn = document.querySelector(".plussymbol");
addBtn.addEventListener("click", () => {
    let addSymbol = document.createElement("h1");
    addSymbol.textContent = " + ";
    document.querySelector(".input").appendChild(addSymbol);
})

let subtractBtn = document.getElementById("subtract");
subtractBtn.addEventListener("click", () => {
    let subtractSymbol = document.createElement("h1");
    subtractSymbol.textContent = " - ";
    document.querySelector(".input").appendChild(subtractSymbol);
})


let multiplyBtn = document.getElementById("multiply");
multiplyBtn.addEventListener("click", () => {
    let multiplySymbol = document.createElement("h1");
    multiplySymbol.textContent = " x ";
    document.querySelector(".input").appendChild(multiplySymbol);
});

let divideBtn = document.getElementById("divide"); 
divideBtn.addEventListener("click", () => {
    let divideSymbol = document.createElement("h1");
    divideSymbol.textContent = " ÷ ";
    document.querySelector(".input").appendChild(divideSymbol);
});*/

document.querySelectorAll(".symbol").forEach(btn => {
    btn.addEventListener("click", () => {
        const symbol = btn.textContent.trim();
        const element = document.createElement("p");
        element.textContent = ` ${symbol} `;
        element.classList.add("operator")
        document.querySelector(".input").appendChild(element);
    })
})

document.querySelectorAll(".number").forEach(btn => {
    btn.addEventListener("click", () => {
        const numVal = btn.textContent;
        const element = document.createElement("p");
        element.textContent = `${numVal}`;
        document.querySelector(".input").appendChild(element);
    })
})

const add = (a, b) => { return a + b; }
const subtract = (a, b) => { return a - b; }
const multiply =  (a, b) => { return a * b; }
const divide = (a, b) => { return a / b; }

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

let clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
    document.querySelector(".input").innerHTML = "";
})

let equals = document.querySelector(".equals");
equals.addEventListener("click", () => {
    let userInput = (document.querySelector(".input").textContent).split(" ");
    let a = Number(userInput[0]);
    let operator = userInput[1];
    let b = Number(userInput[2]);
    console.log(userInput);
    let result = document.createElement("p");
    result.textContent = operate(a, operator, b);
    document.querySelector(".input").innerHTML = "";
    document.querySelector(".input").appendChild(result);
    console.log(result);
    console.log(operator);
})




