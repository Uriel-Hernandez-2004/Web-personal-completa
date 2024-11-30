<?php
// Configuración de conexión a la base de datos
$host = 'localhost';
$usuario = 'root';
$clave = ''; // Cambia esto si tu base de datos tiene una contraseña
$base_de_datos = 'sitioweb';

// Crear conexión a la base de datos
$conn = new mysqli($host, $usuario, $clave, $base_de_datos);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Consulta para obtener los comentarios
$sql = "SELECT Name, Email, Review FROM Review ORDER BY Email DESC";
$result = $conn->query($sql);

// Inicializar array para los comentarios
$comentarios = [];

// Verificar si hay resultados
if ($result && $result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $comentarios[] = $row;
    }
}

// Devolver los datos como JSON
header('Content-Type: application/json');
echo json_encode($comentarios);

// Cerrar conexión
$conn->close();
?>

