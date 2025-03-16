<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  $to = "gomezcastillojuanyovani@gmail.com"; // Aquí va tu correo
  $subject = "Mensaje de Contacto";
  $headers = "From: $email";

  mail($to, $subject, $message, $headers);
  echo "<script>alert('Mensaje enviado con éxito'); window.location.href='index.html';</script>";
}
?>
