<?php
require_once dirname(__FILE__).'/../common/ResponseFormat.php';
require_once dirname(__FILE__).'/../data/Product.php';
require_once dirname(__FILE__).'/../data/Menu.php';
require_once dirname(__FILE__).'/../jwt/Auth.php';

class ProductBus
{
    private static $response;
    private static $item;
    private static $menu;
    private static $app;
    private static $path="/products";

    public static function init($app){
        self::$response= new  ResponseFormat();
        self::$app=$app;
        self::$item=new Product();
        self::$menu=new Menu();
    }

    function __construct(){
        self::init();
    }
    
    public static function getAll(){
        try{
            Auth::Check();
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
            Auth::Check();
            $user= apache_request_headers()['user_id'];
            self::$menu->getByUserURL($user,self::$path);
            $data=self::$item->getById($id);
            self::$response->data($data);
        }catch(exception $e) {
            self::$response->error($e->getMessage());
        }
        return self::$response->get();
    }
    
}
?>