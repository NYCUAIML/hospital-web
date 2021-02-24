<?php
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With, application/json');
header('Access-Control-Allow-Credentials: true');
include('connect.php');
error_reporting(E_ERROR);
$sql = "SELECT * FROM form";

$form = [];
if($result = mysqli_query($conn,$sql))
{
    $cr = 0;
    while($row = mysqli_fetch_row($result))
    {
        $form[$cr] = $row[0];
        $cr++;
    }
    //print_r($form);
    echo json_encode($form);
}
/*
$row = mysqli_fetch_row($result);
$form[$cr]['fname'] = $row['fname'];

echo json_encode($row[1],true);
*/
?>