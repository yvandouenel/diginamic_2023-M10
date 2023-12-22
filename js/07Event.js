/**
   * Crée un élément du dom, lui ajoute du texte, le place comme dernier
   * enfant de parent et ajoute un attribut en utilisant le paramètre attributes
   * @param {String} markup_name 
   * @param {String} text 
   * @param {domElement} parent 
   * @param {Object[]} attributes
   * @returns domElement
   */
function createMarkup(markupname, text, parent, attributes = []) {
  const markup = document.createElement(markupname);
  markup.textContent = text;
  parent.appendChild(markup);
  for (const attribute of attributes) {
    for (let key in attribute) {
      markup.setAttribute(key, attribute[key]);
    }
  }
  return markup;
}
const header = createMarkup("header", "", document.body);
const nav = createMarkup("nav", "", header);
for (let i = 0; i < 4; i++) {
  const button = createMarkup("button", `Item ${i}`, nav, [{ id: `button-${i}` }]);
  
  const p = createMarkup("p", `Texte ${i} Lorem ipsume`, document.body, [{ id: `p-${i}` }]);
  p.hidden = true;
  button.addEventListener("click", (event) => {
    console.log(`Click v1 sur le  bouton ${i} `);
    p.hidden = !p.hidden;
  });
}

document.querySelector("#button-0").style.color = "red";
const a = createMarkup("a", "Lien vers diginamic", document.body, [{ href: "https://www.diginamic.fr/" }])
a.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(`Lien cliqué mais le js me permet de rester sur la page de base`);
})
console.log(``);
