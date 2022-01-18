
// Exercice 1
let prix, quantite , prixTTC;
const TTVA = 0.195;
    // prix = 15;
    // quantite = 10;
        prix = prompt("Entrer le prix ");
        quantite = prompt('Entrer la quantité');
        prix = parseFloat(prix);
        quantite = parseFloat(quantite);
        prixTTC = (quantite * prix*(1 + TTVA)); 
    console.log("le prixTTC = " + prixTTC +" euro");

// Exercice 2 
    let age = prompt("Entrer l'âge de l'enfant");
        age = parseInt(age);

        if( age >=6 && age <= 7){
            console.loge("Poussin");
        }else if(age>=8 && age <= 9){
            console.log("Pupille");
        }else if(age>=10 && age <= 11){
            console.log("Minime");
        }else if(age>=12){
            console.log("Cadet");
        }
// Exercice 4
    let nb1 = prompt("Entrer la première valeur"),
        nb2 = prompt("Entrer la deuxième valeur"),
        nb3 = prompt("Entrer la troisième valeur"),
        max;
        nb1 = parseInt(nb1);
        nb2 = parseInt(nb2);
        nb3 = parseInt(nb3);

        if(nb1 >= nb2){
            max = nb1; 
        }else{
            max = nb2;
        }
        if(nb3 >= max){
            max = nb3;
        }
        console.log('le max entre ['+nb1+','+nb2+','+nb3+'] est '+max);

// Exercice 5
let nb4 = prompt("Entrer la première valeur"),
    nb5 = prompt("Entrer la deuxième valeur"),
    nb6 = prompt("Entrer la troisième valeur"),
    borne_min,borne_max;

    nb4 = parseInt(nb4);
    nb5 = parseInt(nb5);
    nb6 = parseInt(nb6);

    if(nb5 > nb6){
        borne_max = nb5;
        borne_min = nb6;
    }else if(nb6>nb5){
        borne_max = nb6;
        borne_min = nb5;
    }else{
        borne_min = nb5;
        borne_max =nb5;
    }
    // 
    if(nb1> borne_min && nb1  < borne_max){
        console.log(nb1 + 'appartient à  ]'+borne_min +','+borne_max+'[');
    }else{
        console.log(nb1 + 'n\'appartient pas à  ]'+borne_min +','+borne_max+'[');
    }





