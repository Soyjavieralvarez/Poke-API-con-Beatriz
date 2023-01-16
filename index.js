const iconsTypes = [
  "bug",
  "dragon",
  "electric",
  "fairy",
  "fighting",
  "fire",
  "flying",
  "ghost",
  "grass",
  "ground",
  "ice",
  "normal",
  "poison",
  "psychic",
  "rock",
  "steel",
  "water",
];

let characters = [];
let charactersDetails = []; //?Aquí guardo el array con la info, abilities, name,id...
const boxPokemons = document.createElement("div");
const buscar$$ = document.querySelector(".buscar");

const search = () => {
  const pokemonsFiltered = charactersDetails.filter((character) => {
    console.log(character.name);
    return character.name.toLowerCase().includes(buscar$$.value.toLowerCase());
  });
  pintar(pokemonsFiltered);
};
buscar$$.addEventListener("input", search);

const pintar = (charactersDetails) => {
  boxPokemons.innerHTML = "";

  for (const character of charactersDetails) {
    const carta$$ = document.createElement("div");
    const image$$ = document.createElement("img");
    const id$$ = document.createElement("h2");
    const name$$ = document.createElement("h4");
    const height$$ = document.createElement("p");
    const specie$$ = document.createElement("p");
    const types$$ = document.createElement("p");
    const weight$$ = document.createElement("p");

    boxPokemons.classList.add("boxPokemons");
    carta$$.classList.add("carta");
    image$$.classList.add("img");
    id$$.classList.add("h2");
    name$$.classList.add("h4");
    height$$.classList.add("p");
    specie$$.classList.add("p");
    types$$.classList.add("p");
    weight$$.classList.add("p");

    image$$.src = character.sprites.other.dream_world.front_default;
    id$$.textContent = "Id: " + character.id;
    name$$.textContent = character.name;
    height$$.textContent = "Height: " + character.height;
    specie$$.textContent = "Specie : " + character.specie;
    types$$.textContent = "Type: " + character.type;
    weight$$.textContent = "Weight: " + character.weight;

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

  for (const character of characters) {
    const charactersInfo = await fetch(character.url);
    const characterResults = await charactersInfo.json();

    charactersDetails.push(characterResults);
  }
  pintar(charactersDetails);
};

getPokemons();
