// Récupération de la référence à une instance de HTMLHeadingElement du DOM existant dans la page HTML
const h1 = document.getElementById("h1");
console.log(`h1 :`, h1);
h1.align = "right";
h1.remove();
// Création d'un élément du DOM
const section = window.document.createElement("section");

// Positionnement d'un élément du DOM en dernier fils de body
window.document.body.appendChild(section);

// Modification de la propriété innerText
section.innerText = "Le contenu de ma section";

// Ajout de l'attribut id avec pour valeur news
section.setAttribute("id","news");

// Utilisation de querySelector pour récupérer  le premier lien de la liste à puce située dans le header
const a = document.querySelector("header > nav > ul > li:nth-child(2) > a");
a.style.color = "red";
const links = document.querySelectorAll("header > nav > ul > li > a");
links[5].style.color = "yellow";
/* function logClasses(object) {
  while (object) {
    object = Object.getPrototypeOf(object);
    if(object) console.log("classe : ",object.constructor.name);
  }
}
logClasses(h1); */