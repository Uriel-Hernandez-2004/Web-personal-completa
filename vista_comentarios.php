<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Comentarios</title>
    <link rel="stylesheet" href="/css/style.css"> <!-- Vinculando el archivo CSS -->
</head>
<body>

    <header>
        <h1>Comentarios de los Usuarios</h1>
    </header>

    <div class="comentarios-container">
        <?php
        // Conexión a la base de datos
        $conexion = mysqli_connect("localhost", "root", "", "sitioweb") or
        die("Problemas con la conexión");

        // Consulta para recuperar los registros
        $registros = mysqli_query($conexion, "SELECT Name, Email, Review FROM comentario") or
        die("Problemas en el select:" . mysqli_error($conexion));

        // Mostrar los registros
        while ($reg = mysqli_fetch_array($registros)) {
            echo "<div class='comentario'>";
            echo "<p><strong>Nombre:</strong> " . htmlspecialchars($reg['Name']) . "</p>";
            echo "<p><strong>Correo Electrónico:</strong> " . htmlspecialchars($reg['Email']) . "</p>";
            echo "<p><strong>Comentario:</strong> " . htmlspecialchars($reg['Review']) . "</p>";
            echo "</div><hr>";
        }

        // Cerrar la conexión
        mysqli_close($conexion);
        ?>
    </div>

    <footer>
        <p>&copy; 2024 Mi Página Web Personalizada</p>
    </footer>

    <script src="script.js"></script> <!-- Vinculando el archivo JS -->
</body>
</html>


