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
		<p class="padding-no-bottom">¡Bienvenido a esta wiki no oficial en español de PokeMMO! Aquí encontrarás una valiosa fuente de información sobre este fascinante juego que combina el mundo de Pokémon con la experiencia multijugador en línea. En esta plataforma, los entrenadores de todo el mundo se reúnen para explorar regiones conocidas, desafiar gimnasios, intercambiar Pokémon y participar en emocionantes batallas. Nuestra wiki está dedicada a proporcionar detalles detallados sobre aspectos clave del juego, desde estrategias de entrenamiento hasta ubicaciones de Pokémon raros.</p>
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
	</main>
    <script src="js/script.js"></script>
</body>
</html>