<?php
require_once dirname(__FILE__).'/../common/ResponseFormat.php';
require_once dirname(__FILE__).'/../data/Client.php';
require_once dirname(__FILE__).'/../jwt/Auth.php';
class ClientBus
{
    private static $response;
    private static $item;
    private static $app;

    public static function init($app){
        self::$response= new  ResponseFormat();
        self::$app=$app;
        self::$item=new Client();
    }

    function __construct(){
        self::init();
    }

	public static function getAll(){
        try{
            //$valid=Auth::Check(apache_request_headers()['Authorization']);
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

	public static function getByName($name){
        try{
            $valid=Auth::Check(apache_request_headers()['Authorization']);
            $data=self::$item->clientGetByName($name);
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

    public static function insert(){
         try{
             $valid=Auth::Check(apache_request_headers()['Authorization']);
             $data =self::$app->request->getJsonRawBody();
             $res=self::$item->insert($data);
             self::$response->data($res);
         }catch(exception $e) {
            self::$response->error($e->getMessage());
         }
         return self::$response->get();
     }

     public static function update($id){
        try{
            $valid=Auth::Check(apache_request_headers()['Authorization']);
            $data =self::$app->request->getJsonRawBody();
            $data->id=$id;
            $res=self::$item->update($data);
            self::$response->data($res);
        }catch(exception $e) {
           self::$response->error($e->getMessage());
        }
        return self::$response->get();
    }

     public static function deleteByCode($code){
        try{
            $valid=Auth::Check(apache_request_headers()['Authorization']);
            $res=self::$item->deleteByCode($code);
            self::$response->data($res);
        }catch(exception $e) {
            self::$response->error($e->errorMessage());
        }
        return self::$response->get();
    }
}

?>