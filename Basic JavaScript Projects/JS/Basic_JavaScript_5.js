document.write(typeof "Word");

document.write(" " + 0/0 + " ");

document.write(isNaN("Hello") + " ");

document.write(isNaN(1) + " ");

function displayInfinities()   {
    var infinities = 2E310 + ", " + -3E310 + ".";
    document.getElementById("Infinities").innerHTML = infinities;
}

function isLessThan(num1, num2) {
    document.getElementById("LessThan").innerHTML = num1 < num2;
}

function isGreaterThan(num1, num2)  {
    document.getElementById("GreaterThan").innerHTML = num1 > num2;
}

console.log(50 - 49);

function typeCoercion() {
    document.getElementById("TypeCoercion").innerHTML = "5" + 1;
}

console.log(3 > 123);

function isIt1(arg1, arg2)   {
    var answer = arg1 == arg2;
    document.getElementById("IsIt1").innerHTML = answer;
}

function isIt2(arg1, arg2)   {
    var answer = arg1 == arg2;
    document.getElementById("IsIt2").innerHTML = answer;
}

function isItReally1(arg1, arg2) {
    var answer = arg1 === arg2;
    document.getElementById("IsItReally1").innerHTML = answer;
}

function isItReally2(arg1, arg2) {
    var answer = arg1 === arg2;
    document.getElementById("IsItReally2").innerHTML = answer;
}

function isItReally3(arg1, arg2) {
    var answer = arg1 === arg2;
    document.getElementById("IsItReally3").innerHTML = answer;
}

function isItReally4(arg1, arg2) {
    var answer = arg1 === arg2;
    document.getElementById("IsItReally4").innerHTML = answer;
}

function areBothT1()    {
    var TorF = 5>2&&10>4;
    document.getElementById("AreBothT1").innerHTML = TorF;
}

function areBothT2() {
    var TorF = 5<2&&10<4;
    document.getElementById("AreBothT2").innerHTML = TorF;
}

function isOneOrOtherT1() {
    var TorF = 5>2||10<4;
    document.getElementById("IsOneOrOtherT1").innerHTML = TorF;
}

function isOneOrOtherT2() {
    var TorF = 5<2||10<4;
    document.getElementById("IsOneOrOtherT2").innerHTML = TorF;
}

function not_Function1() {
    document.getElementById("Not1").innerHTML = !(20<10);
}

function not_Function2() {
    document.getElementById("Not2").innerHTML = !(20>10);
}

