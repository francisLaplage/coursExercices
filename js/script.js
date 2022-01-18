
        // Les condition
let age = 15;
    if( age < 0){
        console.log("Age invalide");
    }else{
        console.log("Age valide");
    }

/*
    condition ? valeur respecté : cas contraire
*/
    age < 0  ? console.log("Age invalid") : console.log("Age valide");
    (age < 18 && age > 0 ) ? console.log("Vous êtes Mineur") : console.log("Majeur");

    if( age < 0 ){
        console.log("Age invalide") ;
    }else if(age<18 && age > 0){
        console.log("Vous êtes Mineur");
    }else{
        console.log("Vous êtes Majeur");
    }
            