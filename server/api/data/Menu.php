<?php

class Menu
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
/*
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
            $result=$this->con->query("CALL menu_getNodesDepth()");
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
*/
	public function getNodesDepth($lang){
        try {
            $statement = $this->con->prepare("call menu_getNodesDepth(?)");
            $statement->bind_param("s",  $lang);
            $statement->execute();
            $rawdata = array();
            $i=0;
            $result = $statement->get_result();
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
    
	public function getNodesDepthByUser($lang,$user){
        try {
            $statement = $this->con->prepare("call menu_getNodesDepthByUser(?,?)");
            $statement->bind_param("si",  $lang,$user);
            $statement->execute();
            $rawdata = array();
            $i=0;
            $result = $statement->get_result();
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
	public function getByUserURL($idUser,$url){
        try {
            $statement = $this->con->prepare("call menu_getNodesDepthByUserUrl(?,?)");
            $statement->bind_param("is",  $idUser, $url);
            $statement->execute();
            $rawdata = array();
            $i=0;
            $result = $statement->get_result();
            while($row = $result->fetch_object()){
                $rawdata[$i] = $row;
                $i++;
            }
            $result->close();
            if(count($rawdata)==0){
                throw new Exception("Not allowed"); 
            }
            return $rawdata;
        } catch (Exception $e){
            throw new Exception($e->getMessage());
        }finally{
            $this->con->close();
        }
    }
    

/*    
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

*/
}

?>
