<?php 
	error_reporting(E_ALL);
	ini_set('display_errors','On');

	require_once '../lib/utils.php';	
	require_once '../model/User.php';

	$user = new User();

	// $result = $user->login('edgar@tanger-inc.com','123456');
	$result = $user->getAll();
		
	pre($result);die();
	// $rows = array();

	// while( $row = $result ) {
	// 	$rows[] = $row;
	// }

	// pre($rows);die();
?>