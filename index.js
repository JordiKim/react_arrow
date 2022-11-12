// Fn
// function sayHello() {
//   console.log("Hello");
// }

// sayHello();

// Arrow Fn
const sayHello = (name) => {
  return console.log("Hello", name);
};

sayHello("Jack");

// template string
const pokemons = [
  {
    dexId: 1,
    name: "Bulbasaur",
  },
  {
    dexId: 2,
    name: "Ivysaur",
  },
  {
    dexId: 3,
    name: "Venusaur",
  },
];

let allPokemonName = pokemons.map((i) => {
  return console.log(`id: ${i.dexId},name: ${i.name}`);
});

// ternary operators
// let age = 24;
// let name = "";

// age >= 24 ? (name = "Alex") : (name = "Bob");

let age = 24;
// let name = age >= 24 ? "Alex" : "Bob";
let name = age >= 24 && "Alex";

console.log(name);

// object
let nName = "apple";
let color = "red";

let food = {
  name: "Apple",
  color: "red",
  price: 20,
  quantity: 1,
};

let food2 = {
  ...food,
  color: "green",
  age: 11,
};

// 解構
let { name: newName, price, quantity } = food;

console.log(food);
console.log(food2);
console.log(newName, price, quantity);
