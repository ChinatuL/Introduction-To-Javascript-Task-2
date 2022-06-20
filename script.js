function addition(x, y) {
    return x + y;
}

function subtraction(x, y) {
    return x - y;
}

function multiplication(x, y) {
    return x * y;
}

function division(x, y) {
    return x / y;
}

function inputNumber() {
    var x = parseInt(prompt("Enter a number"));
    var y = parseInt(prompt("Enter another number"));
    var operation = prompt("Choose an operation");
    var result;
    switch (operation) {
        case "+":
            result = addition(x, y);
            break;
        case "-":
            result = subtraction(x, y);
            break;
        case "*":
            result = multiplication(x, y);
            break;
        case "/":
            result = division(x, y);
            break;
        default:
            alert("Invalid operation");
    }
    alert(result);
}

inputNumber();
