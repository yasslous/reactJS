let livres = [{ id: 10, titre: 'POO', auteur: 'RAMI', prix: 300 },
{ id: 11, titre: 'JS ES6', auteur: 'FAMI', prix: 230 },
{ id: 12, titre: 'Algorithme', auteur: 'KARIMI', prix: 330 },
{ id: 13, titre: 'HTML&CSS', auteur: 'RAMI', prix: 340 }];
//Créer la liste titres contenant tous les titres de livre
let titres = livres.map(livre => livre.titre);
console.log(titres);
//Créer la liste titreRAMI contenat tous les livres de l'auteur 'RAMI'
let titresRAMI = livres.filter(livre => livre.auteur == 'RAMI').map(livre => livre.titre);
console.log(titresRAMI);
//chercher le livre dont l'id est égale à 12
let livre = livres.find(livre => livre.id == 12);
console.log(livre);
//calculer le total des prix
let _total = livres.reduce((total, livre) => total += livre.prix, 0);
console.log(_total);
//créer  un  array mesLivres copie de livres
let mesLivres = livres;
console.log(mesLivres);





