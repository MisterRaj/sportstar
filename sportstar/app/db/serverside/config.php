<?php
include "db.php";

$root_path = $_SERVER['DOCUMENT_ROOT'];
$article_fields = array('title','content','category','status','author_id','image'); 
$system_vars = array(
	'imagePath' => $root_path."/angular-proj/angularjs/aravind-proj/sportstar/app/assets/images/",
	'host' => 'localhost',
	'username' => 'root',
	'password' => 'root',
	'db' => 'sportstar',
	);
$conn = new db($system_vars['host'],$system_vars['username'],$system_vars['password'],
	$system_vars['db']);
?>