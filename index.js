// 
// SELECTIONNER UN ÉLÉMENT DU DOM
// 

// document.querySelector() permet de sélectionner le premier élément HTML qui correspond au sélecteur
// Ici on sélectionne la balise <body> (le corps de la page)
// On stocke cette référence dans une constante 'bodyElement'
const bodyElement = document.querySelector("body");

// 
// AJOUTER UN ÉCOUTEUR D'ÉVÉNEMENT
// 

// addEventListener() = "ajouter un auditeur d'événement"
// Premier paramètre : "mousemove" = l'événement à écouter (quand la souris bouge)
// Deuxième paramètre : une fonction fléchée qui s'exécute À CHAQUE FOIS que la souris bouge
// 'event' contient toutes les infos sur le mouvement (position, etc.)
bodyElement.addEventListener("mousemove", (event) => {
    
    // 
    // RÉCUPÉRER LA POSITION DE LA SOURIS
    // 
    
    // ATTENTION : offsetX/offsetY donne la position par RAPPORT À L'ÉLÉMENT CIBLÉ
    // Ici, c'est par rapport au body (donc équivalent à clientX/clientY car body prend toute la page)
    // Pour un novice : ça fonctionne mais clientX/clientY serait plus clair
    const xPos = event.offsetX;  // Position horizontale de la souris (en pixels)
    const yPos = event.offsetY;  // Position verticale de la souris (en pixels)
    
    // 
    // CRÉER UN NOUVEL ÉLÉMENT HTML
    // 
    
    // createElement() crée une nouvelle balise HTML (mais elle n'est pas encore dans la page)
    // Ici on crée une balise <span></span>
    const spanElement = document.createElement("span");
    
    // 
    // POSITIONNER L'ÉLÉMENT À L'ENDROIT DU CLIC
    // 
    
    // style.left et style.top définissent la position CSS de l'élément
    // Important : il faut ajouter "px" (pixels) à la fin, sinon CSS ne comprend pas
    // Ces propriétés ne fonctionnent que si l'élément a "position: absolute" dans le CSS
    spanElement.style.left = xPos + "px";   // Exemple: "150px"
    spanElement.style.top = yPos + "px";    // Exemple: "300px"
    
    // 
    // DONNER UNE TAILLE ALEATOIRE
    // 
    
    // Math.random() génère un nombre décimal entre 0 et 1 (ex: 0.456, 0.789)
    // Math.random() * 100 = un nombre entre 0 et 100 (ex: 45.6, 78.9)
    // On stocke cette taille aléatoire dans une constante
    const size = Math.random() * 100;  // Taille entre 0 et 100 pixels
    
    // On applique cette taille à la largeur ET à la hauteur du span
    // Comme ça, le cœur aura une taille différente à chaque apparition
    spanElement.style.width = size + "px";   // Largeur aléatoire
    spanElement.style.height = size + "px";  // Hauteur aléatoire (même valeur pour garder un carré)
    
    // 
    // AJOUTER L'ÉLÉMENT À LA PAGE
    // 
    
    // appendChild() ajoute l'élément comme DERNIER ENFANT de bodyElement
    // Maintenant le span apparaît VISIBLEMENT sur la page
    bodyElement.appendChild(spanElement);
    
    // ========================================
    // SUPPRIMER L'ÉLÉMENT APRÈS UN DÉLAI
    // ========================================
    
    // setTimeout() = "programme une action après un certain temps"
    // Premier paramètre : la fonction à exécuter plus tard
    // Deuxième paramètre : le délai en millisecondes (3000ms = 3 secondes)
    setTimeout(() => {
        spanElement.remove();  // remove() supprime l'élément du DOM (le fait disparaître)
    }, 3000);  // Attendre 3 secondes avant de supprimer
    
    // Sans cette suppression, des MILLIERS de cœurs s'accumuleraient
    // La page deviendrait très lourde et finirait par planter !
    
});  // Fin de l'écouteur d'événement