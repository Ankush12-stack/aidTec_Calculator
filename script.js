document.getElementById("calculate").addEventListener("click", function () {
    // Get input values
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operator = document.getElementById("operator").value;

    // Check for valid inputs
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("result").textContent = "Result: Invalid input";
        return;
    }

    // Perform calculation based on the operator
    let result;
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                document.getElementById("result").textContent = "Result: Division by zero";
                return;
            }
            result = num1 / num2;
            break;
        default:
            document.getElementById("result").textContent = "Result: Invalid operator";
            return;
    }

    // Display the result
    document.getElementById("result").textContent = "Result: " + result;
});
