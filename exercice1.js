//crèer la classe Document contenant les attributs id et dateEdition
class Document {
    constructor(id, dateEdition) {
        this.id = id;
        this.dateEdition = dateEdition;
    }
}
//crèer la classe Livre qui hèrite de la classe Document contenat
//en plus les attributs titre et auteur
class Livre extends Document {
    constructor(id, dateEdition, titre, auteur) {
        super(id, dateEdition);
        this.titre = titre;
        this.auteur = auteur;
    }
    infoLivre() {
        return `Livre  : id : ${this.id} titre :${this.titre} Auteur : ${this.auteur} date Edition :${this.dateEdition} `

    }
}
//crèer deux instances de Document
let doc1 = new Document(1, "10/10/2022");
let doc2 = new Document(2, "10/05/2022");
//crèer troins instances de Livre
let livre1 = new Livre(3, "06/06/2022", "POO", "RAMI");
let livre2 = new Livre(4, "06/06/2022", "HTML CSS", "RAMI");
let livre3 = new Livre(5, "06/06/2022", "Python", "RAMI");
//crèer la mèthode infoLivre  qui retourne les informations du livre par exemple :
//Livre  : id : 10 titre :POO Auteur : Rami date Edition :10/05/2022
console.log(livre1.infoLivre());

