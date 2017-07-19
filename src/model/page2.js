// JavaScript source code
    name = localStorage.getItem("name");

var damage = math.floor((math.random() * 10) + 1);
if (damage <= 5){
    var nextPage = "ohnoes.html";
}
else {
    var nextPage = "kickass.html";
}

var fight = "You dealt " + damage + " to the enemy."
