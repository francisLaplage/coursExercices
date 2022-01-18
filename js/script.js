
//         // Les condition
// let age = 15;
//     if( age < 0){
//         console.log("Age invalide");
//     }else{
//         console.log("Age valide");
//     }

// /*
//     condition ? valeur respecté : cas contraire
// */
//     age < 0  ? console.log("Age invalids") : console.log("Age valide");
//     (age < 18 && age > 0 ) ? console.log("Vous êtes Mineur") : console.log("Majeur");

//     if( age < 0 ){
//         console.log("Age invalide") ;
//     }else if(age<18 && age > 0){
//         console.log("Vous êtes Mineur");
//     }else{
//         console.log("Vous êtes Majeur");
//     }
            

//     // Switch case
//     let jour = 2;
//         switch (jour){
//             case 1 :
//                     console.log("Lundi");
//                      break;
//             case 2 :
//                     console.log("Mardi");
//                      break;
//             case 3 :
//                     console.log("Mercredi");
//                     // break;
//             case 4 :
//                     console.log("Jeudi");
//                     // break;
//             case 5 :
//                     console.log("Vendredi");
//                     // break;
//             case 6 :
//                     console.log("Samedi");
//                     // break;
//             case 7 :
//                     console.log("Dimanche");
//                      break;
//             default :
//                 console.log("Mauvaise Valeur");
//         }
// Les différentes boucles

        for(let i = 0,j=0 ; i< 10 || j < 9;i++, j++){
            console.log('Bonjour Mr '+ (i+1));
        } 

        let compteur = 1;

        while (compteur < 15){
            console.log('Bonjour Mme '+ (compteur));
            compteur +=1;
        }

        let b = false;
        for(let i = 0,j=0 ; i< 10 && b==false;i++, j++){
            if(j==3){
                 b = true;
            }
            console.log('Bonjour Mlle '+ (j+1));
        } 
        var somme =0;
        do{
            console.log("Bonjour  X " + somme);
            somme = somme + 1;

        }while(somme < 10);