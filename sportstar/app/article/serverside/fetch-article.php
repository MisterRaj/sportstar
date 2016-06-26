<?php
include "./../../db/serverside/config.php";
$fields = array("title", "content", "id");
$select_fields = "";

$conn->getArticle($select_fields);
?>