///Déclaration des variables pour avoir une portée dans toutes les fonctions

const bouton = document.getElementById("valider");
const choixPays = document.getElementById("choix");
const trouve = document.getElementById("trouve");
const saisie = document.getElementById("saisie");
let ville = document.querySelector("form");
let villeValue = "";
let tailleFiltre = 0;
let nombreUniversite = 0;
console.log(ville);
const nontrouve = document.getElementById("nontrouve");
universite.setAttribute("hidden", "");
trouve.setAttribute('hidden', '');
nontrouve.setAttribute('hidden', '');
saisie.setAttribute('hidden', '');

let donneesUniversite = [];


/**Fonction anonyme pour valider le select -> option
 * 
 * 
 */
bouton.onclick = () => {

    //on cache le message qui s'affiche si  on trouve quelque chose
    trouve.setAttribute('hidden', '');
    //on cache le message qui s'affiche si  on ne trouve pas
    nontrouve.setAttribute('hidden', '');
    //on cache le masque de saisie qui servira si on a plus de 50 unniversités
    saisie.setAttribute('hidden', '');
    ///paramétrage pays pour l'url
    let pays = choixPays.value.toUpperCase();
    if (pays == "ALLEMAGNE") paysUrl = "GERMANY";
    if (pays == "ANDORRE") paysUrl = "ANDORRA";
    if (pays == "FRANCE") paysUrl = "FRANCE";

    //Création de l'Url pour la requête
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
            nbreUniversite.innerHTML = `Nombre d'universités en ${pays} : ${nombreUniversite}`;
            donneesUniversite = data;

            if (nombreUniversite < 50) {
                console.log("tokana");
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
                    saisie.setAttribute("hidden", "");
                    trouve.setAttribute("hidden", "");
                }
                // si tailleFiltre est inférieure à 50, affichage des universités du filtre
                filtre.forEach((element) => {
                    afficheUniversite(element);
                });

            } else {
                //le masque de saisie du filtre sort
                saisie.removeAttribute('hidden', '');
            }

        }) // si quelque chose a échoué, on affiche le message 
        .catch((error) => {
            nontrouve.removeAttribute('hidden');

        })

}

/**Fonction anonyme permettant de gérer le changement de statut 
 * pour chaque changement enregistré du formulaire de filtre, appel à la fonction anonyme
 * 
 */
ville.onchange = () => {

    document.getElementById("universite").innerHTML = "";

    // on détermine le filtre désiré par l'utilisateur
    villeValue = document.getElementById("ville").value;
    console.log("villeValue 1", villeValue);
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
            saisie.setAttribute("hidden", "");
            trouve.setAttribute("hidden", "");
        }
        // si Filtre est inférieure à 50, affichage des universités du filtre
        filtre.forEach((element) => {

            afficheUniversite(element);



        });

    }
    //Test longueur nom de ville saisie, si < 2 , on ne fait rien
    else if (villeValue.length < 2) {}

}

/**
 * fonction qui crée un élément du DOm et le retourne
 * @param {String} markupname 
 * @param {String} text 
 * @param {DomElement} parent 
 * @param {Object} attributes
 * @return {DomElement}
 */
function createDOMElement(markupname, text, parent, attributes = []) {
    const dom_element = document.createElement(markupname);
    dom_element.textContent = text;
    parent.appendChild(dom_element);

    if (attributes.length) {
        attributes.forEach((attribute => {
            if (attribute.name && attribute.value) {
                dom_element.setAttribute(attribute.name, attribute.value);
            }
        }))
    }
    return dom_element;
}



/**Function permettant d'afficher les éléments récupérés sous forme de tableau
 * 
 * @param {element } element
 * 
 * 
 */

function afficheUniversite(element) {
    universite.removeAttribute("hidden");
    const tableElement = createDOMElement("table", "", document.getElementById("universite"));

    const trNomElement = createDOMElement("tr", "", tableElement, []);
    const tdNomElement = createDOMElement("td", "Université : " + element.name, trNomElement, []);

    const trUrlElement = createDOMElement("tr", "", tableElement, []);
    const tdUrlElement = createDOMElement("td", "Site web : " + element.web_pages, trUrlElement, []);
}