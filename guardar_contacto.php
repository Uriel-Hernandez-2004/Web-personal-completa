<?php
$name = $_REQUEST["nombre"];
$email = $_REQUEST["correo"];
$comentario = $_REQUEST["comentario"];
// Configuración de la base de datos
$host = 'localhost';
$usuario = 'root';
$clave = '';   // Cambia esto si tu base de datos tiene una contraseña
$base_de_datos = "sitioweb";

// Conexión a la base de datos
$conn = new mysqli($host, $usuario, $clave, $base_de_datos);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
} else {
    $stmt = $conn->prepare("INSERT INTO comentario (Name, Email, Review) VALUES (?, ?, ?)");
            if ($stmt === false) {
                die("Error al preparar la consulta: " . $conn->error);
            } else {
                $stmt->bind_param("sss", $name, $email, $comentario);
                if ($stmt->execute()) {
                    echo "Ingreso correctamente";
                    $conn->close();
                    header("Location: index.html");
                } else {
                    echo "Error al insertar el registro: " . $stmt->error;
                }
            }
}
// Cerrar conexión
$conn->close();
?>
