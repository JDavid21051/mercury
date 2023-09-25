<?php
require_once 'core/core.php';

if(!isset($_REQUEST['clase'])){
    $controller="index";
    require_once ('controller/'.$controller.'Controller.php');
    $controllerClass=$controller.'Controller';
    $icontroller_class=new $controllerClass();
    $icontroller_class->viewIndex();
} else {
    $controller=$_REQUEST['clase'];
    require_once ('controller/'.$controller.'Controller.php');
    $controllerClass=$controller.'Controller';
    $icontroller_class=new $controllerClass();
    $method= isset($_REQUEST['metodo']) ? $_REQUEST['metodo'] : 'index';
    call_user_func(array($icontroller_class, $method));
}
