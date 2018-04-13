<?php
 header('Access-Control-Allow-Origin: *');
$servername = "localhost";
$username = "root";
$password = "Melani3B4b%";
$dbname = "test";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
$pk = $_POST['pk'];

$bal = $_POST['bal'];
$sql = "INSERT INTO testing (pk, bal) VALUES ( '$pk', '$bal' );";


if ($conn->query($sql) === TRUE) {
    echo "Record updated successfully";
} else {
    echo "Error updating record: " . $conn->error;
}

$conn->close();
?>
