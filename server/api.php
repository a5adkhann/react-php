<?php
include("./db_connection.php");
header("Access-Control-Allow-Origin: http://localhost:5173");

if($_SERVER['REQUEST_METHOD'] === 'POST'){
    $name = $_POST['name'];
    $message = $_POST['message'];

    $insert_query = "INSERT INTO messages(name, message) VALUES('$name', '$message')";
    $execute = mysqli_query($connect, $insert_query);

    echo json_encode(["status" => "success", "message" => "Inserted Successfully"]);
}

if($_SERVER['REQUEST_METHOD'] === "GET"){
    $select_query = "SELECT * FROM messages";
    $execute = mysqli_query($connect, $select_query);

    $result = [];

    while($row = mysqli_fetch_array(($execute))){
        $result[] = $row;
    }
    echo json_encode(($result));
}

if($_SERVER['REQUEST_METHOD'] === 'PUT'){
    $id = $_GET['id'];
    $name = $_POST['name'];
    $message = $_POST['message'];

    $update_query = "UPDATE messages SET name = '$name' AND message = '$message' WHERE id = $id";
    $execute = mysqli_query($connect, $update_query);

    echo json_encode(["status" => "success", "message" => "Updated Successfully"]);
}



?>