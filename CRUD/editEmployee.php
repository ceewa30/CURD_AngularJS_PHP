<?php
// Including database connections
require_once dirname(__DIR__).'/DBase/DBConnection.php';
// mysqli query to fetch all data from database
// Takes raw data from the request
$data = json_decode(file_get_contents("php://input"));
var_dump($data);
$emp_id = mysqli_real_escape_string($con, $data->emp_id);
$emp_name = mysqli_real_escape_string($con, $data->emp_name);
$emp_email = mysqli_real_escape_string($con, $data->emp_email);
$emp_gender = mysqli_real_escape_string($con, $data->emp_gender);
$emp_address = mysqli_real_escape_string($con, $data->emp_address);
// mysqli insert query
$query = "UPDATE emp_details SET emp_name = '$emp_name', emp_email = '$emp_email', emp_gender = '$emp_gender', emp_address = '$emp_address' WHERE emp_id=$emp_id";
// Updating data into database
mysqli_query($con, $query);
echo true;
?>
