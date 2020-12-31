<?php
require_once dirname(__FILE__).'/../common/ResponseFormat.php';
require_once dirname(__FILE__).'/../data/User.php';
require_once dirname(__FILE__).'/../jwt/Auth.php';

class UserBus
{
    private static $response;
    private static $item;
    private static $app;

    public static function init($app){
        self::$response= new  ResponseFormat();
        self::$app=$app;
        self::$item=new User();
    }

    function __construct(){
        self::init();
    }
    public static function login(){
        try{
            $parameters =self::$app->request->getJsonRawBody();
            $data=self::$item->login($parameters);
            $token=Auth::SignIn($data);
            $user->user= $data;
            $user->token=$token;
            self::$response->data($user);
        }catch(exception $e) {
           self::$response->error($e->getMessage());
        }
        return self::$response->get();
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

	public static function getByName($name){
        try{
            $valid=Auth::Check(apache_request_headers()['Authorization']);
            $data=self::$item->GetByName($name);
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
            $parameters =self::$app->request->getJsonRawBody();
            $parameters->usuario=explode("@", $parameters->email)[0];
            $parameters->vigencia_desde=date("Y-m-d");
            $parameters->vigencia_hasta=date('Y-m-d', strtotime('+5 years'));
            $parameters->id_perfil=1;
            $data=self::$item->insert($parameters);
            self::$response->data($data);
        }catch(exception $e) {
            self::$response->error($e->getMessage());
        }
        return self::$response->get();
    }
}
?>