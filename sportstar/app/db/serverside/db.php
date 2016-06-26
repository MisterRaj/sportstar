<?php
class db{
	public $connection = "";
	public function __construct($host="",$username="",$password="",$db){
		if($host!="" && $username!="" && $password!=""){
			$this->connection = new mysqli($host,$username,$password,$db);
		} 
	}

	public function addArticles($fields=""){
		if($fields!=""){
			//$fields = $this->connection->real_escape_string($fields);
			
			$sql = "INSERT INTO `sportstar`.`article` (`title`,`content`,`category`,`status`,`author_id`,`image`) VALUES (".$fields.")";
			
			if($this->connection->query($sql) === TRUE){
				echo "Success";
			} else {
				echo "Error";
			}
		}
	}

	public function updateArticle($fields=array()){
		if(!empty($fields)){
			$id = $fields['id'];
			unset($fields['id']);
			if(isset($fields['file']))
				unset($fields['file']);

			$sql = "UPDATE `sportstar`.`article` SET ";
			foreach($fields as $key=>$value){
				$sql.=" `".$key."` = ".$value.",";
			}
			$sql = substr($sql,0,strlen($sql)-1);
			$sql.=" where id =".$id;
			
			if($this->connection->query($sql) === TRUE){
				echo "Success";
			} else {
				echo "Error";
			}
		}
	}

	public function getArticles($id=""){
		if($id!=""){
			$sql = "SELECT * FROM `sportstar`.`article` where `author_id` = ".$id;
			$result = $this->connection->query($sql);
			
			$output = array();
			if ($result->num_rows > 0) {
			    while($row = $result->fetch_assoc()) {
			        $output[] = $row;
			        //echo json_encode($output);return;
			    }
			}
		}
		echo json_encode($output);
	}

	public function recentArticles(){
		$sql = "SELECT * FROM `sportstar`.`article` where status = 3 ORDER BY `id` desc";
		$result = $this->connection->query($sql);
		
		$output = array();
		if ($result->num_rows > 0)
		{
		    while($row = $result->fetch_assoc()) {
	        	$output[] =$row;
	    	}
	    }
		echo json_encode($output);
	}

	public function getArticle($id=""){
		if($id!=""){
			$sql = "SELECT * FROM `sportstar`.`article` where id = ".$id;
			$result = $this->connection->query($sql);
			$output = array();
			if ($result->num_rows > 0) {
				$row = $result->fetch_assoc();
		        $output[] =$row;
			}
		}
		echo json_encode($output);
	}

	public function getPendingList(){
		$sql = "SELECT * FROM `sportstar`.`article` where status = 2 ORDER BY id desc";
		$result = $this->connection->query($sql);
		$output = array();

		if ($result->num_rows > 0) {
			$row = $result->fetch_assoc();
	        $output[] =$row;
		}
		echo json_encode($output);	
	}

	public function addUser($fields=""){
		if($fields!=""){
			$sql = "INSERT INTO `sportstar`.`user` (`name`, `user_name`, `password`, `email`, `phone`, `role` ) VALUES (".$fields.", '2')";

			if($this->connection->query($sql) === TRUE){
				echo "Success";
			} else {
				echo "Failed";
			}
		}
	}

	public function getUsers($fields=""){
		if($fields!=""){
			$fields = substr($fields, 0, strlen($fields)-1);
			$sql = "SELECT ".$fields." FROM `sportstar`.`user`";
			$result = $this->connection->query($sql);
			
			$output = array();
			if ($result->num_rows > 0) {
			    while($row = $result->fetch_assoc()) {
			        $output[] =$row;
			    }
			} else {
				$output = false;
			}
		}
		echo json_encode($output);
	}

	public function login($username="", $password=""){
		if($username !== '' && $password !== ''){
			$sql = "SELECT * FROM `sportstar`.`user` where `user_name` = '".$username."' AND `password` = '".$password."'";
			$result = $this->connection->query($sql);
			
			$output = array();
			if ($result->num_rows > 0) {
			    echo json_encode($result->fetch_assoc());
			} else {
				echo null;
			}
		} else {
			echo "error";
		}
	}

}
?>