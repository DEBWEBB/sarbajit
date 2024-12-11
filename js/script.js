// Simple Sum Calculation
function calculateSum() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var sum = parseFloat(num1) + parseFloat(num2);
    document.getElementById('sumResult').textContent = "Sum: " + sum;
}

// Factorial Calculation
function calculateFactorial() {
    var num = document.getElementById('numFactorial').value;
    var factorial = 1;
    for (var i = 1; i <= num; i++) {
        factorial *= i;
    }
    document.getElementById('factorialResult').textContent = "Factorial: " + factorial;
}

// Current Time Display
function updateCurrentTime() {
    var now = new Date();
    document.getElementById('currentTime').textContent = now.toString();
}
setInterval(updateCurrentTime, 1000);

