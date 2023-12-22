//const fruits = ["Banane", "Fraise", "Cerise"];
const fruits = new Array("Banane", "Fraise");

console.log(`fruits`, fruits);


fruits.push("Pomme");
fruits.forEach((fruit, index, tab) => {
  console.log(`fruit ${index} : `, fruit, tab);
});

const fruitLi = fruits.map((fruit)=>{
  return `<li>${fruit}</li>`;
})
console.log(`fruitLi`, fruitLi);
console.log(`fruits`, fruits);