const TOTAL_POKEMONS = 151;
const TOTAL_PAGES = 5;
(async () => {
  try {
    const fs = require('fs');
    const pokemonsId = Array.from({length: TOTAL_POKEMONS}, (_, i) => i + 1);
    const pages = Array.from({length: TOTAL_PAGES}, (_, i) => i + 1);
    let fileContent = pokemonsId.map( id => `/pokemons/${id}`).join('\n');
    let pokemonsContent = pages.map( page => `/pokemons/page/${page}`).join('\n');
    const pokemonList = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${TOTAL_POKEMONS}`).then(response => response.json());
    const fileContentName = pokemonList.results.map( pokemon => `/pokemons/${pokemon.name}`).join('\n');
    fs.writeFileSync('routes.txt', fileContent);
    fs.appendFileSync('routes.txt', '\n' + pokemonsContent);
    fs.appendFileSync('routes.txt', '\n' + fileContentName);
    console.log('Routes.txt generated');
  } catch (error) {
    console.log('Routes.txt error', error);
  }
})();
