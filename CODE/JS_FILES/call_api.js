//On récupère les données du personnage demandé
function fetchHP(character) {
    return fetch("https://hp-api.lainocs.fr/characters/" + character).then(r => r.json())
} 
//On affiche des infos de personnages dans une div "HP" après les avoir récupérés dans l'API
async function displayHP(character) {
    const data = await fetchHP(character)
    document.getElementById('HP').innerHTML = `
    <p>Félicitations, vous venez de récupérer :  <strong> ${data.name} </strong> </p> 
        <img src="${data.image}" >
    `
}

//On classe les personnages dans des listes afin de pouvoir récupérer les personnages en fonction de leurs maisons.
let packable_serpentard = ["draco-malfoy", "severus-snape", "lord-voldemort", "bellatrix-lestrange", "gregory-goyle", "vincent-crabbe", "lucius-malfoy", "doloress-umbridge"] 
let packable_gryffondor = ["harry-potter", "ron-weasley", "hermione-granger", "minerva-mcgonagall", "albus-dumbledore", "sirius-black", "neville-longbottom", "remus-lupin", "fred-weasley", "george-weasley", "ginny-weasley", "rubeus-hagrid", "peter-pettigrew"] //13
let packable_poufsouffle = ["cedric-diggory", "nymphadora-tonks"] //2
let packable_serdaigle = ["gilderoy-lockhart", "luna-lovegood", "cho-chang", "quirinus-quirrel"] //4
let packable_no_house = ["alastor-moody", "viktor-krum", "fleur-delacour"] //3

//On récupère les boutons pour créer les interactions
let pack_gratuit_serpentard = document.querySelector("#pack_gratuit_serpentard")
let pack_gratuit_gryffondor = document.querySelector("#pack_gratuit_gryffondor")
let pack_gratuit_poufsouffle = document.querySelector("#pack_gratuit_poufsouffle")
let pack_gratuit_serdaigle = document.querySelector("#pack_gratuit_serdaigle")

//Si le bouton pour les pack de serpentard existe, on ajoute l'interaction
if (pack_gratuit_serpentard != null) {
    pack_gratuit_serpentard.addEventListener("click", function (){
        packed_card("serpentard")
    })
}
//Si le bouton pour les pack de gryffondor existe, on ajoute l'interaction
if (pack_gratuit_gryffondor != null){
    pack_gratuit_gryffondor.addEventListener("click", function (){
    packed_card("gryffondor")
})
}
//Si le bouton pour les pack de poufsouffle existe, on ajoute l'interaction
if (pack_gratuit_poufsouffle != null){
pack_gratuit_poufsouffle.addEventListener("click", function (){
    packed_card("poufsouffle")
})
}
//Si le bouton pour les pack de serdaigle existe, on ajoute l'interaction
if (pack_gratuit_serdaigle != null){
pack_gratuit_serdaigle.addEventListener("click", function (){
    packed_card("serdaigle")
})
}

function packed_card(house) { //Pour gérer la page si un pack est choisi
    // On enlève le contenu principal de la page
    let main_content = document.querySelector(".content")
    main_content.style.visibility = "collapse" 

    // On affiche un bouton de confirmation
    let button_back_packs = document.querySelector("#back_to_packs")
    button_back_packs.style.visibility = "visible"

    // On affiche la div qui contiendra les informations du personnage
    let packed_card = document.getElementById("HP")
    packed_card.style.visibility = "visible"

    if (house == "serpentard") { // Si la maison est serpentard, 
        let id_generated = Math.floor(Math.random() * (packable_serpentard.length + packable_no_house.length)) // On génère un nombre aléatoire afin de choisir le personnage parmi les possibilités (Membres de serpentard et membres n'ayant pas de maisons)
        if (id_generated >= packable_serpentard.length){ // Si le numéro aléatoire correspond à un personnage n'appartenant à aucune maison
            id_generated -= packable_serpentard.length
            // On récupère dans la variable carte le nom du personnage correspondant à l'id généré
            let carte = packable_no_house[id_generated] 
            // On affiche les informations 
            displayHP(carte) 
            // On ajuste la couleur de l'ombre en fonction de la maison du personnage
            let img_perso_packed = document.getElementById("HP")
            img_perso_packed.style.filter = "drop-shadow(15px 5px 5px rgb(0, 0, 0))"
        } else {
            // On récupère dans la variable carte le nom du personnage correspondant à l'id généré
            let carte = packable_serpentard[id_generated]
            // On affiche les informations 
            displayHP(carte)
            // On ajuste la couleur de l'ombre en fonction de la maison du personnage
            let img_perso_packed = document.getElementById("HP")
            img_perso_packed.style.filter = "drop-shadow(15px 5px 5px rgb(0, 124, 0))"
        }
    } else if (house == "gryffondor") { // Si la maison est gryffondor, 
        let id_generated = Math.floor(Math.random() * (packable_gryffondor.length + packable_no_house.length)) // On génère un nombre aléatoire afin de choisir le personnage parmi les possibilités (Membres de gryffondor et membres n'ayant pas de maisons)
        if (id_generated >= packable_gryffondor.length){ // Si le numéro aléatoire correspond à un personnage n'appartenant à aucune maison
            id_generated -= packable_gryffondor.length            
            // On récupère dans la variable carte le nom du personnage correspondant à l'id généré
            let carte = packable_no_house[id_generated] 
            // On affiche les informations 
            displayHP(carte) 
            // On ajuste la couleur de l'ombre en fonction de la maison du personnage
            let img_perso_packed = document.getElementById("HP")
            img_perso_packed.style.filter = "drop-shadow(15px 5px 5px rgb(0, 0, 0))"
        } else {
            let carte = packable_gryffondor[id_generated]   
            // On affiche les informations 
            displayHP(carte)
            // On ajuste la couleur de l'ombre en fonction de la maison du personnage
            let img_perso_packed = document.getElementById("HP")
            img_perso_packed.style.filter = "drop-shadow(15px 5px 5px rgb(255, 92, 60))"
        }
    } else if (house == "poufsouffle") { // Si la maison est Poufsouffle, 
        let id_generated = Math.floor(Math.random() * (packable_poufsouffle.length + packable_no_house.length)) // On génère un nombre aléatoire afin de choisir le personnage parmi les possibilités (Membres de poufsouffle et membres n'ayant pas de maisons)
        if (id_generated >= packable_poufsouffle.length){ // Si le numéro aléatoire correspond à un personnage n'appartenant à aucune maison
            id_generated -= packable_poufsouffle.length
            // On récupère dans la variable carte le nom du personnage correspondant à l'id généré
            let carte = packable_no_house[id_generated] 
            // On affiche les informations 
            displayHP(carte) 
            // On ajuste la couleur de l'ombre en fonction de la maison du personnage
            let img_perso_packed = document.getElementById("HP")
            img_perso_packed.style.filter = "drop-shadow(15px 5px 5px rgb(0, 0, 0))"
        } else {
            let carte = packable_poufsouffle[id_generated]   
            // On affiche les informations 
            displayHP(carte)
            // On ajuste la couleur de l'ombre en fonction de la maison du personnage
            let img_perso_packed = document.getElementById("HP")
            img_perso_packed.style.filter = "drop-shadow(15px 5px 5px rgb(204, 204, 0))"
        }
    } else if (house == "serdaigle") { // Si la maison est poufsouffle, 
        let id_generated = Math.floor(Math.random() * (packable_serdaigle.length + packable_no_house.length)) // On génère un nombre aléatoire afin de choisir le personnage parmi les possibilités (Membres de Serdaigle et membres n'ayant pas de maisons)
        if (id_generated >= packable_serdaigle.length){ // Si le numéro aléatoire correspond à un personnage n'appartenant à aucune maison
            id_generated -= packable_serdaigle.length
            // On récupère dans la variable carte le nom du personnage correspondant à l'id généré
            let carte = packable_no_house[id_generated] 
            // On affiche les informations 
            displayHP(carte) 
            // On ajuste la couleur de l'ombre en fonction de la maison du personnage
            let img_perso_packed = document.getElementById("HP")
            img_perso_packed.style.filter = "drop-shadow(15px 5px 5px rgb(0, 0, 0))"
        } else {
            let carte = packable_serdaigle[id_generated]   
            // On affiche les informations 
            displayHP(carte)
            // On ajuste la couleur de l'ombre en fonction de la maison du personnage
            let img_perso_packed = document.getElementById("HP")
            img_perso_packed.style.filter = "drop-shadow(15px 5px 5px rgb(74, 74, 233))"
        }
    }
}

// On récupère notre bouton de confirmation afin de lui rajouter une interaction
let button_back_packs = document.querySelector("#back_to_packs")

button_back_packs.addEventListener("click", function(){
    // On rend de nouveau visible le contenu de la page (Les différents packs ouvrables)
    let main_content = document.querySelector(".content")
    main_content.style.visibility = "visible"
    
    // On fait disparaître le bouton de confirmation
    let button_back_packs = document.querySelector("#back_to_packs")
    button_back_packs.style.visibility = "collapse"

    // On fait disparaître les informations du personnage récupéré 
    let packed_card = document.querySelector("#HP")
    packed_card.style.visibility = "collapse"

    // On vide la div contenant les infos du personnage récupéré
    document.getElementById("HP").innerHTML=``
})

/*
fetch("https://pokeapi.co/api/v2/pokemon/1002")
.then((response) => response.json())
.then((data) => {
    console.log(data)
});


function fetchPokemon(pokemon) {
    return fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon)
    .then((response) => response.json())
}

async function displayPokemon(pokemon){
    const data = await fetchPokemon(pokemon)

    document.getElementById("pokemon").innerHTML = `
    <h1>${data.name}</h1>
    <img src ="${data.sprites.front_shiny}" alt = "${data.name}" />
    <img src ="${data.sprites.other.dream_world.front_default}" alt = "${data.name}" />
    <p>${data.description}</p>
    `;
}

displayPokemon("wailord");

fetch("https://api.themoviedb.org/3/movie/1895?api_key=a179ea27cccdd9c7b0c82839f0a5c450")
.then((response) => response.json())
.then((data) => {
    console.log(data)
});

function fetchStarWars3() {
    return fetch("https://api.themoviedb.org/3/movie/1895?api_key=a179ea27cccdd9c7b0c82839f0a5c450&language=fr-FR")
    .then((response) => response.json())
}

async function displayStarWars3(){
    const data = await fetchStarWars3()

    document.getElementById("star-wars-3").innerHTML = `
    <h1>${data.title}</h1>
    <img src ="https://image.tmdb.org/t/p/w500${data.poster_path}" alt = "${data.title}" />
    `;
}
displayStarWars3();

fetch("https://hp-api.lainocs.fr/characters/:slugharry-potter")
.then((response) => response.json())
.then((data) => {
    console.log(data)
});

fetch('https://hp-api.onrender.com/api/characters', {
   headers: {
       'Origin': 'https://hp-api.onrender.com/api/characters/:slug0'
   }
   })
   .then(response => response.json())
   .then((data) => {
    console.log(data)
});*/