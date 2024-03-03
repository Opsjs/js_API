let formulaire = document.querySelector("#formulaire_inscription");

let mail = document.querySelector("#email");
let nom = document.querySelector("#nom");
let ville = document.querySelector("#ville");
let prenom = document.querySelector("#prenom");
let adresse = document.querySelector("#adresse");
let code_postal = document.querySelector("#code_postal");
let pays = document.querySelector("#country");
let mdp = document.querySelector("#mdp");
let confirmation_mdp = document.querySelector("#confirmation_mdp")
//On récupère les valeurs du formulaire

let log_erreurs = document.querySelector("#log_erreurs");
let confirmation = document.querySelector("#confirmation");
let footer = document.querySelector("#contact");
//on récupère les div à modifier dans les différents cas possibles avec le formulaire.

formulaire.addEventListener("submit", function(event) { //Quand le formulaire est soumis.
    event.preventDefault();
    log_erreurs.innerHTML = "";

    let isArobaseInMail = false;
    for (let i = 0; i<mail.value.length; i++) {
        if (mail.value[i] == "@") {
            isArobaseInMail = true;
        }
    } // le booléen isArobaseinMail donne true si un @ est dans le champ de l'Email et false dans le cas échéant.

    if (isArobaseInMail) {
        mail.style.backgroundColor = "lime";// Si le champ est correctement renseigné, on le colore en vert pour faire comprendre à l'utilisateur que ce champ est correct.
    } else {
        mail.style.backgroundColor = "red";
        log_erreurs.innerHTML += "<div> <strong>Email</strong> : Format non valide.</div>"
    } //Sinon, on le colore en rouge et on indique l'erreur à l'utilisateur.

    if (nom.value.length < 2) { // Si le champ fait moins de 2 caractères, on signale l'erreur à l'utilisateur avec un message d'erreur et en coloriant la champ en rouge.
        log_erreurs.innerHTML += "<div> <strong>Nom</strong> : Nombre de caractères insuffisants. </div>"
        nom.style.backgroundColor = "red"; 
    } else {
        nom.style.backgroundColor = "lime";
    }

    if (ville.value.length < 2) {// Si le champ fait moins de 2 caractères, on signale l'erreur à l'utilisateur avec un message d'erreur et en coloriant la champ en rouge.
        log_erreurs.innerHTML += "<div> <strong>Ville</strong> : Nombre de caractères insuffisants. </div>"
        ville.style.backgroundColor = "red";
    } else { // S'il n'y a pas d'erreurs, on colorie le champ en vert pour faire comprendre à l'utilisateur que l'erreur n'est pas dans ce champ.
        ville.style.backgroundColor = "lime";
    }
    if (prenom.value.length < 2) {// Si le champ fait moins de 2 caractères, on signale l'erreur à l'utilisateur avec un message d'erreur et en coloriant la champ en rouge.
        log_erreurs.innerHTML += "<div> <strong>Prénom</strong> : Nombre de caractères insuffisants. </div>"
        prenom.style.backgroundColor = "red";
    } else { // S'il n'y a pas d'erreurs, on colorie le champ en vert pour faire comprendre à l'utilisateur que l'erreur n'est pas dans ce champ.
        prenom.style.backgroundColor = "lime";
    }
    if (adresse.value.length < 2) {// Si le champ fait moins de 2 caractères, on signale l'erreur à l'utilisateur avec un message d'erreur et en coloriant la champ en rouge.
        log_erreurs.innerHTML += "<div> <strong>Adresse</strong> : Nombre de caractères insuffisants. </div>"
        adresse.style.backgroundColor = "red";
    } else { // S'il n'y a pas d'erreurs, on colorie le champ en vert pour faire comprendre à l'utilisateur que l'erreur n'est pas dans ce champ.
        adresse.style.backgroundColor = "lime";
    }

    if (code_postal.value.length != 5) {// Si le champ ne fait pas précisément 5 caractères, on signale l'erreur à l'utilisateur avec un message d'erreur et en coloriant la champ en rouge.
        log_erreurs.innerHTML += "<div> <strong>Code postal</strong> : Format non valide. </div>"
        code_postal.style.backgroundColor = "red";
    } else { // S'il n'y a pas d'erreurs, on colorie le champ en vert pour faire comprendre à l'utilisateur que l'erreur n'est pas dans ce champ.
        code_postal.style.backgroundColor = "lime";
    }

    //mot de passes

    if (mdp.value == confirmation_mdp.value ) { // Si les mots de passe sont identiques, on colorie les boites en vert
        mdp.style.backgroundColor = "lime";
        confirmation_mdp.style.backgroundColor = "lime";
    } else  { //Si les mots de passe ne sont pas identiques, on renvoie un message d'erreur et on colorie les boites en rouge.
            log_erreurs.innerHTML += "<div> <strong>Mot de Passe</strong> : Les mots de passe ne sont pas identiques. </div>"
            mdp.style.backgroundColor = "red";
            confirmation_mdp.style.backgroundColor = "red";
    }
    let letter = false; //on crée un booléen qui sert à faire remonter si le mot de passe contient des lettres.
    let number = false; //on crée un booléen qui sert à faire remonter si le mot de passe contient des nombres.
    for (let i =0; i < mdp.value.length; i++) {
        if ("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(mdp.value[i])) {
            letter = true; //letter devient true si le mot de passe contient une lettre.
        } else if ("0123456789".includes(mdp.value[i])){
            number = true; //number devient true si le mot de passe contient un chiffre.
        }
    }
    if (letter == false) { // Si le mot de passe ne contient pas de lettres, on renseigne l'erreur et on colorie les boîtes en rouge.
        log_erreurs.innerHTML += "<div> <strong>Mot de Passe</strong> : Veuillez intégrer des lettres dans votre mot de passe. </div>"
        mdp.style.backgroundColor = "red";
        confirmation_mdp.style.backgroundColor="red";
    }
    if (number == false) { // Si le mot de passe ne contient pas de chiffres, on renseigne l'erreur et on colorie les boîtes en rouge.
        log_erreurs.innerHTML += "<div> <strong>Mot de Passe</strong> : Veuillez intégrer des chiffres dans votre mot de passe. </div>"
        mdp.style.backgroundColor = "red";
        confirmation_mdp.style.backgroundColor="red";
    }
    if (mdp.value.length < 6) {// Si le champ fait mois de 6 caractères, on signale l'erreur à l'utilisateur avec un message d'erreur et en coloriant la champ en rouge.
        log_erreurs.innerHTML += "<div> <strong>Mot de Passe</strong> : Nombre de caractères insuffisants. </div>"
        mdp.style.backgroundColor = "red";
        confirmation_mdp.style.backgroundColor="red";
    }

    
    if (log_erreurs.innerHTML == "") { // S'il n'y a pas d'erreurs dans le formulaire, 
        formulaire.style.display = "none"; // On le fait disparaître.
        confirmation.innerHTML = "Formulaire envoyé avec succès !"; // On affiche un message de confirmation à l'utilisateur pour l'informer du bon envoi de son formulaire.
        footer.style.marginTop = "460px"; // On ajuste la distance nécéssaire pour que le footer ne sois pas en milieu de page.
    }

})