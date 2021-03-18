<?php
require_once dirname(__FILE__).'/../common/CreateMenu.php';
require_once dirname(__FILE__).'/../common/ResponseFormat.php';
require_once dirname(__FILE__).'/../data/Menu.php';
require_once dirname(__FILE__).'/../jwt/Auth.php';
class MenuBus
{
    private static $response;
    private static $item;
    private static $app;
    public static function init($app){
        self::$response= new  ResponseFormat();
        self::$app=$app;
        self::$item=new Menu();
    }

    function __construct(){
        self::init();
    }

    public static function getNodesDepthByUser(){
        try{
            //$valid=Auth::Check(apache_request_headers()['Authorization']);
            $user=apache_request_headers()['user_id'];
            $data=self::$item->getNodesDepthByUser('ES',$user);
            $cmenu=new CreateMenu();
            $cmenu->setData($data);
            $menu=$cmenu->getMenu(0);
            self::$response->data($menu);
        }catch(exception $e) {
            self::$response->error($e->getMessage());
        }
        return self::$response->get();
    }

    public static function getFullMenu(){
        try{
            $valid=Auth::Check(apache_request_headers()['Authorization']);
            $data=self::$item->getNodesDepth('ES');
            $cmenu=new CreateMenu();
            $cmenu->setData($data);
            $test=$cmenu->getMenu(0);
            
            self::$response->data($test);
            
        }catch(exception $e) {
            self::$response->error($e->getMessage());
        }
        return self::$response->get();
    }

    public static function getMenuTree(){
            $data=self::$item->getNodesDepth('ES');
            $cmenu=new CreateMenu();
            $cmenu->setData($data);
            return $cmenu->getMenu(0);
    }

    public static function addNodeSameLevel(){
        try{
            $parameters =self::$app->request->getJsonRawBody();
            $parameters->lang='ES';
            $parameters->id_menu= $parameters->id_menu ? $parameters->id_menu : 0;
            $data=self::$item->addNodeSameLevel($parameters);
            self::$response->data([$data]);
        }catch(exception $e) {
            self::$response->error($e->getMessage());
        }
        return self::$response->get();
    }
    // Se usa para validar los permisos de los usuarios
    public static function getByUserURL($user,$path){
        try{
            return self::$item->getByUserURL($lang,$path);
        }catch(exception $e) {
            self::$response->error($e->getMessage());
        }
        return self::$response->get();
    }

    public static function delete($id){
        try{
            $valid=Auth::Check(apache_request_headers()['Authorization']);
            $data=self::$item->delete($id);
            self::$response->data($data);
        }catch(exception $e) {
            self::$response->error($e->getMessage());
        }
        return self::$response->get();
    }
    
/*    
    public static function getAll(){
        try{
            $valid=Auth::Check(apache_request_headers()['Authorization']);
            $data=self::$item->getAll();
            self::$response->data($data);
		}catch(exception $e) {
            self::$response->error($e->getMessage());
		}
        return self::$response->get();
    }


  
    public static function update($id){
        try{
            $valid=Auth::Check(apache_request_headers()['Authorization']);
            $parameters =self::$app->request->getJsonRawBody();
            $parameters->id=$id;
            $res=self::$item->update($parameters);
            self::$response->data($res);
        }catch(exception $e) {
           self::$response->error($e->getMessage());
        }
        return self::$response->get();
    }
    public static function insert(){
        try{
            $valid=Auth::Check(apache_request_headers()['Authorization']);
            $parameters =self::$app->request->getJsonRawBody();
            $data=self::$item->insert($parameters);
            self::$response->data($data);
        }catch(exception $e) {
            self::$response->error($e->getMessage());
        }
        return self::$response->get();
    }

    */
}
?>