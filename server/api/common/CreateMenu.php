
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
            "icon"=>$value["icon"], 
            "action"=>$value["action"], 
            "url"=>$value["url"], 
            "class"=>"menu-icon icon-folder", 
            "items"=>[]);
        return $result;
    }
    public function getNextNode($index){
        if($index+1<$this->length){
            return $this->getNode($this->data[$index+1]);
        }
    }    
    public function getNextDepthIndex($depth, $currentIndex){
        for ($i = $currentIndex+1; $i < $this->length; $i++) {
            if($depth==$this->data[$i]["depth"]){
                return $i;
            }
        }
        return $this->length;
    }
    public function getMenu($index,$nextIndex=null){
        $list=[];
        if($index<$this->length){
            if (is_null($nextIndex)){
                $nextIndex=$this->length;
            }
            $depth= $this->getNode($this->data[$index])["depth"];
            for ($i = $index; $i < $this->length &&  $i< $nextIndex; $i++) {
                if($depth==$this->data[$i]["depth"]){
                    $node= $this->getNode($this->data[$i],$nextIndex);
                    $next=$this->getNextDepthIndex($depth,$i);
                    if($this->data[$i+1]["depth"]-1== $node["depth"]){
                         $node["items"]=$this->getMenu($i+1, $next);
                    }
                    array_push($list,$node);
                }   
            }
        }
        return $list;
    }
}
   

?>