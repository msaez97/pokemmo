<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wiki | Pokedex | PokeMMO | Español | No Oficial</title>
	<link rel="icon" type="image/vnd.icon" href="img/favicon.ico">
    <link rel="stylesheet" href="css/style.css">
    <link rel="preload" href="js/script.js" as="script" />
</head>
<body>
	<?php require 'assets/header.php'; ?>
	<main class="contenedor">
		<div class="buscador">
			<input oninput="mostrarSugerencias()" class="input-buscador" type="text" placeholder="Buscar pokemon por nombre..">
			<div class="sugerencias" id="sugerenciasContainer"></div>
			<button onclick="buscarPokemon()">Buscar</button>
		</div>
		<div class="contenedor-mostrar-todo">
			<button class="padding-all upper negro mostrartodo" onclick="location.reload()">Mostrar Todo</button>
		</div>
		<button onclick="mostrarFiltros()" class="btn-filtros"><img src="img/filtrar.png" alt="filtros">Filtros</button>
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