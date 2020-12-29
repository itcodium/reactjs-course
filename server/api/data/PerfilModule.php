<?php
class PerfilModule
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
            $result=$this->con->query("CALL perfilmoduleGetAll()");
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
            $result=$this->con->query("CALL perfilmoduleGetById({$id})");
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
	public function getByIdPerfil($id){
        try {
            $result=$this->con->query("CALL perfilmoduleGetByIdPerfil({$id})");
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
	public function getByModuloUsuario($modulo,$id_usuario){
        try {
            $statement = $this->con->prepare("call perfilmoduleGetByModuloUsuario(?,?)");
            $statement->bind_param("si",  $modulo,
                                            $id_usuario);
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
            $statement = $this->con->prepare("call perfilmoduleInsert (?,?,?,?)");
            $statement->bind_param("iiis",  $data->id_perfil,
                                            $data->id_modulo,
                                            $data->enabled,
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
    public function update($data){
        try {
            $statement = $this->con->prepare("call perfilmoduleUpdate (?,?,?,?,?)");
            $statement->bind_param("iiiis",$data->id_perfil_modulo,
                                           $data->id_perfil,
                                           $data->id_modulo,
                                           $data->enabled,
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
            $statement = $this->con->prepare("call perfilmoduleDelete(?)");
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
