<?php
include("./db_connection.php");
header("Access-Control-Allow-Origin: http://localhost:5173");

if($_SERVER['REQUEST_METHOD'] === 'POST'){
    $name = $_POST['name'];
    $message = $_POST['message'];

    $insert_query = "INSERT INTO messages(name, message) VALUES('$name', '$message')";
    $execute = mysqli_query($connect, $insert_query);
}


?>