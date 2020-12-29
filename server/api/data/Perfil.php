<?php

class Perfil
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

    public function insert($data){
        try {
            $statement = $this->con->prepare("call perfilInsert (?,?,?,?)");
            $statement->bind_param("ssss",  $data->perfil,
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

  	public function getAll(){
        try {
            $result=$this->con->query("CALL perfilGetAll()");
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

	public function getById($id){
        try {
            $result=$this->con->query("CALL perfilGetById({$id})");
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
            $statement = $this->con->prepare("call perfilUpdate (?,?,?,?,?)");
            $statement->bind_param("issss",$data->id_perfil,
                                           $data->perfil,
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
            $statement = $this->con->prepare("call perfilDelete(?)");
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


}

?>
