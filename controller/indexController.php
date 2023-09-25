<?php
	Class indexController{
	private $modelIndex;

		public function __construct(){
			try{
				$this->modelIndex = new index();
			}catch(Exception $e){
				die($e->getMessage());
			}
		}
		public function viewIndex(){
			require_once('view/shared/index.php');
		}
	}
