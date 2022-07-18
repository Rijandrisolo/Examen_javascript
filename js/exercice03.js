const bouton = document.getElementById("valider");
const choixPays = document.getElementById("choix");
let trouve = document.getElementById("trouve");
let saisie = document.getElementById("saisie");
const ville = document.querySelector("form");
let nombreUniversite = 0;
console.log(ville);
let nontrouve = document.getElementById("nontrouve");
trouve.setAttribute('hidden', '');
nontrouve.setAttribute('hidden', '');
saisie.setAttribute('hidden', '');

let donneesUniversite = [];


bouton.onclick = () => {
        let pays = choixPays.value.toUpperCase();
        if (pays == "ALLEMAGNE") paysUrl = "GERMANY";
        if (pays == "ANDORRE") paysUrl = "ANDORRA";
        if (pays == "FRANCE") paysUrl = "FRANCE";
        saisie.setAttribute('hidden', '');

        url = `http://universities.hipolabs.com/search?country=${paysUrl}`;
        console.log(url);

        let donnees = fetch(url)
            .then(reponse => {

                if (reponse.status == 200) {
                    trouve.removeAttribute('hidden');
                    return reponse.json();
                } else {
                    nontrouve.removeAttribute('hidden');

                }
            })
            .then(data => {
                const nombreUniversite = Object.keys(data).length;
                nbreUniversite.innerHTML = `Nombre d'universités en ${pays} : ${nombreUniversite}`; //+ Object.keys(data).length;
                donneesUniversite = data;
                //console.log(donneesUniversite);
                if (nombreUniversite < 50) {
                    //Affichage des universités
                    afficheUniversite();

                } else {
                    //le masque de saisie du filtre sort
                    saisie.removeAttribute('hidden', '');
                }

            }) // si quelque chose a échoué, on l'affiche de manière détaillée
            .catch((error) => {
                nontrouve.removeAttribute('hidden');

            })

    }
    // pour chaque changement enregistré du formulaire de filtre, appel à la fonction qui suit
ville.onchange = () => {

    document.getElementById("universite").innerHTML = "";

    // on détermine le filtre désiré par l'utilisateur
    let villeValue = document.getElementById("ville").value;
    console.log(villeValue);
    // Vérification taille du filtre (filtre>=2)
    if (villeValue.length >= 2) {
        // filtrer la liste que l'on a enregistré
        let filtre = donneesUniversite.filter(
            element => {
                if (element.name.search(villeValue) != -1) return 1;
                else { return 0; }
            }
        );

        //Taille du résultat de ce filtre
        tailleFiltre = Object.keys(filtre).length;
        console.log("filtre", tailleFiltre);
        //Si tailleFiltre = 0 -> aucune donnée, on affiche le message    
        if (tailleFiltre == 0) {

            nontrouve.removeAttribute("hidden");
        }
        // si tailleFiltre est inférieure à 50, affichage des universités du filtre
        filtre.forEach((element) => {
            for (let i = 0; i < 20; i++) {
                console.log(i);
                console.log("element", element);
                afficheUniversite();
            }
        });
    }
    //Si taillefiltre est supérieure ou égale à 50, on affichera 50 universités du filtre
    else {
        filtre.forEach((element) => {
            for (let i = 0; i < 50; i++) {
                console.log(element);
                afficheUniversite();
            }
        });

    }

}