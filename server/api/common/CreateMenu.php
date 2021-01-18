
<?php
class CreateMenu{
    private $data=null;
    private $lstNode=array();
    private $length=0;
    private $position=-1;
    private $node=null;
    private $node_equal=null;
    private $ant_depth=null;
    private $list_index=0;
   
    public function setData($value){
        $this->lstNode=[];
        $this->data= json_decode(json_encode($value), true); 
        $this->length=count($this->data);
    }

    public function getNode($value){
        $result= array(
            "title"=>$value["title"], 
            "depth"=>$value["depth"], 
            "id_menu"=>$value["id_menu"], 
            "class"=>"menu-icon icon-folder", 
            "menu"=>[]);
        return $result;
    }
    public function getNextNode($index){
        if($index+1<$this->length){
            return $this->getNode($this->data[$index+1]);
        }
    }    
    public function create($index,&$pnode=null){
        if($index<$this->length){
            $node= $this->getNode($this->data[$index]);
            if($this->data[$index]["depth"]==0){
                //echo("IF (index=".$index.") ".$node["title"]." - ".$node["depth"]." - ".$pnode["depth"]."<br>");
                $this->node=&$node;
                $this->create($index+1,$node);
            }else{
                if( $node["depth"]-1==$pnode["depth"]){
                    if($this->getNextNode($index)["depth"]> $node["depth"]){
                        $this->create($index+1,$node);
                    }else{
                        $this->create($index+1,$pnode);
                    }
                    array_push($pnode["menu"],$node);
                }
                if($node["depth"]<$pnode["depth"] ){
                    $this->create($index+1,$this->node);
                    array_push($this->node["menu"],$node);
                }
                
                    
            }
            return $node;    
        }
    }
}
   

?>