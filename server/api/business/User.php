<?php
require_once dirname(__FILE__).'/../common/ResponseFormat.php';
require_once dirname(__FILE__).'/../data/User.php';
require_once dirname(__FILE__).'/../data/Menu.php';
require_once dirname(__FILE__).'/../jwt/Auth.php';

class UserBus
{
    private static $response;
    private static $item;
    private static $menu;
    private static $app;
    private static $path="/user";

    public static function init($app){
        self::$response= new  ResponseFormat();
        self::$app=$app;
        self::$item=new User();
        self::$menu=new Menu();
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
            self::$response->error($e->getMessage(), $e->getCode());
        }
        return self::$response->get();
    }

    public static function getAll(){
        try{
            Auth::Check(apache_request_headers()['Authorization']);
            $user= apache_request_headers()['user_id'];
            self::$menu->getByUserURL($user,self::$path);
            $data=self::$item->getAll();
            self::$response->data($data);
		}catch(exception $e) {
            self::$response->error($e->getMessage());
		}
        return self::$response->get();
    }

	public static function getById($id){
        try{
            Auth::Check(apache_request_headers()['Authorization']);
            $user= apache_request_headers()['user_id'];
            self::$menu->getByUserURL($user,self::$path);
            $data=self::$item->getById($id);
            self::$response->data($data);
        }catch(exception $e) {
            self::$response->error($e->getMessage());
        }
        return self::$response->get();
    }

	public static function getByName($name){
        try{
            Auth::Check(apache_request_headers()['Authorization']);
            $user= apache_request_headers()['user_id'];
            self::$menu->getByUserURL($user,self::$path);
            $data=self::$item->GetByName($name);
            self::$response->data($data);
        }catch(exception $e) {
            self::$response->error($e->getMessage());
        }
        return self::$response->get();
    }

    public static function delete($id){
        try{
            Auth::Check(apache_request_headers()['Authorization']);
            $user= apache_request_headers()['user_id'];
            self::$menu->getByUserURL($user,self::$path);
            $data=self::$item->delete($id);
            self::$response->data($data);
        }catch(exception $e) {
            self::$response->error($e->getMessage());
        }
        return self::$response->get();
    }

     public static function update($id){
        try{
            Auth::Check(apache_request_headers()['Authorization']);
            $user= apache_request_headers()['user_id'];
            self::$menu->getByUserURL($user,self::$path);
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
            sleep(3);
            $parameters =self::$app->request->getJsonRawBody();
            $parameters->usuario=explode("@", $parameters->email)[0];
            $parameters->vigencia_desde=date("Y-m-d");
            $parameters->vigencia_hasta=date('Y-m-d', strtotime('+5 years'));
            $parameters->id_perfil=35;
            $parameters->creado_por="store";
            $data=self::$item->insert($parameters);
            self::$response->data($data);
        }catch(exception $e) {
            self::$response->error($e->getMessage());
        }
        return self::$response->get();
    }
}
?>