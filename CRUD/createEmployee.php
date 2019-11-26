<?php
// Including database connections
require_once dirname(__DIR__).'/DBase/DBConnection.php';
// Fetching and decoding the inserted data
$data = json_decode(file_get_contents("php://input"));
print_r($data);
?>
