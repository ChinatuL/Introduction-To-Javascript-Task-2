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
    var x = parseFloat(prompt("Enter a number"));
    var y = parseFloat(prompt("Enter another number"));
    var operation = prompt("Choose an operation: '+' or '-' or '*' or '/'");

    if (isNaN(x) == true || isNaN(y) == true) {
        alert("One or both of your inputs was not a number");
    } else {
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
}

inputNumber();
