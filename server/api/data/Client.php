<?php

/*
    https://www.codewall.co.uk/php-mysqli-examples-the-ultimate-tutorial/
    i (entero), d (double), s (string), b	(blob) y se envía en paquetes
*/

class Client
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
            $result=$this->con->query("CALL clientGetAll()");
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
            $result=$this->con->query("CALL clientGetById({$id})");
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
    public function clientGetByName($name){

        try {
            $result=$this->con->query("CALL clientGetByName('{$name}')");
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
        } catch (Exception $e){
            throw new Exception($e->getMessage());
        }finally{
            $this->con->close();
        }
    }

	public function insert($data){
        try {
            $statement = $this->con->prepare("call clientInsert (?, ?, ?, ?, ?)");
            $statement->bind_param("ssiss", $data->nombre, $data->codigo, $data->habilitado, $data->creado_por ,$data->fecha_modificacion);
            $statement->execute();
            $result = $statement->get_result();
            return $result->fetch_object();
        } catch (Exception $e){
            throw new Exception($e->getMessage());
        }finally{
            $this->con->close();
        }
    }

    public function update($data){
        try {
            $statement = $this->con->prepare("call clientUpdate (?, ?, ?, ?, ?)");
            $statement->bind_param("issis",$data->id, $data->nombre, $data->codigo, $data->habilitado, $data->modificado_por);
            $statement->execute();
            $result = $statement->get_result();
            return $result->fetch_object();
        } catch (Exception $e){
            throw new Exception($e->getMessage());
        }finally{
            $this->con->close();
        }
    }

	public function deleteByCode($code){
        try {
            $statement = $this->con->prepare("call clientDeleteByCode (?)");
            $statement->bind_param("s", $code);
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
            $statement = $this->con->prepare("call clientDelete(?)");
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
