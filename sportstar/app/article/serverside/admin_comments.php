<?php
include "./../../db/serverside/config.php";

$fields = $_POST;

foreach ($fields as $key=>$val){
	$fields[$key]="'".$val."'";
}

$values = implode(",", array_values($fields));
$conn->updateArticle($fields);
?>