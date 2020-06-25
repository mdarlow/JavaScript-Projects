function Call_Loop()  { 
    var Digit = "";
    var X = 4;
    while (X < 7)  {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

function stringLengthProperty() {
    var str = "Supercalifragilisticexpialidocious";
    var n = str.length;
    document.getElementById("stringLengthProperty").innerHTML = n;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++)    {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() {
    var num = [];
    num[0] = "1";
    num[1] = "2";
    num[2] = "3";
    num[3] = "4";
    document.getElementById("Array").innerHTML = "This is a number: " + 
    num[1] + ".";
}

function constant_function()    {
    const Fish = {species: "P. Innesi", family:"Characidae", order:"Characiformes"};
    Fish.species = "Neon Tetra";
    Fish.price = "$2.50";
    document.getElementById("Constant").innerHTML = "The " + Fish.species + 
    " is of the " + Fish.family + " family of order " + Fish.order + 
    ". This particular fish costs " + Fish.price + " plus shipping to purchase.";
}

var heSaid = "Hello";
{
    let heSaid = "Goodbye";
    document.getElementById("heSaid").innerHTML = heSaid;
}

function math() {
    var addition = 1 + 1;
    return addition;
}
document.getElementById("return").innerHTML = math();

let Fish = {
    species: "Neon Tetra",
    family: "Characidae",
    order: "Characiformes",
    price: "$2.50",
    description : function()  {
        return "The " + this.species + " is of the " + this.family + 
        " family of order " + this.order + ". This particular fish costs " + 
        this.price + " plus shipping to purchase.";
    }
};
document.getElementById("Fish_Object").innerHTML = Fish.description();

var nums = "";
var num;
for (num = 0; num < 5; num++)   {
    if (num === 2)  {
        break;
    }
    nums += num + "<br>";
}
document.getElementById("numbers").innerHTML = nums;

var nums2 = "";
for (num = 0; num < 5; num++)   {
    if (num === 2)  {
        continue;
    }
    nums2 += num + "</br>";
}
document.getElementById("numbers2").innerHTML = nums2;