<?php
// Including database connections
require dirname(__DIR__).'/DBase/DBConnection.php';
// Takes raw data from the request
$data = json_decode(file_get_contents("php://input"));

// Converts it into a PHP object
// $data = json_decode($json, true);


var_dump($data->del_id);
$id = $data->del_id;

$query = "DELETE FROM emp_details WHERE emp_id=$id";
// $query .= "SET @num := 0;";
// $query .= "UPDATE emp_details SET emp_id = @num := (@num+1);";
// echo $query .= "ALTER TABLE emp_details AUTO_INCREMENT =1";
mysqli_query($con, $query);
$sql = "SET @num := 0;";
$sql .= "UPDATE emp_details SET emp_id = @num := (@num+1);";
$sql .= "ALTER TABLE emp_details AUTO_INCREMENT =1";
mysqli_multi_query($con,$sql);
echo true;
?>
