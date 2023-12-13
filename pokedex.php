<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="Mira la pokedex de la Wiki de PokeMMO no oficial, encuentra cualquier pokemon, totalmente en español.">
    <title>Wiki | Pokedex | PokeMMO | Español | No Oficial</title>
	<link rel="icon" href="img/favicon.ico" type="image/x-icon">
	<link rel="apple-touch-icon" href="img/favicon.ico">
    <link rel="stylesheet" href="css/style.css">
    <link rel="preload" href="js/script.js" as="script" />
</head>
<body>
	<?php require 'assets/header.php'; ?>
	<main class="contenedor">
		<h1 class="h1-style">Pokedex Wiki PokeMMO No Oficial en Español</h1>
		<p class="padding-no-bottom">¡Bienvenido a esta wiki no oficial en español de PokeMMO! Aquí encontrarás una valiosa fuente de información sobre cada Pokémon de este multijugador en linea.</p>
		<div class="buscador">
			<input oninput="mostrarSugerencias()" class="input-buscador" type="text" placeholder="Buscar pokemon por nombre..">
			<div class="sugerencias" id="sugerenciasContainer"></div>
			<button onclick="buscarPokemon()">Buscar</button>
		</div>
		<div class="contenedor-mostrar-todo">
			<button class="padding-all upper negro mostrartodo" onclick="location.reload()">Mostrar Todo</button>
		</div>
		<button onclick="mostrarFiltros()" class="btn-filtros">Filtros</button>
		<div class="tiposfiltro" id="filtroDiv">
			<button class="padding-all upper negro Planta" onclick="buscarTipo('grass')">Planta</button>
			<button class="padding-all upper negro Fuego" onclick="buscarTipo('fire')">Fuego</button>
			<button class="padding-all upper negro Veneno" onclick="buscarTipo('poison')">Veneno</button>
			<button class="padding-all upper negro Volador" onclick="buscarTipo('flying')">Volador</button>
			<button class="padding-all upper negro Agua" onclick="buscarTipo('water')">Agua</button>
			<button class="padding-all upper negro Bicho" onclick="buscarTipo('bug')">Bicho</button>
			<button class="padding-all upper negro Normal" onclick="buscarTipo('normal')">Normal</button>
			<button class="padding-all upper negro Eléctrico" onclick="buscarTipo('electric')">Eléctrico</button>
			<button class="padding-all upper negro Tierra" onclick="buscarTipo('ground')">Tierra</button>
			<button class="padding-all upper negro Lucha" onclick="buscarTipo('fighting')">Lucha</button>
			<button class="padding-all upper negro Psíquico" onclick="buscarTipo('psychic')">Psíquico</button>
			<button class="padding-all upper negro Roca" onclick="buscarTipo('rock')">Roca</button>
			<button class="padding-all upper negro Acero" onclick="buscarTipo('steel')">Acero</button>
			<button class="padding-all upper negro Hielo" onclick="buscarTipo('ice')">Hielo</button>
			<button class="padding-all upper negro Fantasma" onclick="buscarTipo('ghost')">Fantasma</button>
			<button class="padding-all upper negro Dragón" onclick="buscarTipo('dragon')">Dragón</button>
			<button class="padding-all upper negro Siniestro" onclick="buscarTipo('dark')">Siniestro</button>
		</div>
		<div id="pokemonList"></div>
		<div id="loadingIndicator">Cargando...</div>
		<p>La sección de la Pokédex en nuestra wiki no oficial de PokeMMO es una herramienta esencial para los entrenadores que buscan información detallada sobre todas las especies de Pokémon disponibles en el juego. Aquí, encontrarás entradas completas que incluyen datos clave, como estadísticas base, movimientos aprendidos, ubicaciones de captura y evoluciones.</p>
		<p>Cada página de la Pokédex está diseñada de manera intuitiva, permitiendo una fácil navegación para que los usuarios encuentren rápidamente la información que están buscando. Las imágenes vibrantes y las descripciones detalladas brindan una visión completa de la apariencia y características de cada Pokémon, mientras que las secciones interactivas facilitan la búsqueda de datos específicos.</p>
		<p>Además de la información básica de la Pokédex, nuestra wiki también destaca estrategias recomendadas para entrenadores que buscan maximizar el potencial de sus Pokémon en combate. Desde sugerencias de movimientos hasta tácticas de equipo, nuestra Pokédex no oficial es una guía completa que acompaña a los jugadores en su viaje para convertirse en los mejores entrenadores de PokeMMO. ¡Explora las páginas de la Pokédex y descubre el conocimiento necesario para construir un equipo imparable!</p>
	</main>
    <script src="js/script.js"></script>
</body>
</html>