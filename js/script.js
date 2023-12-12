const urlApi = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0";
const urlApiPokemon = "https://pokeapi.co/api/v2/pokemon/";
let detenerEjecucion = false;

fetch(urlApi)
.then(response => response.json())
.then(listaPokemon => mostrarPokemon(listaPokemon.results))
  
async function mostrarPokemon(listaPokemon) {
    const contenedorPokemon = document.querySelector(".listaPokemon");
      
    for (const pokemon of listaPokemon) {
        try {
            const response = await fetch(pokemon.url);
            const poke = await response.json();

            if (detenerEjecucion == true) {
                break;
            }

            cartaPokemon(poke.name, poke.height, poke.weight, contenedorPokemon, poke.sprites.other.dream_world.front_default, poke.id);
            comprobarTipos(poke.types, poke.name);


        } catch (error) {
            console.error(`Error al obtener la información de ${pokemon.name}`, error);
        }

    }
}

async function cartaPokemon(nombre, altura, peso, contenedorPokemon, imagen, id_pokedex) {

    contenedorPokemon.innerHTML += `
        <div class="pokemon ${nombre}">
            <img src="${imagen}" alt="imagen de ${nombre}" width="150" height="150" loading="lazy">
            <div class="id_nombre">
                <p class="id_pokedex">#${id_pokedex}</p>
                <p class="nombre_pokedex">${nombre}</p>
            </div>
            <div class="${nombre}_tipos tipos"></div>
            <div class="medidas">
                <p class="peso">${peso / 10} kg</p>
                <p class="altura">${altura / 10} m</p>
            </div>
        </div>
        `;

}

async function comprobarTipos(poketypes, nombre) {

    const contenedorPokemonInd = document.querySelector(`.${nombre}_tipos`);
        for (const tipos of poketypes) {
            switch (tipos.type.name) {
                case "grass":
                    tipos.type.name = "Planta";
                    break;
                case "poison":
                    tipos.type.name = "Veneno";
                    break;
                case "fire":
                    tipos.type.name = "Fuego";
                    break;
                case "flying":
                    tipos.type.name = "Volador";
                    break;
                case "water":
                    tipos.type.name = "Agua";
                    break;
                case "bug":
                    tipos.type.name = "Bicho";
                    break;
                case "normal":
                    tipos.type.name = "Normal";
                    break;
                case "electric":
                    tipos.type.name = "Eléctrico";
                    break;
                case "ground":
                    tipos.type.name = "Tierra";
                    break;
                case "fairy":
                    tipos.type.name = "Hada";
                    break;
                case "fighting":
                    tipos.type.name = "Lucha";
                    break;
                case "psychic":
                    tipos.type.name = "Psíquico";
                    break;
                case "rock":
                    tipos.type.name = "Roca";
                    break;
                case "steel":
                    tipos.type.name = "Acero";
                    break;
                case "ice":
                    tipos.type.name = "Hielo";
                    break;
                case "ghost":
                    tipos.type.name = "Fantasma";
                    break;
                case "dragon":
                    tipos.type.name = "Dragón";
                    break;
                case "dark":
                    tipos.type.name = "Siniestro";
                    break;
                default:
                    break;
            }
            contenedorPokemonInd.innerHTML += `
            <p class="${tipos.type.name}">${tipos.type.name}</p>
            `;
        }

}

function buscarPokemon() {

    let buscador = document.querySelector(".input-buscador").value;

    if (buscador == "") {

        const contenedorPokemon = document.querySelector(".listaPokemon");
        contenedorPokemon.innerHTML = "";

        detenerEjecucion = false;

        fetch(urlApi)
        .then(response => response.json())
        .then(listaPokemon => mostrarPokemon(listaPokemon.results))

    } else {

        fetch(urlApiPokemon + buscador)
        .then(response => response.json())
        .then(buscadorPokemon => buscarPokemonBuscador(buscadorPokemon))

    }
    
    function buscarPokemonBuscador(poke) {

        detenerEjecucion = true;

        const contenedorPokemon = document.querySelector(".listaPokemon");
        contenedorPokemon.innerHTML = "";

        cartaPokemon(poke.name, poke.height, poke.weight, contenedorPokemon, poke.sprites.other.dream_world.front_default, poke.id);
        comprobarTipos(poke.types, poke.name);

    }

}