function addToDisplay(value) {
    document.getElementById("display").innerText += value;
}

function clearDisplay() {
    document.getElementById("display").innerText = "";
}

function calculateResult() {
    let expression = document.getElementById("display").innerText;
    let result;
    try {
        result = eval(expression);
        document.getElementById("display").innerText = result;
    } catch (error) {
        document.getElementById("display").innerText = "Error";
    }
}
