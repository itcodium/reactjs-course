<?php

class User
{
    private $con;

    function __construct()
    {
        require_once dirname(__FILE__).'/DbConnect.php';
        try {
            $db = new DbConnect();
		    $this->con = $db->connect();
        } catch (mysqli_sql_exception $e){
            echo('{"status":"error","message":"'.utf8_encode($e->getMessage()).'"}');
        }
    }

  	public function getAll(){
        try {
            $result=$this->con->query("CALL usuarioGetAll()");
            if (!$result) {
                throw new Exception($this->con->error);
            }
            $rawdata = array();
            $i=0;
            while($row = $result->fetch_object()){
                $rawdata[$i] = $row;
                $i++;
            }
            $result->close();
            return $rawdata;
        } catch (mysqli_sql_exception $e){
            throw new Exception($e->getMessage());
        }finally{
            $this->con->close();
        }
    }

    public function login($data){
      try {
            $statement = $this->con->prepare("call getSessionKeyByUser (?,?,?)");
            $statement->bind_param("sss",$data->email, md5($data->password), $data->lang);
            $statement->execute();
            $result = $statement->get_result();
            return $result->fetch_object();
        } catch (Exception $e){
            throw new Exception($e->getMessage(), $this->con->sqlstate);  
        }finally{
            $this->con->close();
        }
    }


	public function getById($id){
        try {
            $result=$this->con->query("CALL usuarioGetById({$id})");
            if (!$result) {
                throw new Exception($this->con->error);
            }
            $rawdata = $result->fetch_object();
            $result->close();
            return $rawdata;
        } catch (Exception $e){
            throw new Exception($e->getMessage());
        }finally{
            $this->con->close();
        }
    }

    public function update($data){
        try {
            $statement = $this->con->prepare("call usuarioUpdate (?,?,?,?,?,?)");
            $statement->bind_param("isssss",$data->id_usuario,
                                                $data->nombre,
                                                $data->apellido,
                                                $data->vigencia_desde,
                                                $data->vigencia_hasta,
                                                $data->modificado_por);
            $statement->execute();
            $result = $statement->get_result();
            return $result->fetch_object();
        } catch (Exception $e){
            throw new Exception($e->getMessage());
        }finally{
            $this->con->close();
        }
    }

	public function delete($id){
        try {
            $statement = $this->con->prepare("call usuarioDelete(?)");
            $statement->bind_param("i", $id);
            $statement->execute();
            $result = $statement->get_result();
            return $result->fetch_object();
        } catch (Exception $e){
            throw new Exception($e->getMessage());
        }finally{
            $this->con->close();
        }
    }

	public function insert($data){
        try {
            $statement = $this->con->prepare("call usuarioInsert (?,?,?,?,?,?,?,?,?)");
            $statement->bind_param("sssssisss", $data->usuario,
                                                $data->nombre,
                                                $data->apellido,
                                                $data->email,
                                                md5($data->password),
                                                $data->id_perfil,
                                                $data->vigencia_desde,
                                                $data->vigencia_hasta,
                                                $data->creado_por);
            $statement->execute();
            $result = $statement->get_result();
            return $result->fetch_object();
        } catch (Exception $e){
            throw new Exception($e->getMessage());
        }finally{
            $this->con->close();
        }
    }
}

?>
