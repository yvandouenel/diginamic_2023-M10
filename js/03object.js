/**
 * Fonction constructeur de personne
 * @param {string} name 
 * @returns {Person}
 */
/* function Person(name){
  this.name = name;
  
} */
// Déclaration de la propriété hello qui appartient au prototype de Person et qui sera donc invoquable
// depuis toutes les instances issues de Person
/* Person.prototype.hello = function() {
  console.log(`Hello, my name is ${this.name}`);
} */

class Person {
  constructor(name) {
    this.name = name;
  }
  hello() {
    console.log(`Hello, my name is ${this.name}`);
  }
}
class Teacher extends Person {
  static legs = 2;
  constructor(name, topic) {
    super(name);
    this.topic = topic;
  }
  teach() {
    console.log(`je suis ${this.name} et j'enseigne  ${this.topic}`);
  }
  hello() {
    super.hello();
    console.log(`... et j'enseigne  ${this.topic}`);
  }
}
// On assigne à b la référence à une instance de Person
const b = new Person("Bob");
const s = new Person("Simone");
const j = new Teacher("Julie", "l'informatique ");
j.hello();
j.teach();
b.hello();
if (b.hello == s.hello) {
  console.log(`la méthode hello est la même pour s et b`);
} else console.log(`la méthode hello n'est pas la même pour s et b`);

console.log(`b`, b);
console.log(`s`, s);
console.log(`j`, j);
console.log(`Teacher.legs`, Teacher.legs);

const bob = {
  firstname: "Bob"
}
const bobDylan = { firstname: "José", name: "Dylan", ...bob };
if (bob == bobDylan) console.log(`Bob et bobdylan sont égaux`);
else console.log(`Bob et bobdylan ne sont pas égaux`);
console.log(`bobDylan`, bobDylan);
console.log(`bob`, bob);


class A {}
class B extends A {}
class C extends B {}
function logClasses(object) {
  while (object) {
    object = Object.getPrototypeOf(object);
    if(object) console.log("classe : ",object.constructor.name);
  }
}
logClasses(j);

class CustomString extends String {
 
}
const test = new CustomString("test");
console.log(`test`, test);