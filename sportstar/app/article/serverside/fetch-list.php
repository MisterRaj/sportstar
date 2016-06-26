<?php
include "./../../db/serverside/config.php";
$fields = json_decode(file_get_contents('php://input'),true);
$conn->getArticles($fields['id']);
?>