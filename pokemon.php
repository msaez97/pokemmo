<?php 
$pokemonName = $_GET["name"];
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo ucfirst($pokemonName); ?> | Wiki | PokeMMO | Español | No Oficial</title>
    <link rel="icon" type="image/vnd.icon" href="img/favicon.ico">
    <link rel="stylesheet" href="../css/style.css">
</head>
<body>
    <?php require 'assets/header.php'; ?>



    <script src="js/pokemon.js"></script>
</body>
</html>