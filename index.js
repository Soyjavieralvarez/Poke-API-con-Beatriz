//? 1º paso, traer los personajes de Pokemon

let characters = [];
let charactersDetails = [];
console.log(charactersDetails);

const pintar = () => {
  // console.log(characters)

  for (const character of characters) {
  }
};

const getPokemons = async () => {
  const reply = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"
  );
  const result = await reply.json();
  characters = [...result.results];
  //   console.log(characters)

//!En este bucle es en el que tengo que pintar

  for (const character of characters) {
    const charactersInfo = await fetch(character.url);
    // console.log(charactersInfo)
    const characterResults = await charactersInfo.json();
    console.log(character.name)
    charactersDetails.push(characterResults);
  }
  //   pintar();
};

getPokemons();
