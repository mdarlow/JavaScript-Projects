function Ride_Function()    {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vote_Function()    {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are not old enough":"You are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}

function Vehicle(Make, Model, Year, Color)  {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction()   {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + 
    " manufactured in " + Erik.Vehicle_Year;
}

function Fish(Water, pH, Temperature, Level, Max, Temperament) {
    this.Fish_Water = Water;
    this.Fish_pH = pH;
    this.Fish_Temperature = Temperature;
    this.Fish_Level = Level;
    this.Fish_Max = Max;
    this.Fish_Temperament = Temperament;
}
var Corydoras = new Fish("freshwater", "5.5 - 7.5", "72F - 80F", "bottom", 
4, "peaceful");
var Molly = new Fish("brackish", "7.0 - 8.5", "72F - 80F", "middle", 3.5, 
"peaceful");
var Banded_Hawkfish = new Fish("saltwater", "8.0 - 8.5", "70F - 80F", 
"middle", 5, "aggressive");
function displayFishInfo()  {
    document.getElementById("New_and_This").innerHTML = 
    "The Corydoras Catfish is a " + Corydoras.Fish_Water + ", " + 
    Corydoras.Fish_Level + "-dwelling, " + Corydoras.Fish_Temperament + 
    " fish that needs a pH range of " + Corydoras.Fish_pH + 
    ", and a water temperature range of " + Corydoras.Fish_Temperature + 
    " in order to thrive in captivity. ";
}

//function beingAJerkToTheComputer()  {
//    var var = "Variable";
//    document.getElementById("Variable").innerHTML = var;
//}

function count_Function()   {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count()    {
        var Starting_point = 499;
        function Plus_One() {Starting_point += 1;}
        Plus_One();
        return Starting_point;
    }
}