<?php

    $destino = "joakindel95@gmail.com";
        
        
        $cod = $_POST["cod"];
        $nombre = $_POST["nombre"];
        $peso = $_POST["peso"];
        $url = $_POST["url"];
        
$header = "Solicitud de nuevo articulo";
$asunto = "Solicitud de nuevo articulo";

$mensaje = $cod . ": { \n nombre: " . $nombre . " , \n peso: " . $peso . ", \n urlImg: " . $url . ", \n },";

mail($destino, $asunto, $mensaje, $header);

echo "<script> alert(`mensaje enviado`)</script>";



?>