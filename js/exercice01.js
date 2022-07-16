//EXERCICE01

const p = document.querySelector("p");
p.setAttribute('hidden', '');
window.onload = function() {
    let saisie = prompt("Voulez-vous voir le contenu de cette page ", "O/N");
    if (saisie.toUpperCase() == "O") {
        p.removeAttribute('hidden');
    } else {
        let saisie = prompt("Voulez-vous voir le contenu de cette page ", "O/N");
    }

}