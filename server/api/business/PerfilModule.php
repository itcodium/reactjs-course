<?php
require_once dirname(__FILE__).'/../common/ResponseFormat.php';
require_once dirname(__FILE__).'/../data/PerfilModule.php';
require_once dirname(__FILE__).'/../jwt/Auth.php';
class PerfilModuleBus
{
    private static $response;
    private static $item;
    private static $app;

    public static function init($app){
        self::$response= new  ResponseFormat();
        self::$app=$app;
        self::$item=new PerfilModule();
    }

    function __construct(){
        self::init();
    }

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

    public static function getByIdPerfil($id){
        try{
            $valid=Auth::Check(apache_request_headers()['Authorization']);
            $data=self::$item->getByIdPerfil($id);
            self::$response->data($data);
        }catch(exception $e) {
            self::$response->error($e->getMessage());
        }
        return self::$response->get();
    }

    public static function getByModuloUsuario(){
        try{
            $params = self::$app->request->getQuery();
            $valid=Auth::Check(apache_request_headers()['Authorization']);
            $data=self::$item->getByModuloUsuario($params["modulo"], $params["id_usuario"]);
            self::$response->data($data);
        }catch(exception $e) {
            self::$response->error($e->getMessage());
        }
        return self::$response->get();
    }
    public static function userIsAllowed($modulo, $id_usuario){
        try{
            $data=self::$item->getByModuloUsuario($modulo, $id_usuario);
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