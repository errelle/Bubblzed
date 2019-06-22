/* $=variable js*/ /*''id html*/

var gain = document.getElementById('gain');
var score = document.getElementById('score');
var doigt = document.getElementById('doigt');
var affichage = document.getElementById('affichage');
var fouet =document.getElementById('fouet');
var zizou =document.getElementById('zizou');
var loup =document.getElementById('loup')
var compteur =1;
var score=0;
var prix=5;
var achat=20;
var comptsold=1;

// formule pour attribution aléatoire du gain
Math.floor(Math.random() * variable lot) + 1 =  document.getElementById("id").innerHTML; 

//compteur//
function cliquer() {
score=score+compteur;
affichage.innerHTML=score;

}
$bouton.addEventListener('click', cliquer);/*dans la fonction il y a l'évènement et dans l'évènement () on appelle la fonction*/

function incrementer() {
	
		if (score>=prix) {
			score=score-prix;
			compteur++;
			prix=prix*2;
			$affichage.innerHTML = +score;
			$multiplicateur.innerHTML = 'multiplicateur x ' + compteur +'prochain achat'+prix;
		}
		else {
			alert('ne fait pas crédit');
		}
	
}
$multiplicateur.addEventListener('click',incrementer); /*dans () il y a lle type d'event + la function qui doit être appeler*/

$solde.addEventListener('click',solder);
function solder(){
		
	if (score>=achat){
		score=score-achat;
		achat=achat*2;
		comptsold++;
		intervalId = setInterval ("boost()",1000);
		$solde.innerHTML= comptsold+'e achat:'+ achat;
	}else{
		alert("ne fait pas crédit");
	}
}

function boost(){
	score++;
	$affichage.innerHTML = +score;

}
