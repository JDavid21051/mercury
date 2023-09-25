<?php
	class adminController {
	private $modelIndex;
	private $modelSecurity;
	private $modelAdmin;
		public function __construct (){
			try{
				$this->modelIndex	=new index();
				$this->modelAdmin	=new admin();
				$this->modelSecurity=new security();
			}catch(Exception $e){
				die($e->getMessage());				
			}
		}
		public function view_Admin () {
			require_once('view/admin/header.php');
			require_once ('view/admin/index.php');
			require_once('view/admin/footer.php');
		}
		public function view_Baljit () {
			require_once('view/all/header.php');
			require_once ('view/admin/baljit.php');
			require_once('view/admin/footer.php');
		}
		public function Fail_Login (){
                        require_once('view/admin/header.php');
                        require_once('view/admin/fail_login.php');
                        require_once('view/admin/footer.php');
		}
		public function Validated_Admin(){
			require_once('view/admin/header.php');
			require_once ('view/admin/index.php');
			require_once('view/admin/footer.php');
		}
		public function View_Archives(){
			require_once('view/admin/header.php');
			require_once('view/admin/archives.php');
			require_once('view/admin/footer.php');
		}
		public function File_Details(){
			require_once('view/admin/header.php');
			require_once('view/admin/file_details.php');
			require_once('view/admin/footer.php');
		}
		public function Upload_File(){
			if (file_exists("directory/".$_REQUEST['Uploader'])){
				$file=$_FILES['Upload']['name'];
				$rute=$_FILES['Upload']['tmp_name'];
				$destination="directory/".$_REQUEST['Uploader']."/".$file;
				$Users_Data = array('ruta'=>$rute,'destino'=>$destination,'empresa'=>$_REQUEST['Uploader'],'archivo'=> $_REQUEST['ReceptorName']);
				$this->modelAdmin->File_Uploaded($Users_Data);				
				header('location:?genus=admin&medum=View_Archives&Id=/'.$_REQUEST['Uploader'].'');
			}else{
				$file=$_FILES['Upload']['name'];
				$rute=$_FILES['Upload']['tmp_name'];
				mkdir("directory/".$_REQUEST['Uploader'], 0777);
				$destination="directory/".$_REQUEST['Uploader']."/".$file;
				$Users_Data = array('ruta'=>$rute,'destino'=>$destination,'empresa'=>$_REQUEST['Uploader'],'archivo'=> $_REQUEST['ReceptorName']);
				$this->modelAdmin->File_Uploaded($Users_Data);
				header('location:?genus=admin&medum=View_Archives&Id=/'.$_REQUEST['Uploader'].'');
				}
		}
		public function Rename_File(){
			$Users_Data=array(
			"nuevonombre"=>		$_POST['valorCaja1'],
			"viejoaruta"=>		$_POST['valorCaja2'], 
			"nit"=>				$_POST['valorCaja3'],
			"ident"=>			$_POST['valorCaja5']);
			$ident=$_POST['valorCaja5'];
			$this->modelAdmin->Renamed_File($Users_Data, $ident);
		}
		public function Delete_File(){
			$rutacompleta=$_POST['Ruta'];
			$this->modelAdmin->Deleted_File($rutacompleta);
		}		
		public function Download_File(){
                    $file = $_POST['RutaCompleta'];
                    header("Content-disposition: attachment; filename=".basename ($file)."");
                    header("Content-type: application/octet-stream");
                    readfile($file);
		}
		public function Show_Name(){
                    $basnam=$_POST['RutNam'];
                    echo basename($basnam);
		}
	}
?>