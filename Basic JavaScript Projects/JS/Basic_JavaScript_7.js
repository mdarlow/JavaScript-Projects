var hi = "Hi";

function sayHi()    {
    document.write(hi + ".<br>");
}

function exclaimHi() {
    var exclamation = "!!!!!!!!!!";
    document.write(hi + exclamation + "<br>");
}

function exclaimHiMore()    {
    console.log(hi + exclamation + exclamation + exclamation + "<br>");
}

sayHi();
exclaimHi();
exclaimHiMore();


function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
    else if (new Date().getHours() > 18) {
        document.getElementById("Greeting").innerHTML = "How are you this evening?";
    }
    else {
        document.getElementById("Greeting").innerHTML = "How are you?";
    }
}


function sayHi()    {
    var Translation = "Chinese";
    if (Translation == "English")   {
        document.getElementById("sayHi").innerHTML = "Hello";
    }
    else if (Translation == "Japanese")  {
        document.getElementById("sayHi").innerHTML = "Konnichiwa";
    }
    else if (Translation == "Chinese")   {
        document.getElementById("sayHi").innerHTML = "Ni hao";
    }
    else if (Translation == "German")    {
        document.getElementById("sayHi").innerHTML = "Hallo";
    }
    else    {
        document.getElementById("sayHi").innerHTML = "______";
    }
}

function guessNum() {
    Num = document.getElementById("Num").value;
    if (Num < 7)   {
        response = "Too low. Guess again.";
    }
    else if (Num > 7)   {
        response = "Too high. Guess again.";
    }
    else    {
        response = "Too perfect. You cheated!";
    }
    document.getElementById("guessNum").innerHTML = response;
}

function Time_function()    {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0)  {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18)    {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}
