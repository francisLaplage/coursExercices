// Window représente le navigateur
console.log(window);
// l'objet document représenta la page
console.log(document);

//1-     Sélection d'élément par son id

console.log(document.getElementById("introduction"));

let p = document.getElementById("introduction");
// Afficher le contenu de l'élement
    // console.log(p.innerText);
    console.log(p.innerHTML);
// Modification du contenu d'un élément
    // p.innerText = "Bonjour à tous Et bienvenue !";
    // console.log(p.innerText);
    p.innerHTML = "<strong> Bonjour </strong> à tous Et bienvenue !";
    console.log(p.innerText);
//2-    Sélection d'éléments par le nom de 

let tabP = document.getElementsByTagName('p');

    console.log(document.getElementsByTagName('p'));
    //accès à un élément précis du tableaux
    console.log(document.getElementsByTagName('p')[1]);

    tabP[1].innerText = "Nouveau Text du Paragraphe 1";
    console.log(tabP[1].innerText);

//3-    Sélection d'élément par la classe

    console.log(document.getElementsByClassName("p1"));

// 4-   Sélection d'élément par le sélecteur css

    // - querySelector
    console.log(document.querySelector('#introduction'));
    // -querySelectorAll
    console.log(document.querySelectorAll('li a'));
//5-    Sélection des attribut
    let a = document.querySelectorAll('li a');
    for(let i =0; i<a.length;i++){
        a[i].setAttribute("href","http://www.google.fr");
    }
//6-    Modification du style d'un élément
    console.log(document.querySelector('p').style);

    document.querySelector('p').style.backgroundColor ="#FF0000";
    document.querySelector('p').style.border="2px solid #000";
//7-    Récupération de la liste des classes d'un élément

    console.log(document.querySelectorAll('p')[1].classList);

//8-    Ajout d'une classe à un élément
document.querySelectorAll('p')[1].classList.add('text-blue');

//9-    Suppression d'une classe
document.querySelectorAll('p')[1].classList.remove('text-blue');

//10-   Création d'un élément (ou d'un noeud)
    var elt = document.createElement('h2');
    //10-a création d'un noeud text ( contenu d'un élément)
    var contenuElt = document.createTextNode("Formation DOM HTML");
    //10-b liaison de l'élément et du contenu
        elt.appendChild(contenuElt);
    //10-c Ajout de cet élément dans le dom a la fin de l'élément body
        document.body.appendChild(elt);
    // 10-d Insérer l'élément au début de l'élément body
    document.body.insertBefore(elt,document.body.firstChild);
/*******************************************************************
 * 
 *              Gestion d'événements
 *               - 1 : élément
 *               - 2 : événement
 *               - 3 : écouteur d'événement
 *               - 4 : liaison de l'élément avec écouteur 
 * ***************************************************************/
    let btn1 = document.querySelectorAll('input')[0],
        btn2 = document.querySelectorAll('input')[1];

   // écouteur d'événement     
    function presenteBtn(){
        if(this.getAttribute("value")=="Insert"){
            console.log("Clic sur le bouton Insert")
        }else if(this.getAttribute("value")=="Update"){
            console.log("Clic sur le bouton Update")
        }
    }
    //liaison élément écouteur d'événement
    // btn1.addEventListener("click",function () {
        
    //     console.log("Clic sur le bouton btn1");

    // });
    // btn2.addEventListener('click',presenteBtn);
        btn1.addEventListener("click",presenteBtn);
        btn2.addEventListener("click",presenteBtn);
