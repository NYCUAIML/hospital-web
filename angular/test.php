<?php
$conn = mysqli_connect("140.113.59.182","rickylu6",
                          "r6852625","angular");
if (mysqli_connect_errno())
{
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
}
$sql = "SELECT * FROM form";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_row($result);
echo $row[0];
?>