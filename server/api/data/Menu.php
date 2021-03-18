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
    public function addNodeSameLevel($node){
        try {
            $statement = $this->con->prepare("call menu_addNodeSameLevel(?,?,?,?,?,?)");
            $statement->bind_param("isssss",$node->id_menu,
                                            $node->lang,
                                            $node->title,
                                            $node->url,
                                            $node->icon,
                                            $node->action);
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

    public function addNodeChild($node){
        try {
            $statement = $this->con->prepare("call menu_addNodeChild(?,?,?,?,?,?)");
            $statement->bind_param("isssss",$node->id_menu,
                                            $node->lang,
                                            $node->title,
                                            $node->url,
                                            $node->icon,
                                            $node->action);
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
	public function delete($id){
        try {
            $statement = $this->con->prepare("call menu_deleteNodeMoveChild(?)");
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
    public function update($node){
        try {
            $statement = $this->con->prepare("call menu_updateNode(?,?,?,?,?,?)");
            $statement->bind_param("isssss",$node->id_menu,
                                            $node->lang,
                                            $node->title,
                                            $node->url,
                                            $node->icon,
                                            $node->action);                                           
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
