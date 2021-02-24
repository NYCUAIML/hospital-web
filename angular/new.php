<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');
header('Access-Control-Allow-Credentials: true');
include('connect.php');
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
        $content = mysqli_real_escape_string($conn,$postdata);
        $sql = "INSERT INTO form (content) VALUES('$content')";
        mysqli_query($conn,$sql);
}
?>