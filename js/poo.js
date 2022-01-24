/*
    -   Création de la classe produit
    -   constructeur + attributs
*/
class Produit{
    // #numero;
    // nom;
    // designation;
    // prix;
    // stock;
    constructor(numero,nom,designation,prix,stock,date_fabri,tab_fsseur){
        this.numero = numero;
        this.nom = nom;
        this.designation = designation;
        this.prix = prix;
        this.stock = stock;
        //Objet comme attribut de classe
        this.date_fabri = date_fabri;
        //tableau comme attribut de classe
        this.tab_fsseur = tab_fsseur;
    }
    //les getteurs ou accesseurs
    getNumero(){
       return this.numero; 
    }
    getNom(){
        return this.nom;
    }
    getDesignation(){
        return this.designation;
    }
    getDateFabri(){
        return this.date_fabri;
    }
    //mutateurs ou setteurs
    setNom(nouveau_nom){
        this.nom = nouveau_nom;
    }
    setDesignation(nouvelle_designation){
        this.designation = nouveau_nom;
    }
    setPrix(nouveau_prix){
        if(nouveau_prix < 0)
            throw new Error('Le prix d\'un produit ne peut être négatif');
        this.prix = nouveau_prix;
    }
    //méthode equals : comparer deux objets
    equals(obj){
        if(obj instanceof Produit){
            return this.numero == obj.numero &&
               this.nom == obj.nom &&
               this.designation == obj.designation &&
               this.prix == obj.prix &&
               this.stock == obj.stock ;
        }else{
            return false;
        }
    }
    /*méthode toString() : retourne la représentation textuelle 
        de l'objet
    */
   toString(){
       return " Produit : { nom : "+ this.nom  +" , designation :"+ this.designation +" } ";
   }
}
//Instancier une classe
var prod1 = new Produit(1,"Misérables","Livre",25,150);
console.log(prod1);
var prod2 = new Produit(2,"Trois petits cochons","Livre",15,50);

var prod3 = new Produit(1,"Misérables","Livre",25,150);

console.log(prod2);
//accès à un attribut 
console.log(prod2.nom);
// appel d'une méthode
console.log(prod2.getDesignation());
console.log(prod1.getNom());

// prod1.setNom("Les Misérables");
// console.log(prod1.getNom());
// var i=5;j=5;
// Comparer deux objets
console.log("Les objets sont dans le même état ? "+ (prod1.equals(prod3)));

// test du toString()
console.log(prod1.toString());

document.write(prod2.toString());
let d = new Date();
document.write(d.getFullYear());
document.write(new Date());

let tabF = ["Bart","Lisa","Omer"];

// 
let prod4 = new Produit(4,"JS pour débutant","Livre",45,120,new Date(),tabF);
let prod5 = new Produit(5,"HTML5 & CSS3 pour débutant","Livre",45,120,d,new Array("Francis","Duval"));

console.log(prod4.date_fabri.getFullYear());

//
console.log(prod4.getDateFabri().getFullYear());

//récupération d'un tableau dans un objet et parcours de ce tableau

prod4.tab_fsseur.forEach(element => {
    console.log(element);
});
let t = prod4.tab_fsseur;
    t.push("Maggie");
for(let i = 0 ; i< t.length;i++){
    console.log(t[i]);
}

for(let val in t){
    console.log(val);
}

/*****************************************
 * 
 *              Héritage         
 * 
 *****************************************/

class Ordinateur extends Produit{
    constructor(numero,nom,designation,prix,stock,date_fabri,tab_fsseur,taille){
        super(numero,nom,designation,prix,stock,date_fabri,tab_fsseur);
        this.taille = taille;
    }
    getNom(){
        return "Je suis la fonction dans la classe enfant (Ordinateur)";
    }
}

let ordi = new Ordinateur(15,"HP","ordinateur Portable",1000,45,new Date(),["Simpson"],17);
console.log(ordi);

//appel de getNom()
    console.log(ordi.getNom());


/*******************************************************
 * 
 *                  Objet Littéral : JSON
 * 
 *******************************************************/

    let p = {
                numero : 12,
                nom : "Java 8",
                designation : "Livre avec excercices corrigés",
                prix : 25,
                stock :145,
                date_fabri : {
                    jour : 24,
                    mois : 1,
                    annee : 2022
                },
                fournisseurs :["Ali","Jean"],

                afficher : function () {
                    console.log("Je suis un objet Littéral");
                },
                getNom : function(){
                    return this.nom;
                }
            }   
//
p.afficher();
// Afficher la date de fabrication de l'objet p
console.log(p.date_fabri.annee);

//
console.log(p.fournisseurs[1]);

/****************************************************
 *                                                  *
 *      Création de classe par fonction             *
 *                                                  *
 ****************************************************/

function Produit2(numero,nom){
    // this.numeroProd = numero;
    var numeroProd = numero; //var rend l'attribut privé
    this.nomProd = nom;     // this rend l'attribut public

    this.getNumero = function() {
        return numeroProd;
    }
    this.getNom = function () {
        return this.nomProd;
    }
    this.setNom = function (nouveau_nom) {
        this.nomProd = nouveau_nom;
    }
}
let p2 = new Produit2(12,"JS et le DOM");
console.log(p2);
//accès aux propriétés 
console.log(p2.numeroProd); // undefined parce que l'attribut est privé
console.log(p2.getNumero());
// Test de setteur de l'approche par fonction
p2.setNom("Le DOM HTML");
console.log(p2.getNom());

// Ajout de métodes et d'attribut après la création d'une classe

Produit2.prototype.prixProd = 0; // Ajout de l'attribut prixProd dans la classe
                                //  Produit2
Produit2.prototype.getPrixProd = function() { // ajout de la méthode getPrixProd
    return this.prixProd;                     // Qui retourne le prix du produit  
}

// appel de la nouvelle méthode sur l'objet p2
console.log(p2.getPrixProd());

//Héritage avec l'approche par fonction
var ordi2 = Object.create(Produit2); 

// let ordi2 = new Ordinateur2();

console.log(ordi2);


/**************************************************
 * 
 *          Gestion des Exceptions
 *  
 ************************************************/
// console.log(k);

function divD(a,b){

    if(b==0){
        throw new Error("Division par zéro impossible");
    }

    return a/b;
}
let x =15, y=5;
try{
    console.log(divD(x,y));
}catch(err){
    console.log(err.message)
}finally{
    console.log("Quoi d'il arrive");
}

