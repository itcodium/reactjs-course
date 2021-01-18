
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
                echo("IF (index=".$index.") ".$node["title"]." - ".$node["depth"]." - ".$pnode["depth"]."<br>");
                $this->node=&$node;
                $this->create($index+1,$node);
                
            }else{
                if( $node["depth"]-1==$pnode["depth"]){
                    // echo("[A] ELSE (index=".$index.") ".$node["title"]." - ".$node["depth"]." - ".$pnode["depth"]."<br>");
                    if($this->getNextNode($index)["depth"]> $node["depth"]){
                        echo("[A.2.1] IF <br>");
                        echo("(** index=".$index.") ".$node["title"]." - ".$node["depth"]." - ".$pnode["depth"]."<br>");
                        $this->create($index+1,$node);
                        array_push($pnode["menu"],$node);
                    }else{
                        echo("[A.2.2] ELSE <br>");
                        $this->create($index+1,$pnode);
                        array_push($pnode["menu"],$node);
                        
                    }
                }
                
                if($node["depth"]<$pnode["depth"] ){
                    echo("[B] ++ ELSE (index=".$index.") T:".$this->node["title"]." - ".$node["depth"]." - ".$pnode["depth"]."<br>");
                    $this->create($index+1,$this->node);
                    array_push($this->node["menu"],$node);
                    
                }
            }
            return $node;    
        }
        
        /*
        
            $node= $this->getNode($this->data[$index]);
            echo("   depth:  ".$this->data[$index]["depth"]." - ".$pnode["depth"]."<br>");    
            if( $this->data[$index]["depth"]==0){
                // echo("<br> SOLO UNA VEZ *) d=0 ".$node["title"]."<br><br>");
                $this->node=&$node;
                array_push($this->node["menu"],"888");
                
                $this->node_equal=null;
                return $this->create($index+1,$node);
            }
            else{
                if($this->data[$index]["depth"]>$pnode["depth"] ){
                    echo("1) d>d ".$node["title"]."<br>");
                    //$pnode["menu"].append($node); 
                    array_push($this->node["menu"],$node);
                    //print_r($pnode);
                    //echo("<br>  A) -> ". $node["depth"]." - ". $node["title"]); # 
                }
                
                if($this->data[$index]["depth"]<$pnode["depth"] ){
                    echo("2) ELSE d<d ".$node["title"]."<br>");
                    array_push($this->node["menu"],$node);
                    $this->node=&$node; #1
                }

                if($this->data[$index]["depth"]==$pnode["depth"] ){
                    echo("3) d==d ".$node["title"]."<br>");
                    if(is_null($this->node_equal)){
                        $this->node_equal=&$this->node;
                    }
                    array_push($this->node["menu"],$node);
                }
                return $this->create($index+1,$node);
            }
        }*/
        
    }
}
/*
class CreateMenu():
    data=None
    lstNode=[]
    length=0
    position=-1
    node=None
    node_equal=None
    ant_depth=None
    list_index=0
    def  setData(self,value):
        self.lstNode=[]
        self.data=value
        self.length=len(self.data)
    def  getNode(self,value):
        return { "title":   value["menu_text"],
                 "depth":   value["depth"],
                 "id_menu": value["id_menu"], 
                 "class":"menu-icon icon-folder",
                 "menu":[]}    
    def create(self,index,pnode):
        if(index<self.length):
            node= self.getNode(self.data[index]) 
            if self.data[index]["depth"]==0:
                self.lstNode.append(node)
                self.node=node
                self.node_equal=None
                return self.create(index+1,node)
            else:
                if(self.data[index]["depth"]>pnode["depth"] ):
                    pnode["menu"].append(node) 
                    print("  A) -> ",node["depth"],node["title"]) # 
                
                if(self.data[index]["depth"]<pnode["depth"] ):
                    self.node["menu"].append(node) 
                    self.node=node #1
                    print("B) -> ",node["depth"],node["title"],self.node["title"]) # 
                
                if(self.data[index]["depth"]==pnode["depth"] ):
                    if(self.node_equal==None):
                        self.node_equal=self.node
                    self.node["menu"].append(node) 
                    print("C) -> SAVE", self.node["title"])
                
                
                return self.create(index+1,node)
        print("000000000000000000000000")
        return self.lstNode
*/      

?>