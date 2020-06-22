function lengthyHello() {
    var hello0 = "Hello";
    var hello1 = "ooooo";
    var hello2 = "!!!!!!";
    var completedHello = hello0.concat(hello1, hello2);
    document.getElementById("lengthyHello").innerHTML = completedHello;
}

function hotdogs()   {
    var hotdog = "Hotdogs.";
    var Section = hotdog.slice(3, 7);
    document.getElementById("hotdogs").innerHTML = Section;
}

function upperCase()   {
    var mixedCase = "UpPeR cAsE";
    var uppercase = mixedCase.toUpperCase();
    document.getElementById("upperCase").innerHTML = uppercase;
}

function searchFunction()   {
    var str = 'The word "search" is definitely not in this string.';
    var search = str.search("search");
    document.getElementById("search").innerHTML = search;
}

function stringMethod() {
    var one = 1;
    document.getElementById("stringMethod").innerHTML = one.toString();
}

function seven()    {
    var num = 1234.56789;
    document.getElementById("7").innerHTML = num.toPrecision(7);
}

function fixed()    {
    var num = 123.123456789;
    document.getElementById("fixed").innerHTML = num.toFixed(1);
}

function valOf()    {
    var str = "Hello.";
    var val = str.valueOf();
    document.getElementById("value").innerHTML = val;
}

