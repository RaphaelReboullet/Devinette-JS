/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme

let proposition = '';
let tentative = 0;
while (proposition !== solution && tentative < 7) {
    proposition = parseInt(prompt('Veuillez entrer un nombre entre 1 et 100'));
    tentative++;
    if (proposition > solution) {
        console.log(proposition + ' est trop grand')
    } else if (proposition < solution) {
        console.log(proposition + ' est trop petit')
    } else if (proposition === solution) {
        console.log('Bravo ! La solution était ' + solution)
    } else {
        console.log('Veuillez entrer un nombre entre 1 et 100')
    }
}