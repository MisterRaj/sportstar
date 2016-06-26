<?php
include "./../../db/serverside/config.php";

$tmp_name="";
$fields = $_POST;
$error = 0;

$params = json_decode(file_get_contents('php://input'),true);

foreach ($params as $key=>$val){
	if($key == 'cpassword')
	{
		unset($params[$key]);
	}
	else
	{
		$params[$key]="'".$val."'";
	}
}
$params = implode(",", array_values($params));
$conn->addUser($params);
?>