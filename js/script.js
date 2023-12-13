let paginaActual = 1;
        const elementosPorPagina = 24;
        const totalPokemon = 648;
        const urlBase = 'https://pokeapi.co/api/v2/pokemon';
        const pokemonList = document.getElementById('pokemonList');

        async function cargarPagina(pagina) {
            const offset = (pagina - 1) * elementosPorPagina;
            const url = `${urlBase}?limit=${elementosPorPagina}&offset=${offset}`;

            try {
                const response = await fetch(url);
                const data = await response.json();
                await cargarSprites(data.results);
            } catch (error) {
                console.error('Error al obtener datos:', error);
            }
        }

        async function cargarSprites(resultados) {
            const promises = resultados.map(pokemon => obtenerDetallesPokemon(pokemon.url));
            const pokemonDetails = await Promise.all(promises);
            // Ordenar los resultados antes de mostrarlos
            const sortedDetails = pokemonDetails.sort((a, b) => a.id - b.id);
            sortedDetails.forEach(mostrarPokemon);
        }

        async function obtenerDetallesPokemon(url) {
            try {
                const response = await fetch(url);
                const pokemon = await response.json();
                return pokemon;
            } catch (error) {
                console.error('Error al obtener detalles del Pokémon:', error);
            }
        }

        function mostrarPokemon(pokemon) {
            pokemonList.innerHTML += `
                <a href="pokemon.html?id=${pokemon.id}">
                    <div class="pokemon ${pokemon.name}">
                        <img src="${pokemon.sprites.other.dream_world.front_default}" alt="imagen de ${pokemon.name}" width="150" height="150" loading="lazy">
                        <div class="id_nombre">
                            <p class="id_pokedex">#${pokemon.id}</p>
                            <p class="nombre_pokedex">${pokemon.name}</p>
                        </div>
                        <div class="${pokemon.name}_tipos tipos"></div>
                        <div class="medidas">
                            <p class="peso">${pokemon.weight / 10} kg</p>
                            <p class="altura">${pokemon.height / 10} m</p>
                        </div>
                    </div>
                </a>
            `;
            comprobarTipos(pokemon.types, pokemon.name);
        }

        async function comprobarTipos(poketypes, nombre) {
            const contenedorPokemonInd = document.querySelector(`.${nombre}_tipos`);
            contenedorPokemonInd.innerHTML = "";
            
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

        function cargarPaginaAnterior() {
            if (paginaActual > 1) {
                paginaActual--;
                cargarPagina(paginaActual);
            }
        }

        function cargarPaginaSiguiente() {
            if ((paginaActual * elementosPorPagina) < totalPokemon) {
                paginaActual++;
                cargarPagina(paginaActual);
            }
        }

        function cargarMasPokemon() {
            const alturaDeLaVentana = window.innerHeight;
            const alturaDelDocumento = document.documentElement.offsetHeight;
            const scrollActual = window.scrollY;

            if (
                (alturaDelDocumento - (scrollActual + alturaDeLaVentana) < 100) &&
                ((paginaActual * elementosPorPagina) < totalPokemon)
            ) {
                cargarPaginaSiguiente();
            }
        }

        // Cargar la primera página al cargar la página
        cargarPagina(paginaActual);

        // Agregar el evento scroll para cargar más elementos al llegar al final de la página
        window.addEventListener('scroll', cargarMasPokemon);

        async function buscarPokemon() {
            const buscador = document.querySelector(".input-buscador").value.toLowerCase();
        
            if (buscador === "") {
                // Si el buscador está vacío, cargar la primera página
                paginaActual = 1;
                const contenedorPokemon = document.querySelector("#pokemonList");
                contenedorPokemon.innerHTML = "";
                cargarPagina(paginaActual);
            } else {
                try {
                    const response = await fetch(`${urlBase}/${buscador}`);
                    const pokemon = await response.json();
                    pokemonList.innerHTML = ""; // Limpiar el contenido actual
                    mostrarPokemon(pokemon);
                    comprobarTipos(pokemon.types, pokemon.name);
                } catch (error) {
                    console.error('Error al buscar el Pokémon:', error);
                }
            }
        }        

        // Mostrar las sugerencias al escribir en el input
        function mostrarSugerencias() {
            const input = document.querySelector(".input-buscador");
            const sugerenciasContainer = document.getElementById("sugerenciasContainer");

            // Limpiar sugerencias previas
            sugerenciasContainer.innerHTML = "";

            // Obtener el valor del input
            const filtro = input.value.toLowerCase();

            // Mostrar sugerencias solo si el filtro no está vacío
            if (filtro !== "") {
                sugerenciasContainer.style.display = "block";
                // Simular sugerencias, puedes reemplazar esto con llamadas a la API u otras fuentes de datos
                const sugerencias = ["Bulbasaur", "Ivysaur", "Charmander", "Charmeleon", "Squirtle", "Wartortle"];
                sugerencias.forEach(function(sugerencia) {
                    if (sugerencia.toLowerCase().includes(filtro)) {
                        const divSugerencia = document.createElement("div");
                        divSugerencia.innerHTML = sugerencia;
                        divSugerencia.addEventListener("click", function() {
                            input.value = sugerencia;
                            sugerenciasContainer.style.display = "none";
                            buscarPokemon();
                        });
                        sugerenciasContainer.appendChild(divSugerencia);
                    }
                });
            } else {
                sugerenciasContainer.style.display = "none";
            }
        }

        // Cerrar las sugerencias al hacer clic en cualquier parte del documento
        document.addEventListener("click", function(event) {
            const sugerenciasContainer = document.getElementById("sugerenciasContainer");
            if (event.target !== sugerenciasContainer && !sugerenciasContainer.contains(event.target)) {
                sugerenciasContainer.style.display = "none";
            }
        });