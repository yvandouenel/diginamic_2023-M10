/**
 * Fonction constructeur de personne
 * @param {string} name 
 * @returns {Person}
 */
function Person(name){
  this.name = name;
}
Person.prototype.hello = function() {
  console.log(`Hello, my name is ${this.name}`);
  console.log("this", this);
}
// On assigne à b la référence à une instance de Person
const b = new Person("Bob");
console.log(`b`, b);
b.hello();

let toto = "Toto";
String.prototype.hello = "Hello";
console.log(toto.hello);