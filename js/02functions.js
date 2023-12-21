/* function test(name, species = "human") { // paramètre
  console.log(`name : `, name);
  console.log(`species : `, species);
}
test("toto", "ET"); // un argument
//console.log(`name`, name);

function addPartner(bob, ...people) {
  console.log(`bob`, bob);
  people.forEach(person => {
    console.log(`person `, person);
  })
}
addPartner("Bob", "Ray", "Nina"); */

let i = 1;
function a() {
  let j = 2;


  const b = () => {
    let l = 4;
    {
      let k = 3;
      /* console.log(`k`, k);
      console.log(`l`, l);
      console.log(`b`, b);
      console.log(`j`, j);
      console.log(`i`, i);
      console.log(`a`, a); */
    }

  }
  console.log(`b`, b);
  b();
}
a();
// Closure 
function makeBankAccount() {
  // this one is private
  let balance = 0;
  // a "getter", made public via the returned object below
  function getBalance() {
    return balance;
  }
  // a "setter", made public via the returned object below
  function setBalance(amount) {
    // ... validate before updating the balance
    balance = amount;
  }
  return {
    getBalance,
    setBalance
  };
}

// Pour récupérer balance
const mka = makeBankAccount();
mka.setBalance(100);
console.log(`balance : `, mka.getBalance());

// Fonctions fléchées
function double(a) {
  return a * 2;
} 
/* const double = function(a) {
  return a * 2;
} */

/* const double = (a) => {
  return a * 2;
} */
//const double = a => a * 2;
console.log(`double de a`, double(12));
console.log(typeof(double));

setTimeout(()=>{console.log(`hello dans setTimeout`);}, 2000);
console.log(`Hello`);