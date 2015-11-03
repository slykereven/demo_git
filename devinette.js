/* 
Activité : gestion des contacts
*/

// TODO : complétez le programme
var contacts = [
	["Carole", "Lévisse"],
	["Mélodie", "Nelsonne"]
];

var menu = Number(prompt("Faites votre choix :\n1- Afficher la liste\n2- Ajouter contact\n0- quitter"));

function ajouter() {
	
}

if (menu === 1) {
	for (i = 0; i < contacts.length; i++) {
		console.log(contacts[i][0] + " " + contacts[i][1]);
	};
} else if (menu === 2) {
	//function ajouter();
} else {
	console.log("Au revoir !");
}
