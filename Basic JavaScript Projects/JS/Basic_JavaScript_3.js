function addTwo(num1, num2) {
    var answer = num1+num2;
    document.getElementById("Math").innerHTML = "The answer is " + answer;
}

function subtractTwo(num1, num2)    {
    var answer = num1-num2;
    document.getElementById("Subtraction").innerHTML = "The answer is " + answer;
}

function multiplyTwo(num1, num2) {
    var answer = num1*num2;
    document.getElementById("Multiplication").innerHTML = "The answer is " + answer;
}

function divideTwo(num1, num2)  {
    var answer = num1/num2;
    document.getElementById("Division").innerHTML = "The answer is " + answer;
}

function multipleOperations()   {
    var multiple_operations = (7938 + 234) / 10 * 0 + -5;
    document.getElementById("Operations").innerHTML = "The answer is " + multiple_operations;
}

function remainderOfTwo(num1, num2)   {
    var answer = num1 % num2;
    document.getElementById("Modulus").innerHTML = "The answer is " + answer;
}

function makeNegative(num1) {
    var negative = -num1;
    document.getElementById("Negation").innerHTML = negative;
}

function incrementNum(num1) {
    var incremented = num1;
    incremented++;
    document.getElementById("Incrementation").innerHTML = incremented + " comes after 1.";
}

function decrementNum(decremented) {
    decremented--;
    document.getElementById("Decrementation").innerHTML = decremented + " goes before 1.";
}

function randomFloat(minNum, maxNum)  {
    var response = Math.random() * (maxNum - minNum) + minNum;
    document.getElementById("RandomFloat").innerHTML = response;
}

function randomInteger(minNum, maxNum)  {
    var response = Math.floor(Math.random() * ((maxNum + 1) - minNum) + minNum);
    document.getElementById("RandomInteger").innerHTML = response;
}
