const id = new URLSearchParams(window.location.search);
const pokemonId = id.get("id");

console.log(pokemonId)