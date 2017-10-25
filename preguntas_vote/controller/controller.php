<?php 
	include_once ("../lib/utils.php");
	require_once "../application/Model.php";

	$action = $_POST['action'];
	$model = new Model();

	switch ($action) {
		case 'add':
			$question  = $_POST['questions'];
			$answers  = $_POST['answers'];

			$aux = 0;
			for($i = 0; $i < sizeof($question); $i++ ) {
				if($question[$i] != "") {
					$model->execute("INSERT INTO voto_pregunta (idvoto_pregunta, nombre, tipo, estado, presentacion) VALUES (NULL, '$question[$i]', 'multiple', '0', '1')");
					$model->execute("SELECT COUNT(*) id FROM voto_pregunta");
					$id_pregunta = $model->fetch();
					$id = $id_pregunta['id'];

					for($j = $aux; $j < ($aux + 6); $j++ ) {
						if($answers[$j] != "" ) {
							$model->execute("INSERT INTO voto_respuesta (idvoto_respuesta, idvoto_pregunta, opcion, respuesta) VALUES (NULL, '$id', '$answers[$j]', '0')");
						}
					}
					$aux += 6;
				}
			}
			header('Location: ../index.php?success=1');
			break;
		case 'edit' : 
			$id  = $_POST['question'];
			$answers  = $_POST['answer'];

			for($i = 0; $i < sizeof($answers); $i++) {
				if($answers[$i] != "") {
					$model->execute("INSERT INTO voto_respuesta (idvoto_respuesta, idvoto_pregunta, opcion, respuesta) VALUES (NULL, '$id', '$answers[$i]', '0')");
				}
			}
			header('Location: ../index.php?success=1');
			break;
		case 'delete' : 
			$model->execute("TRUNCATE TABLE voto_respuesta");
			$model->execute("DELETE FROM voto_pregunta");
			$model->execute("ALTER TABLE voto_pregunta auto_increment = 1");

			$response = array('response' => 'done', );
			echo json_encode($response);die();
			break;
		default:
			$response = array('response' => 'no se encontro action', );
			echo json_encode($response);die();
			break;
	}
?>