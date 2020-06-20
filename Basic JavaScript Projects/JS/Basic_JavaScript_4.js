function my_Dictionary()    {
    var Monster =    {
        HitPoints:100,
        AttackPoints:5,
        DefensePoints:2,
        Speed:10
    };
    delete Monster.Speed;
    document.getElementById("Dictionary").innerHTML = Monster.Speed;
}