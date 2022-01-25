// Exercice

class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    afficher(){
        document.write("Point | x : " + this.x + " | y : " + this.y +"<br>");
    }
    translater(tx,ty){
        this.x = this.x + tx;
        this.y = this.y + ty;
    }
    equals(objPoint){
        if(objPoint instanceof Point){
            return this.x == objPoint.x &&
                   this.y == objPoint.y ;  
        }else{
            return false;
        }
    }
}
/**************Fin de la Classe Point*******************/

class Compte{
    constructor(somme,taux){
        this.somme = somme;
        this.taux = taux;
    }
    afficher(){
        document.write("Compte | somme : " + this.somme +" € | taux : " +this.taux +" % <br>");
    }
    depot(x){
        if(x>0)
            this.somme = this.somme + x;
    }
    retrait(x){
        if(x > this.somme){
            throw new Error('Le solde de votre ne peut être négatif');
        }
        this.somme = this.somme - x ; //this.somme -=x;
    }
    interets(){
        let interet = (this.taux * this.somme)/100;
        //Ajout des intérêts au slode( somme)
        this.somme +=interet; // this.somme = this.somme + interet;
    }
}
/*****************************Fin de la classe Compte*****************/

class CompteEpargne extends Compte{
    constructor(somme,taux,type,titulaire){
        super(somme,taux);
        this.type= type;
        this.titulaire = titulaire;
    }
    afficher(){
        document.write("Compte | somme :" + this.somme +" € | taux : "
                +   this.taux +" %  | type : " + this.type +" | titulaire : " + this.titulaire +"<br>");
    }
}
/******************************Fin de la classe CompreEpargne*********/
class DateFrancis{
    constructor(jour,mois,annee){
        this.jour = jour;
        this.mois = mois;
        this.annee = annee;
    }
    // getteurs
    getJour(){
        return this.jour;
    }
    getMois(){
        return this.mois;
    }
    getAnnee(){
        return this.annee;
    }
    // Setteurs
    setJour(nouveau_jour){
        if(nouveau_jour > 0 && nouveau_jour <= 31)
            this.jour = nouveau_jour;
    }
    setMois(nouveau_mois){
        if(nouveau_mois > 0 && nouveau_mois <=12)
            this.mois = nouveau_mois;
    }
    setAnnee(nouvelle_annee){
        if(nouvelle_annee > 0)
            this.annee = nouvelle_annee;
    }
    // toString()
    toString(){
        return this.jour +"/"+this.mois+"/"+this.annee;
    }
}
/****************Fin de la classe DateFrancis ****************/
class Personne{
    constructor(nom,prenom,date_nais){
        this.nom = nom;
        this.prenom =prenom;
        this.date_nais = date_nais;
    }
    // getteurs
    getNom(){
        return this.nom;
    }
    getPrenom(){
        return this.prenom;
    }
    getDateNais(){
        return this.date_nais;
    }
    //Setteurs
    setNom(nouveau_nom){
        this.nom = nouveau_nom;
    }
    setPrenom(nouveau_prenom){
        this.prenom = nouveau_prenom;
    }
    setDateNais(nouvelle_date_nais){
        this.date_nais = nouvelle_date_nais;
    }
    // toString
    toString(){
        return "Personne { nom : " + this.nom +" prenom :" + this.prenom +
                          " date_nais : " + this.date_nais.toString() + "}";
    }
}

// les Anniversaires
var anniversaire = function () {
    let suite =0,nom,prenom,j,m,a ,cpte=0;
    let tabNom = new Array();
    do{
        nom = prompt("Entrez le nom");
        prenom = prompt("Entrez le prenom");
        j = prompt("Entrez le jour de naissance");
        m = prompt("Entrez le mois de naissance");
        a = prompt("Entrez l' année de naissance");
        let p = new Personne(nom,prenom,new DateFrancis(j,m,a));
        if(p.date_nais.getMois() == 1){
                cpte +=1;
                tabNom.push(p.getNom());
        }       
        suite = parseInt(prompt("Souhaitez vous continuer la saisie des Personnes ?"));
    }while(suite > 0);
    document.write("<br>Nombre de personnes nées en Janvier : " + cpte);
    for(let index in tabNom){
        document.write("<br> Nom : " + tabNom[index]);
    }
}

anniversaire();












/******************************************************/
//Test de la classe Point (instancier) des objet
let p1 = new Point(2,5);
    p1.afficher();
let p2 = new Point(1,4);
    p2.afficher();
let p3 = new Point(5,6);
    p3.afficher();

// test de la méthode translater sur p1
    p2.translater(1,1);
    p2.afficher();
// appel de equals
console.log("P1 est égale P 2 ? " + p1.equals(p2));


// Test de la classe Compte
    let c1 = new Compte(1000,6);
        c1.afficher();
    // test de la méthode dépôt
        c1.depot(100);
        c1.afficher();
    // Test de la méthode retrait
        c1.retrait(50);
        c1.afficher();
    //  Test de la méthode Intérêts
        c1.interets();
        c1.afficher();
// Test de l'héritage sur la classe CompteEpargne
    let ce = new CompteEpargne(500,6,"Epargne","Simpson Bart");
        ce.afficher();


// Test de la classe date 
    let d1 = new DateFrancis(25,1,2022);
       document.write(d1.toString() +"<br>");

       d1.setJour(12);
       document.write(d1.toString());


// Test de la classe Personne
    let durant = new Personne("Durant","Zébulon",new DateFrancis(1,2,1980));

    document.write("<br>" + durant.toString());