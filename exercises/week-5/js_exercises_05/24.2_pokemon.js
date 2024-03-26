// Exercise - Prototypes
// JavaScript - Pokemon

// The following exercise contains the following subjects:
// ● prototypes

// You are given a function, Pokeman, that takes three parameters: pokemonName, pokemonType, an array of
// different pokemon attack methods, pokemonAttackList.
// 1. Create three instances of the Pokemon and save them in a variable.
// 2. Using prototype properties, add the following methods:
// ● A method called callPokemon will print the following: “I choose you, <pokemon name>
// ● A method called attack that takes one parameter, an attack number, that will print the specific attack
// method from the pokemonAttackList array as the following: “<pokemon name> used <attack method>”
// Call each pokemon with the 2 methods you created.

function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
  this.name = pokemonName;
  this.type = pokemonType;
  this.attackList = pokemonAttackList;
}

const bulbasaur = new Pokemon("Bulbasaur", "grass", [
  "Tackle",
  "Vine Whip",
  "Take Down",
  "Power Whip",
]);
const pikachu = new Pokemon("Pikachu", "electric", [
  "Nuzzle",
  "Quick Attack",
  "Feint",
  "Spark",
  "Iron Tail",
]);
const charizard = new Pokemon("Charizard", "fire", [
  "Dragon Claw",
  "Sratch",
  "Fire Fang",
  "Slash",
  "Flare Blitz",
]);

Pokemon.prototype.logName = function () {
  console.log("I choose you, " + this.name);
};

Pokemon.prototype.attack = function (attackNumber) {
  console.log(this.name + " used " + this.attackList[attackNumber]);
};

bulbasaur.logName();
bulbasaur.attack(0);
console.log();

pikachu.logName();
pikachu.attack(3);

console.log();

charizard.logName();
charizard.attack(1);
