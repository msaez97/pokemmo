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
		<div class="tiposfiltro">
			<button class="padding-all upper negro planta">Planta</button>
			<button class="padding-all upper negro fuego">Fuego</button>
		</div>
		<div id="pokemonList"></div>
		<div id="loadingIndicator">Cargando...</div>
	</main>
    <script src="js/script.js"></script>
</body>
</html>