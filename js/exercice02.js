/**Fonction elementDom 
 * permet de créer des éléments dans le DOM
 * 
 * @param   {String}      markupname 
 * @param   {String}      text 
 * @param   {elementDom}  parent 
 * @param   {Array}       attributes
 * @return  {element}
 * 
 */
function elementDom(markupname, text, parent, attributes = []) {
    const element = document.createElement(markupname);
    element.textContent = text;
    parent.appendChild(element);

    if (attributes.length) {
        attributes.forEach((attribute => {
            if (attribute.name && attribute.value) {
                element.setAttribute(attribute.name, attribute.value);
            }
        }))
    }
    return element;
}

// Création d'une balise header dans body pour y placer les boutons d'appel
const vHeader = elementDom("header", "", document.body, [{ name: "style", value: "display:flex; justify-content: space-evenly; flex-wrap: wrap;" }]);

// Création d'une balise main dans body pour y mettre les titres H1 et les paragraphes
const vMain = elementDom("main", "", document.body);

/** Création des boutons dans header avec les "id" respectifs par la fonction elementDom
 * @var {Constante} buttonCompetence    = créer le bouton Compétences
 * @var {Constante} buttonExperience    = créer le bouton Experience
 * @var {Constante} buttonFormation     = créer le bouton Formation
 * @var {Constante} contenuParagraphe   = créer le contenu du paragraphe
 */
const buttonCompetence = elementDom("button", "Compétences", vHeader, [{ name: "id", value: "btn-skills" }]);
const buttonExperience = elementDom("button", "Expérience", vHeader, [{ name: "id", value: "btn-experience" }]);
const buttonFormation = elementDom("button", "Formation", vHeader, [{ name: "id", value: "btn-training" }]);
const contenuParagraphe = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.Ut velit mauris, egestas sed, gravida nec, ornare ut, mi. Aenean ut orci vel massa suscipit pulvinar. Nulla sollicitudin. Fusce varius, ligula non tempus aliquam, nunc turpis ullamcorper nibh, in tempus sapien eros vitae ligula. Pellentesque rhoncus nunc et augue. Integer id felis. Curabitur aliquet pellentesque diam. Integer quis metus vitae elit lobortis egestas. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi vel erat non mauris convallis vehicula. Nulla et sapien. Integer tortor tellus, aliquam faucibus, convallis id, congue eu, quam. Mauris ullamcorper felis vitae erat. Proin feugiat, augue non elementum posuere, metus purus iaculis lectus, et tristique ligula justo vitae magna.Aliquam convallis sollicitudin purus. Praesent aliquam, enim at fermentum mollis, ligula massa adipiscing nisl, ac euismod nibh nisl eu lectus. Fusce vulputate sem at sapien. Vivamus leo. Aliquam euismod libero eu enim. Nulla nec felis sed leo placerat imperdiet. Aenean suscipit nulla in justo. Suspendisse cursus rutrum augue. Nulla tincidunt tincidunt mi. Curabitur iaculis, lorem vel rhoncus faucibus, felis magna fermentum augue, et ultricies lacus lorem varius purus. Curabitur eu amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.Ut velit mauris, egestas sed, gravida nec, ornare ut, mi. Aenean ut orci vel massa suscipit pulvinar. Nulla sollicitudin. Fusce varius, ligula non tempus aliquam, nunc turpis ullamcorper nibh, in tempus sapien eros vitae ligula. Pellentesque rhoncus nunc et augue. Integer id felis. Curabitur aliquet pellentesque diam. Integer quis metus vitae elit lobortis egestas. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi vel erat non mauris convallis vehicula. Nulla et sapien. Integer tortor tellus, aliquam faucibus, convallis id, congue eu, quam. Mauris ullamcorper felis vitae erat. Proin feugiat, augue non elementum posuere, metus purus iaculis lectus, et tristique ligula justo vitae magna.Aliquam convallis sollicitudin purus. Praesent aliquam, enim at fermentum mollis, ligula massa adipiscing nisl, ac euismod nibh nisl eu lectus. Fusce vulputate sem at sapien. Vivamus leo. Aliquam euismod libero eu enim. Nulla nec felis sed leo placerat imperdiet. Aenean suscipit nulla in justo. Suspendisse cursus rutrum augue. Nulla tincidunt tincidunt mi. Curabitur iaculis, lorem vel rhoncus faucibus, felis magna fermentum augue, et ultricies lacus lorem varius purus. Curabitur eu amet. `;




/**Fonction anonyme Création des contenus après clic sur le bouton Competence 
 * 
 * @var {Constante} h1Competence
 * @var {Constante} pCompetence
 * 
 */
buttonCompetence.onclick = function() {

        /** Experience
         * Test si H1 existe // si H1 existe, paragraphe aussi 
         * si oui, change les attributs en hidden pour afficher les éléments de Competence
         */
        if (document.getElementById("h1Experience") != null) {

            document.getElementById("h1Experience").setAttribute("hidden", "");
            document.getElementById("pExperience").setAttribute("hidden", "");
        }
        /** Formation
         * Test si H1 existe // si H1 existe, paragraphe aussi 
         * si oui, change les attirbuts en hidden pour afficher les éléments de Competence
         */
        if (document.getElementById("h1Formation") != null) {
            document.getElementById("h1Formation").setAttribute("hidden", "");
            document.getElementById("pFormation").setAttribute("hidden", "");
        }
        /** Competence
         * test de l'existence des contenus 
         * si non = création de H1 et paragraphe
         * si oui supprimer l'attribut Hidden
         */

        if (document.getElementById("h1Competence") == null) {
            const h1Competences = elementDom("h1", "Compétences", vMain, [{ name: "id", value: "h1Competence" }]);
            const pCompetences = elementDom("p", `Compétence ${contenuParagraphe}`, vMain, [{ name: "id", value: "pCompetence" }]);

        } else if (document.getElementById("h1Competence") != null) {
            document.getElementById("h1Competence").removeAttribute('hidden');
            document.getElementById("pCompetence").removeAttribute('hidden');
            console.log("ok competence");

        }


    }
    /**Fonction anonyme Création des contenus après clic sur le bouton Experience
     * 
     * @var {Constante} h1Experience
     * @var {Constante} pExperience
     * 
     */
buttonExperience.onclick = function() {

        /** Competence
         * Test si H1 existe // si H1 existe, paragraphe aussi 
         * si oui, change les attirbuts en hidden pour afficher les éléments de Experience
         */
        if (document.getElementById("h1Competence") != null) {
            document.getElementById("h1Competence").setAttribute("hidden", "");
            document.getElementById("pCompetence").setAttribute("hidden", "");
        }
        /** Formation 
         * Test si H1 existe // si H1 existe, paragraphe aussi 
         * si oui, change les attirbuts en hidden pour afficher les éléments de Experience
         */
        if (document.getElementById("h1Formation") != null) {
            document.getElementById("h1Formation").setAttribute("hidden", "");
            document.getElementById("pFormation").setAttribute("hidden", "");
        }


        /** Experience
         * test de l'existence des contenus 
         * si non = création de H1 et paragraphe
         * si oui supprimer l'attribut Hidden
         */
        if (document.getElementById("h1Experience") == null) {
            const h1Experience = elementDom("h1", "Experience", vMain, [{ name: "id", value: "h1Experience" }]);
            const pExperience = elementDom("p", `Experience ${contenuParagraphe}`, vMain, [{ name: "id", value: "pExperience" }]);
        } else if (document.getElementById("h1Experience") != null) {

            document.getElementById("h1Experience").removeAttribute('hidden');
            document.getElementById("pExperience").removeAttribute('hidden');
        }
    }
    /**Fonction anonyme Création des contenus après clic sur le bouton Formation
     * 
     * @var {Constante} h1Formation
     * @var {Constante} pFormation
     * 
     */

buttonFormation.onclick = function() {

    /** Competence
     * Test si H1 existe // si H1 existe, paragraphe aussi 
     * si oui, change les attirbuts en hidden pour afficher les éléments de formation
     */
    if (document.getElementById("h1Competence") != null) {
        document.getElementById("h1Competence").setAttribute("hidden", "");
        document.getElementById("pCompetence").setAttribute("hidden", "");
    }

    /** Experience
     * Test si H1 existe // si H1 existe, paragraphe aussi
     * si oui, change les attributs en hidden pour afficher les éléments de formation
     */
    if (document.getElementById("h1Experience") != null) {
        document.getElementById("h1Experience").setAttribute("hidden", "");
        document.getElementById("pExperience").setAttribute("hidden", "");
    }

    /** Formation
     * test de l'existence des contenus 
     * si non = création de H1 et paragraphe
     * si oui supprimer l'attribut Hidden
     */
    if (document.getElementById("h1Formation") == null) {
        const h1Experience = elementDom("h1", "Formation", vMain, [{ name: "id", value: "h1Formation" }]);
        const pExperience = elementDom("p", `Formation ${contenuParagraphe}`, vMain, [{ name: "id", value: "pFormation" }]);
    } else if (document.getElementById("h1Formation") != null) {
        document.getElementById("h1Formation").removeAttribute('hidden');
        document.getElementById("pFormation").removeAttribute('hidden');
    }

}