var jeu = document.getElementById('jeu');;
var doigt = document.getElementById("doigt");
var fouet = document.getElementById("fouet");
var zidane = document.getElementById("zidane");
var loup = document.getElementById("loup");
var score = document.getElementById("score");
var gain = document.getElementById("gain");

var images = [];
images[1] = {cursor : url("images/zombiefinger.png")};
images[2] = "assets/shared/cursors/drum3.png";

var clique = 0; 
var compteur = 1; 
var fric= 0;
var prix = 20;
var prix2 = 25;
var prix3 = 30;
var prix4 = 40;


function ajoute() {
	jeu;
	clique = clique+compteur;
	score.innerHTML = clique;
	jeu = getRndInteger(0,10);	
}

function getRndInteger(min, max) {
   fric = fric+(Math.floor(Math.random() * (max - min)) + min);
   gain.innerHTML = fric;
}

function incrementer() {
			if (fric>=prix) {
			fric=fric-prix;
			prix=prix*2;
			gain.innerHTML = fric;
			 console.log(fric);
		}
		else {
			alert("Arrete de buller et clique! Il faut atteindre "+prix+" plumes pour debloquer ce bonus ;-)");
		}
		document.getElementById("b1") = images[1];
	/*	document.getElementById("b2").style.cursor = "wait";
		document.getElementById("b3").style.cursor = "wait";
		document.getElementById("b4").style.cursor = "wait";
		document.getElementById("b5").style.cursor = "wait";
		document.getElementById("b6").style.cursor = "wait";
		document.getElementById("b7").style.cursor = "wait";
		document.getElementById("b8").style.cursor = "wait";
		document.getElementById("b9").style.cursor = "wait";
		document.getElementById("b10").style.cursor = "wait";
		document.getElementById("b11").style.cursor = "wait";
		document.getElementById("b12").style.cursor = "wait";
		document.getElementById("b13").style.cursor = "wait";
		document.getElementById("b14").style.cursor = "wait";*/
}

function indianaJones() { 
	if (fric>=prix2) {
			fric=fric-prix2;
			prix2=prix2*2;
			gain.innerHTML = fric;
			fouet.value = ("Whip Me Up, before you Go-Go!");
			console.log(fric);
		}
		else {
			alert("Arrete de buller et clique! Il faut atteindre "+prix2+" plumes pour debloquer ce bonus ;-)");
		}
	
}
	
function coup2Boule() { 
	if (fric>=prix3) {
			fric=fric-prix3;
			prix3=prix3*2;
			gain.innerHTML = fric;
			zidane.value = ("Coup de boule !");
			console.log(fric);
			
		}
		else {
			alert("Arrete de buller et clique! Il faut atteindre "+prix3+" encore plus de gain pour debloquer ce bonus ;-)");
		}
	
}

function fluck() {
			fric++;
			document.getElementById("gain").innerHTML = fric;
}

function boost() {

	if (fric>=prix4) {
		setInterval("fluck()", 5000); 
		 fric=fric-prix4;
		 prix4 = prix4 *2;
		 console.log(fric);
		document.getElementById("gain").innerHTML = fric;
		}

		else
		{ 
			alert("No pain, no gain!");
		}
}

