<?php
// Including database connections
require_once dirname(__DIR__).'/DBase/DBConnection.php';
// Fetching and decoding the inserted data
$postdata = file_get_contents("php://input");
$data = json_decode($postdata);
//$data = json_decode(file_get_contents("php://input"));
// Escaping special characters from submitting data & storing in new variables.
$emp_name = mysqli_real_escape_string($con, $data->emp_name);
$emp_email = mysqli_real_escape_string($con, $data->emp_email);
$emp_gender = mysqli_real_escape_string($con, $data->emp_gender);
$emp_address = mysqli_real_escape_string($con, $data->emp_address);
// mysqli insert query
$query = "INSERT INTO emp_details (emp_name,emp_email,emp_gender,emp_address) VALUES ('$emp_name', '$emp_email', '$emp_gender', '$emp_address')";
// Inserting data into database
mysqli_query($con, $query);
echo true;
?>
