const id = new URLSearchParams(window.location.search);
const pokemonId = id.get("id");

getPokemon(pokemonId);

async function getPokemon(pokemonId) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        const pokemon = await response.json();
        if (pokemonId >= 2 && pokemonId <= 647) {
            const responseAnterior = await fetch(`https://pokeapi.co/api/v2/pokemon/${Number(pokemonId) - 1}`);
            const pokemonAnterior = await responseAnterior.json();
            const responseSiguiente = await fetch(`https://pokeapi.co/api/v2/pokemon/${Number(pokemonId) + 1}`);
            const pokemonSiguiente = await responseSiguiente.json();
            cartaPokemon(pokemon, pokemonAnterior, pokemonSiguiente);
        } else if (pokemonId == 648){
            const responseAnterior = await fetch(`https://pokeapi.co/api/v2/pokemon/${Number(pokemonId) - 1}`);
            const pokemonAnterior = await responseAnterior.json();
            cartaPokemon(pokemon, pokemonAnterior, "")
        } else {
            const responseSiguiente = await fetch(`https://pokeapi.co/api/v2/pokemon/${Number(pokemonId) + 1}`);
            const pokemonSiguiente = await responseSiguiente.json();
            cartaPokemon(pokemon, "", pokemonSiguiente)
        }
        
        
    } catch (error) {
        console.log(error);
    }
}

function cartaPokemon(pokemon, pokemonAnterior, pokemonSiguiente) {

    const nombrePokemon = document.querySelector(".cartaPokemon");
    const nombrePoke = pokemon.name;
    const hp = pokemon.stats[0].base_stat;
    const atq = pokemon.stats[1].base_stat;
    const def = pokemon.stats[2].base_stat;
    const atq_esp = pokemon.stats[3].base_stat;
    const def_esp = pokemon.stats[4].base_stat;
    const vel = pokemon.stats[5].base_stat;
    const imagen = pokemon.sprites.other["official-artwork"].front_default;
    
    if (pokemonAnterior == "") {
        const nombrePokeAnterior = "";
        const nombrePokeSiguiente = pokemonSiguiente.name;

        nombrePokemon.innerHTML += `
        <div class="cartaInfo">
            <img class="imagenPoke" src="${imagen}" alt="imagen ${nombrePoke}" width="150" height="150">
            <button id="cambiarShiny" onclick="cambiarShiny()">Ver Shiny</button>
            <div class="infoPoke">
                <p>${nombrePokeAnterior}</p>
                <p style="color: #78C850;">${nombrePoke}</p>
                <a href="http://wiki-pokemmo.com/pokedex/pokemon.php?id=${Number(pokemonId) + 1}&name=${nombrePokeSiguiente}">${nombrePokeSiguiente}→</a>
            </div>
        </div>
        <div class="stats"></div>
        `;
    } else if(pokemonSiguiente == "") {
        const nombrePokeAnterior = pokemonAnterior.name;
        const nombrePokeSiguiente = "";

        nombrePokemon.innerHTML += `
        <div class="cartaInfo">
            <img class="imagenPoke" src="${imagen}" alt="imagen ${nombrePoke}" width="150" height="150">
            <button id="cambiarShiny" onclick="cambiarShiny()">Ver Shiny</button>
            <div class="infoPoke">
                <a href="http://wiki-pokemmo.com/pokedex/pokemon.php?id=${Number(pokemonId) - 1}&name=${nombrePokeAnterior}">←${nombrePokeAnterior}</a>
                <p style="color: #78C850;">${nombrePoke}</p>
                <p>${nombrePokeSiguiente}</p>
            </div>
        </div>
        <div class="stats"></div>
        `;
    } else {
        const nombrePokeAnterior = `${pokemonAnterior.name}`;
        const nombrePokeSiguiente = pokemonSiguiente.name;

        nombrePokemon.innerHTML += `
        <div class="cartaInfo">
            <img class="imagenPoke" src="${imagen}" alt="imagen ${nombrePoke}" width="150" height="150">
            <button id="cambiarShiny" onclick="cambiarShiny()">Ver Shiny</button>
            <div class="infoPoke">
                <a href="http://wiki-pokemmo.com/pokedex/pokemon.php?id=${Number(pokemonId) - 1}&name=${nombrePokeAnterior}">←${nombrePokeAnterior}</a>
                <p style="color: #78C850;">${nombrePoke}</p>
                <a href="http://wiki-pokemmo.com/pokedex/pokemon.php?id=${Number(pokemonId) + 1}&name=${nombrePokeSiguiente}">${nombrePokeSiguiente}→</a>
            </div>
        </div>
        <div class="stats"></div>
        `;
    }

    crearBarra(hp, "HP");
    crearBarra(atq, "ATQ");
    crearBarra(def, "DEF");
    crearBarra(atq_esp, "ATQESP");
    crearBarra(def_esp, "DEFESP");
    crearBarra(vel, "VEL");

}

function crearBarra(valor, nombre) {
    // Crear elemento div para representar la barra
    var barra = document.createElement("div");
    // Establecer la clase para aplicar estilos
    barra.className = `rellena_barra${nombre}`;

    // Calcular el ancho de la barra en función del valor pasado
    var ancho = Math.min(valor, 200);

    // Crear elemento para el fondo que indica lo que falta
    var fondo = document.createElement("div");
    fondo.className = `barra${nombre}`;
    fondo.style.width = 100 + "%";

    let texto = document.createElement("p");
    texto.className = `texto${nombre}`;
    texto.innerHTML = `${nombre}`;

    let valorTexto = document.createElement("p");
    valorTexto.className = `textoStat`;
    valorTexto.innerHTML = `${valor}`;

    fondo.appendChild(texto);
    fondo.appendChild(valorTexto);
    fondo.appendChild(barra);

    // Establecer el ancho de la barra
    barra.style.width = ancho + "px";

    // Añadir la barra al contenedor
    document.querySelector(".stats").appendChild(fondo);
  }
function cambiarShiny() {
    const imagenPoke = document.querySelector(".imagenPoke");
    const botonShiny = document.querySelector("#cambiarShiny");

    const id = new URLSearchParams(window.location.search);
    const pokemonId = id.get("id");

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    .then(response => response.json())
    .then(data => {

        if (imagenPoke.src != data.sprites.other["official-artwork"].front_shiny) {

            imagenPoke.src = data.sprites.other["official-artwork"].front_shiny;
            botonShiny.innerHTML = "Ver Normal";

        } else {

            imagenPoke.src = data.sprites.other["official-artwork"].front_default;
            botonShiny.innerHTML = "Ver Shiny";

        }

    });

}