<?php
	class security{
		public function Start_Session(array $Security_Data){
			$_SESSION['NAME']=$Security_Data['name'];
		}		
		public function envelope_one(){
			
		}
		
	}