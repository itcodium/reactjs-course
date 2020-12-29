<?php
require_once dirname(__FILE__).'/../common/ResponseFormat.php';
require_once dirname(__FILE__).'/../data/Module.php';
require_once dirname(__FILE__).'/../data/PerfilModule.php';
require_once dirname(__FILE__).'/../jwt/Auth.php';
class ModuleBus
{
    private static $response;
    private static $item;
    private static $app;
    private static $perfilModule;
    private static $moduleName="MODULE";

    public static function init($app){
        self::$response= new  ResponseFormat();
        self::$app=$app;
        self::$item=new Module();
        self::$perfilModule=new PerfilModule();
    }

    function __construct(){
        self::init();
    }
    // Funcion a compartir por otras clases
    public static function userIsAllowed($id_usuario){
        return self::$perfilModule->getByModuloUsuario(self::$moduleName,$id_usuario);
    }
    public static function getAll(){
        try{
            $valid=Auth::Check(apache_request_headers()['Authorization']);
            $allowed=self::userIsAllowed($valid["data"]->id_usuario);
            if($allowed){
                self::$response->data(
                    self::$item->getAll()
                );
            }else{
                throw new Exception("Not allowed");
            }
		}catch(exception $e) {
            self::$response->error($e->getMessage());
		}
        return self::$response->get();
    }

	public static function getById($id){
        try{
            $valid=Auth::Check(apache_request_headers()['Authorization']);
            $data=self::$item->getById($id);
            self::$response->data($data);
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
}
?>