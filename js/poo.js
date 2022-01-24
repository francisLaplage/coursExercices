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