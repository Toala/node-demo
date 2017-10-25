<?php 
	require_once "../application/Model.php";
	include_once "../lib/utils.php";

	class Usuario {
		private $id_usuario,$nombre,$apellidos,$email,$password,$distrito, $ruta, $linea, $creado, $modificado,$status, $rol;
		
		function Usuario ( $id_usuario = null ) {
			if ($id_usuario != null) {
				$model = new Model();
				$result = $model->execute("SELECT u.*, r.tipo_rol rol FROM usuarios u, roles r WHERE u.id_rol = r.id_rol AND u.id_usuario = $id_usuario");

				$row = $model->fetch();

				$this->id_usuario = $row['id_usuario'];
				$this->nombre = $row['nombre'];
				$this->apellidos = $row['apellidos'];
				$this->email = $row['email'];
				$this->password = $row['password'];
				$this->distrito = $row['distrito'];
				$this->ruta = $row['ruta'];
				$this->linea = $row['linea'];
				$this->status = $row['status'];
				$this->creado = $row['creado'];
				$this->modificado = $row['modificado'];
				$this->rol = $row['rol'];
			}
		}

		function save($user) {
			$model = new Model();
			
			if($user[0] != null) {
				$model->execute("UPDATE usuarios SET nombre = '$user[1]', apellidos = '$user[2]', modificado = Now() WHERE id_usuario = $user[0]");
				$response = 0;				
			}else {
				$model->execute("INSERT INTO usuarios 
				(id_usuario, nombre, apellidos, email, password, status, creado, modificado, id_rol) VALUES (NULL, '$user[nombre]', '$user[apellidos]', '$user[email]', '$user[password]', '$user[status]', Now(), Now(), 1)");
				$response = 1;
			}			
			return $response;
		}

		function getAll() {
			$model = new Model();
			$model->execute("SELECT * FROM usuarios");			
			return $model->fetchAll();
		}
		
		function login ($email, $password) {
			$model = new Model();
			$model->execute("SELECT * FROM usuarios WHERE email = '$email' AND password = '$password'");
			$response = $model->fetch();
			
			if($response['id_usuario'] > 0) {
				$request = $response['id_usuario'];
			}else {
				$request = 0;
			}
			return $request;
		}

		public function getId_usuario() {
		    return $this->id_usuario;
		}
		
		public function setId_usuario($id_usuario) {
		    $this->id_usuario = $id_usuario;
		}

		public function getNombre() {
		    return $this->nombre;
		}
		
		public function setNombre($nombre) {
		    $this->nombre = $nombre;
		}

		public function getApellidos() {
			return $this->apellidos;
		}

		public function setApellidos($apellidos) {
			$this->apellidos = $apellidos;	
		}

		public function getEmail() {
		    return $this->email;
		}
		
		public function setEmail($email) {
		    $this->email = $email;
		}

		public function getPassword() {
		    return $this->password;
		}
		
		public function setPassword($password) {
		    $this->password = $password;
		}

		public function getDistrito() {
		    return $this->distrito;
		}
		
		public function setDistrito($distrito) {
		    $this->distrito = $distrito;
		}

		public function getRuta() {
		    return $this->ruta;
		}
		
		public function setRuta($ruta) {
		    $this->ruta = $ruta;
		}

		public function getLinea() {
		    return $this->linea;
		}
		
		public function setLinea($linea) {
		    $this->linea = $linea;
		}

		public function geStatus() {
		    return $this->status;
		}
		
		public function seStatus($status) {
		    $this->status = $status;
		}

		public function getCreado() {
		    return $this->creado;
		}
		
		public function setCreado($creado) {
		    $this->creado = $creado;
		}

		public function getModificado() {
		    return $this->modificado;
		}
		
		public function setModificado($modificado) {
		    $this->modificado = $modificado;
		}

		public function getRol() {
		    return $this->rol;
		}
		
		public function setRol($rol) {
		    $this->rol = $rol;
		}		
	}
?>