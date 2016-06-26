<?php
include "./../../db/serverside/config.php";

$params = json_decode(file_get_contents('php://input'),true);
$conn->getArticle($params['id']);
?>