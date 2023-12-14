<?php 
$pokemonName = $_GET["name"];
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="google-adsense-account" content="ca-pub-4911360042357338">
    <meta name="description" content="Mira las estadisticas y zonas de captura de <?php echo ucfirst($pokemonName); ?> en la Wiki No Oficial en Español de PokeMMO.">
    <title><?php echo ucfirst($pokemonName); ?> | Wiki | PokeMMO | Español | No Oficial</title>
    <link rel="icon" type="image/vnd.icon" href="../img/favicon.ico">
    <link rel="apple-touch-icon" href="../img/favicon.ico">
    <link rel="stylesheet" href="../css/style.css">
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-GW3K77TW0W"></script>
    <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-GW3K77TW0W');
    </script>
</head>
<body>
    <?php require '../assets/header.php'; ?>



    <script src="../js/pokemon.js"></script>
</body>
</html>