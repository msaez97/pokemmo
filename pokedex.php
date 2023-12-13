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
			<button class="padding-all upper negro Planta">Planta</button>
			<button class="padding-all upper negro Fuego">Fuego</button>
			<button class="padding-all upper negro Veneno">Veneno</button>
			<button class="padding-all upper negro Volador">Volador</button>
			<button class="padding-all upper negro Agua">Agua</button>
			<button class="padding-all upper negro Bicho">Bicho</button>
			<button class="padding-all upper negro Normal">Normal</button>
			<button class="padding-all upper negro Eléctrico">Eléctrico</button>
			<button class="padding-all upper negro Tierra">Tierra</button>
			<button class="padding-all upper negro Hada">Hada</button>
			<button class="padding-all upper negro Lucha">Lucha</button>
			<button class="padding-all upper negro Psíquico">Psíquico</button>
			<button class="padding-all upper negro Roca">Roca</button>
			<button class="padding-all upper negro Acero">Acero</button>
			<button class="padding-all upper negro Hielo">Hielo</button>
			<button class="padding-all upper negro Fantasma">Fantasma</button>
			<button class="padding-all upper negro Dragón">Dragón</button>
			<button class="padding-all upper negro Siniestro">Siniestro</button>
		</div>
		<div id="pokemonList"></div>
		<div id="loadingIndicator">Cargando...</div>
	</main>
    <script src="js/script.js"></script>
</body>
</html>