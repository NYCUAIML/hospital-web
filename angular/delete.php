<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, DELETE");
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');
header('Access-Control-Allow-Credentials: true');
include('connect.php');
$form=file_get_contents("php://input");
$content = mysqli_real_escape_string($conn,$form);
$sql = "DELETE FROM form WHERE content = '$content' LIMIT 1";
mysqli_query($conn,$sql);
?>