// Function for all fights

function fight(characterName, hp, pokemonhp, nextPage) {

    if (characterName == "Fortuna") {
        var damage = Math.floor((Math.random() * 10) + 1);
    }
    else if (characterName == "Smacka") {
        var damage = Math.floor((Math.random() * 12) + 1);
    }
    else if (characterName == "Interra") {
        var damage = Math.floor((Math.random() * 7) + 1);
    }

    var pokemonDamage = Math.floor((Math.random() * 6) + 1);
    pokemonhp = pokemonhp - damage;

    hp = hp - pokemonDamage;

    if (hp < 0) {
        hp = 0;
    }

    if (pokemonhp < 0) {
        pokemonhp = 0;
    }

    localStorage.setItem("pokemonhp", pokemonhp);
    localStorage.setItem("hp", hp);
    localStorage.setItem("pokemonDamage", pokemonDamage);
    localStorage.setItem("damage", damage);

    console.log("You are playing as " + characterName);
    console.log("You have " + hp + " HP remaining");
    console.log("You dealt " + damage + " damage");
    console.log("Enemy HP: " + pokemonhp);
    console.log("Enemy damage dealt: " + pokemonDamage);

    if (hp == 0) {
        window.location.href = "youdied.html";
    }
    else if (pokemonhp == 0) {
        window.location.href = "youwon.html";
    }
    else {
        window.location.href = nextPage;
    }
}

//display player stats

function playerStats(characterName, hp) {

    characterName = localStorage.getItem("characterName");
    hp = localStorage.getItem("hp");

    console.clear();
    console.log("You are playing as " + characterName);
    console.log(characterName + " has " + hp + " HP remaining");
}

//Game start

function gameStart() {

    localStorage.clear();

    var gameContent = document.getElementById("gameContent");

    var playAsSmacka = document.getElementById("playAsSmacka").addEventListener("click", function () {

        play("Smacka");
        
    });

    var playAsFortuna = document.getElementById("playAsFortuna").addEventListener("click", function () {

        play("Fortuna");

    });

    var playAsInterra = document.getElementById("playAsInterra").addEventListener("click", function () {

        play("Interra");
 
    });

     
}


//Meet the Chief of Police

function play(characterName) {

    if (characterName == "Smacka") {

        localStorage.setItem("characterName", characterName);

        gameContent.innerHTML = "<p>You begin your adventure in the office of the Chief of Police, Gordon Freeman.</p> \
            <div class='speech'><p>&#10077;You are my only hope Smacka, you came highly recommended from the Mayor of Fruitopolis. I hear you did an awesomesauce job with those bad apples.&#10078;</p> \
            <p>&#10077; Meh, that was an easy job. I prefer a challenge.&#10078;</p> \
            <p>&#10077; Good! Here, this is the list of people I want you to rid me of. If you fail, your name will be mud so don&#10076;t f** k it up!! &#10078;</p> \
            <p>&#10077; Chill! Give me a few days and your troubles will be down the u- bend.&#10078;</p ></div> \
            <p>As you shut the door behind you, you roll your eyes. This is gonna be a piece of cake!</p> \
            <div class='choices'><a href='#' id='exploreArcadia'>Explore the town</a> <br /><br/> \
            <a href='#' id='visitBar'>Visit Shodans Bar</a> <br /><br/> \
            <a href='#' id='readList'>Read the list of names</a></div>";

        var hp = 60;

        localStorage.setItem("hp", hp);
    }

    else if (characterName == "Fortuna") {

        localStorage.setItem("characterName", characterName);

        gameContent.innerHTML = "<p>You begin your adventure in the office of the Chief of Police, Gordon Freeman.</p> \
        <p>&#10077;You are my only hope Fortuna, you came highly recommended from the Mayor of Fruitopolis. I hear you did an awesomesauce job with those bad apples.&#10078; </p > \
        <p>&#10077;Meh, I got lucky.Just the roll of a dice.&#10078;</p> \
        <p>&#10077;I hope your luck holds out.Here, this is the list of people I want you to rid me of.If you fail, your name will be mud so don&#10076;t f** k it up!!&#10078;</p> \
        <p>&#10077;Easy, easy! Give me a few days and your troubles will be down the u-bend.&#10078;</p > \
        <p>As you shut the door behind you, you wonder how this town got so unlucky! </p> \
        <div class='choices'><a href='#' id='exploreArcadia'>Explore the town</a> <br /><br/> \
        <a href='#' id='visitBar'>Visit Shodans Bar</a> <br /><br/> \
        <a href='#' id='readList'>Read the list of names</a></div>";

        var hp = 50;

        localStorage.setItem("hp", hp);
    }

    else {

        localStorage.setItem("characterName", characterName);

        gameContent.innerHTML = "<p>You begin your adventure in the office of the Chief of Police, Gordon Freeman.</p> \
        <p>&#10077;You are my only hope Interra, you came highly recommended from the Mayor of Fruitopolis. I hear you did an awesomesauce job with those bad apples.&#10078; </p > \
        <p>&#10077;I assure you it was all meticulously planned and executed.&#10078;</p> \
        <p>&#10077;As it should be. Here, this is the list of people I want you to rid me of. If you fail, your name will be mud so don&#10076;t f** k it up!!&#10078;</p> \
        <p>&#10077;Don&#10076;t worry Sir! Give me a few days and your troubles will be down the u-bend.&#10078;</p > \
        <p>As you shut the door behind you, you wonder how this town survives! </p> \
        <div class='choices'><a href='#' id='exploreArcadia'>Explore the town</a> <br /><br/> \
        <a href='#' id='visitBar'>Visit Shodans Bar</a> <br /><br/> \
        <a href='#' id='readList'>Read the list of names</a></div>";

        var hp = 55;

        localStorage.setItem("hp", hp);

    };

    playerStats();

    var exploreArcadia = document.getElementById("exploreArcadia").addEventListener("click", function () {

        exploreTown();

    });

    var visitBar = document.getElementById("visitBar").addEventListener("click", function () {

        visitShodans();

    });

    var readList = document.getElementById("readList").addEventListener("click", function () {

        readNameList();

    });

}

//Explore Arcadia

function exploreTown(characterName) {

    characterName = localStorage.getItem("characterName");

    playerStats();

    if (characterName == "Smacka") {

        gameContent.innerHTML = '<p>You start wandering around the town, it&#39;s a lot worse than you expected! \
        The place is so run down, it&#39;s such a dump. You pass several boarded up shops with broken glass outside them. \
        Blood stains the pavement and no one makes any eye contact with you. You hear some shouting up ahead, and being a nosy bastard you go and see what&#39;s going on. </p>\
        It doesn&#39t turn out to be anything interesting though, just two local drunks having a barney and a few also drunk locals cheering them on. \
        >p>You overhear one of them mentioning a bar, and given the state of the locals you reckon that&#39;ll be a drinking hole for the scummier residents of the town. \
        Probably as good a place to start as any!</p> \
        <div class="choices"><a href="#" id="visitBar">Take a look at Shodans bar</a> <br /><br/> \
        <a href="#" id="readList">Read the list of names</a></div>';

    }

    else if (characterName == "Fortuna") {

        gameContent.innerHTML = '<p>You start wandering around the town, it&#39;s a lot worse than you expected! \
        The place is so run down, it&#39;s such a dump. You pass several boarded up shops with broken glass outside them. \
        Blood stains the pavement and no one makes any eye contact with you. You hear some shouting up ahead, and being a nosy bastard you go and see what&#39;s going on. </p>\
        It doesn&#39t turn out to be anything interesting though, just two local drunks having a barney and a few also drunk locals cheering them on. \
        >p>You overhear one of them mentioning a bar, and given the state of the locals you reckon that&#39;ll be a drinking hole for the scummier residents of the town. \
        Probably as good a place to start as any!</p> \
        <div class="choices"><a href="#" id="visitBar">Take a look at Shodans bar</a> <br /><br/> \
        <a href="#" id="readList">Read the list of names</a></div>';

    }

    else {

        gameContent.innerHTML = '<p>You start wandering around the town, it&#39;s a lot worse than you expected! \
        The place is so run down, it&#39;s such a dump. You pass several boarded up shops with broken glass outside them. \
        Blood stains the pavement and no one makes any eye contact with you. You hear some shouting up ahead, and being a nosy bastard you go and see what&#39;s going on. </p>\
        It doesn&#39t turn out to be anything interesting though, just two local drunks having a barney and a few also drunk locals cheering them on. \
        >p>You overhear one of them mentioning a bar, and given the state of the locals you reckon that&#39;ll be a drinking hole for the scummier residents of the town. \
        Probably as good a place to start as any!</p> \
        <div class="choices"><a href="#" id="visitBar">Take a look at Shodans bar</a> <br /><br/> \
        <a href="#" id="readList">Read the list of names</a></div>';

    };


    var visitBar = document.getElementById("visitBar").addEventListener("click", function () {

        visitShodans();

    });

    var readList = document.getElementById("readList").addEventListener("click", function () {

        readNameList();

    });

}

//Visit Shodans Bar

function visitShodans(characterName) {

    characterName = localStorage.getItem("characterName");

    playerStats();

        gameContent.innerHTML = '<p>There&#10076;s a sign on the door saying it doesn&#10076;t open till 6. \
        Guess you&#10076;ll just have to come back later.</p> \
        <div class="choices"><a href="#" id="exploreArcadia">See what the rest of the town has to offer</a> <br /><br/> \
        <a href="#" id="readList">Read the list of names</a></div>';

    var exploreArcadia = document.getElementById("exploreArcadia").addEventListener("click", function () {

        exploreTown();

    });

    var readList = document.getElementById("readList").addEventListener("click", function () {

        readNameList();

    });

}

//Read the list of targets

function readNameList(characterName) {

    characterName = localStorage.getItem("characterName");

    playerStats();

    gameContent.innerHTML = '<div class="deathList"><h3><u>Deathlist!</u></h3><p>The Nameless One</p> \
    <p>Gannondorf</p><p>Bowser</p><p>Kefka</p><p>Porky Minch</p><p>Sephiroth</p><p>GLaDOS</p> \
    <p>Kratos</p><p>Handsome Jack</p></div><br/> \
    <div class="choices"><a href="#" id="exploreArcadia">See what the rest of the town has to offer</a> <br /><br/> \
    <a href="#" id="visitBar">Take a look at Shodans bar</a> <br /><br/></div>';
    /*<a href="#" id="visitBar2">Go back to the Bar and decide who to track first</a>*/

    var exploreArcadia = document.getElementById("exploreArcadia").addEventListener("click", function () {

        exploreTown();

    });

    var visitBar = document.getElementById("visitBar").addEventListener("click", function () {

        visitShodans();

    });

    /*var visitBar2 = document.getElementById("visitBar2").addEventListener("click", function () {

        visitShodans2();

    });*/

}