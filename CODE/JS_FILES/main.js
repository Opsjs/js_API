let button = document.querySelector("#menu_button");

button.addEventListener("click", function(){
    let menu_deroulant = document.querySelector("#menu_content");
    if (menu_deroulant.style.visibility != "visible"){ //Si le menu burger n'est pas visible, on l'affiche.
        menu_deroulant.classList.toggle("open");
        menu_deroulant.style.visibility = "visible";
    } else { //sinon (le menu est visible), on le retire.
        menu_deroulant.classList.toggle("open");
        menu_deroulant.style.visibility = "collapse";
    }
});