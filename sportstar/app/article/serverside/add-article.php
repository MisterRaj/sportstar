<?php
include "./../../db/serverside/config.php";

$tmp_name="";
$fields = $_POST;
$error = 0;
$image_file_name = "";

if(isset($_FILES['file']['error']) & $_FILES['file']['error'] === 0)
{
	$tmp_name = $_FILES["file"]["tmp_name"];
    $image_file_name = $_FILES["file"]["name"];
	
	if(move_uploaded_file($tmp_name, $system_vars['imagePath'].$image_file_name))
	{
	}
	else
	{
		echo "File upload error";
		return;
	}
}
else
{
	$error = 1;
}

$fields['image'] = $image_file_name;

if(isset($fields['file']))
{
	unset($fields['file']);
}

$fields = array_merge(array_flip($article_fields), $fields);

foreach ($fields as $key=>$val)
{
		$fields[$key]='"'.$val.'"';
}

$values = implode(",", array_values($fields));
$conn->addArticles($values);
?>