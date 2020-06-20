function My_First_Function()    {                               //Defining a function and naming it
    var str = "This text is green!";                            //Defining a variable and giving it a string value
    var result = str.fontcolor("green");                        //Using the fontcolor method on str variable
    document.getElementById("Green_Text").innerHTML = result;   //Putting the value of result into HTML element with "Green_Text" id
}

function myFunction()   {
    var sentence = "I am learning";
    sentence += " a lot from this course!";
    document.getElementById("Concatenate").innerHTML = sentence;
}

function multiplyThree(num1, num2, num3) {
  return num1*num2*num3;
}
document.write(multiplyThree(3.54, 9, 73));

function sayHello() {
    document.getElementById("hi").innerHTML = "Hello World";
}

