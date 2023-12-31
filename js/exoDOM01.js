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
for(let i = 0; i < 4; i++) {
  const button1 = createMarkup("button", `Item ${i}`, nav,[{id: `button-${i}`}]);
}

document.querySelector("#button-0").style.color = "red";
