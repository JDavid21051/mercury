<?php
	class database {
		public static function conection(){
			try {
				$pdo= new PDO ('mysql:host=localhost;dbname=balanceStockDB;charset=utf8','root','');
				$pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
				$pdo->prepare("SELECT * FROM " .$table." ".$cond);
				return $pdo;
			} catch (Exception $e) {
				die($e->getMessages());
			}
		}
	}
?>