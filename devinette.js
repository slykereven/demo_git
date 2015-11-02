/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
console.log("(La solution est " + solution + ")");

// TODO : complétez le programme
var essai = 0;

for (i = 1; i <= 6; i++) {
	if (essai <= 6) {
		var reponse = Number(prompt("Votre nombre ?"));
		if (reponse < solution) {
			console.log(reponse + " est trop petit !");
			console.log("essai n° " + i + "/6");
		} else if (reponse > solution) {
			console.log(reponse + " est trop grand !");
			console.log("essai n° " + i + "/6");
		} else {
			console.log("Bravo " + solution + " est le bon nombre ! :)");
		};
	} else {
	console.log("Vous avez perdu :(");
	};
}
