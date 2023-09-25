<?php 
	Class index {
	private $pdo;

		public function __construct(){
			try{
				$this->pdo=database::conection();
			}catch(Exception $e){
				die($e->getMessage());
			}
		}

		public function Open_Query($table,$cond)
		{
			try{
				$stm=$this->pdo->prepare("SELECT * FROM " .$table." ".$cond);
				$stm->execute();
				return $stm->fetchAll(PDO::FETCH_OBJ);
			}catch(Exception $e){
				die($e->getMessage());
			}
		}	
			
		public function Open_Query_alone($table){
			try{
				$stm=$this->pdo->prepare("SELECT * FROM ".$table." ".$conditions." ;");
				$stm->execute();
				$stm->fetchAll(PDO::FETCH_OBJ);
			}catch(Exception $e){
				die($e->getMessage());
			}
		}
	}
