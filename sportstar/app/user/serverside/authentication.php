<?php
include "./../../db/serverside/config.php";
$fields = $_POST;
$error = 0;

$params = json_decode(file_get_contents('php://input'),true);

if(isset($params['username']) && isset($params['password'])){

	$username = $params['username'];
	$password = $params['password'];

	$conn->login($username, $password);
}else {
	echo "error";
	return;
}
?>