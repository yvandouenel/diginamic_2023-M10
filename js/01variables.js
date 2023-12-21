
// Déclaration et assignation
{
  var j = 25;// global
  j = "Toto";
  j = true;
  j = undefined;
  console.log(`type de j : `, typeof (j));

  const z = "Z";

  const toto = {
    name: "Toto"
  }
  toto.name = "Titi";
  console.log(`toto : `, toto);
}
function test() {
  let i = 12;
  const hello = "Hello";
}
test();

for (let i = 0; i < 10; i++) {
  //console.log(`i : `, i);

}

let bob = {
  name: "bob"
}
let boby = {
  name: "boby"
}
boby = bob;

if(bob == boby ){
  console.log(`bob et boby égaux`);
} else console.log(`bob et boby pas égaux`);

bob.name= "titi";
let toto = "toto";
if(toto === "toto") {
  toto = toto + "hello";
}
(toto == "toto")
let k = (toto == "toto") ? true : false;
console.log(`k = `, k);

