//? 1º paso, traer los personajes de Pokemon

let characters = [];
let charactersDetails = []; //?Aquí guardo el array con la info, abilities, name,id...
const boxPokemons = document.createElement("div");
const buscar$$ = document.querySelector(".buscar");

const search = () => {

 const pokemonsFiltered = charactersDetails.filter((character) => {
    console.log(character.name)
    return character.name
    .toLowerCase()
    .includes(buscar$$.value.toLowerCase())
 })
pintar(pokemonsFiltered);
};
buscar$$.addEventListener("input", search);



const pintar = (charactersDetails) => {
    boxPokemons.innerHTML = "";
//   console.log(charactersDetails);
// let types = [];
  for (const character of charactersDetails) {
//    console.log(character.sprites.other.dream_world.front_default) 
    // for (const type of character.types) {
    // //   console.log(character.types);
    //   types.push(type.type.name);
    // }

    const carta$$   = document.createElement("div");
    const image$$   = document.createElement("img");
    const id$$      = document.createElement("h3");
    const name$$    = document.createElement("h4");
    const height$$  = document.createElement("p");
    const specie$$  = document.createElement("p");
    const types$$   = document.createElement("p");
    const weight$$  = document.createElement("p");

    boxPokemons.classList.add("boxPokemons");
    carta$$.classList.add("carta");

    image$$.src          = character.sprites.other.dream_world.front_default;
    id$$.textContent     = ("Id: ") + character.id;
    name$$.textContent   = character.name;
    height$$.textContent = character.height;
    specie$$.textContent = character.specie;
    types$$.textContent  = character.type;
    weight$$.textContent = character.weight;

    carta$$.append(
      name$$,
      image$$,
      id$$,
      height$$,
      specie$$,
      types$$,
      weight$$
    );
    boxPokemons.appendChild(carta$$);
    document.body.appendChild(boxPokemons);
  }
};

const getPokemons = async () => {
  const reply = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"
  );
  const result = await reply.json();
  characters = [...result.results];
//   console.log(charactersDetails)


  for (const character of characters) {
    const charactersInfo = await fetch(character.url);
    const characterResults = await charactersInfo.json();

    // console.log(characterResults);
    charactersDetails.push(characterResults);
  }
  pintar(charactersDetails);
};

getPokemons();
