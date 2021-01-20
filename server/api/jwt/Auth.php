<?php

include_once dirname(__FILE__).'/SignatureInvalidException.php';
include_once dirname(__FILE__).'/BeforeValidException.php';
include_once dirname(__FILE__).'/ExpiredException.php';
include_once dirname(__FILE__).'/JWT.php';
use \Firebase\JWT\JWT;
class Auth
{

    private static $aud = null;
    public static function test()
    {
        return "Auth";
    }
    public static function SignIn($data)
    {
        $iat = time();
        $exp=$exp=$iat +(60 * 5); // $iat +(60 * 10); 10 min
        $privateKey= file_get_contents(dirname(__FILE__).'/../keys/jwtRS256.key');
        $token = array(
            "iat" =>  $iat,
            "exp" =>  $exp,
            "iss" => "example.org",
            "aud" => self::Aud(),
            "data" => $data
        );

        $token=  JWT::encode($token, $privateKey, 'RS256');
        return $token;
    }

    public static function getHeaderToken(){
        $token="";
        if(apache_request_headers()['Authorization']){
            $token=apache_request_headers()['Authorization'];
        }
        if(apache_request_headers()['authorization']){
            $token=apache_request_headers()['authorization'];
        }
        return $token;
    }
    public static function Check($token=null)
    {
        $publicKey= file_get_contents(dirname(__FILE__).'/../keys/jwtRS256.key.pub');
       if( is_null($token)){
            $token=self::getHeaderToken();
        }
        if(empty($token) || is_null($token))
        {
           throw new Exception("Invalid token supplied.");
        }

        $decoded = JWT::decode(str_replace('Bearer ', '', $token), $publicKey, array('RS256'));

        // Funcionalidad incompleta
        if($decode->aud !== self::Aud() && 0)
        {
            throw new Exception("Invalid user logged in.");
        }
        return (array) $decoded;
    }

    public static function GetData($token)
    {
        return JWT::decode(
            $token,
            self::$secret_key,
            self::$encrypt
        )->data;
    }

    private static function Aud()
    {
        $aud = '';

        if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
            $aud = $_SERVER['HTTP_CLIENT_IP'];
        } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
            $aud = $_SERVER['HTTP_X_FORWARDED_FOR'];
        } else {
            $aud = $_SERVER['REMOTE_ADDR'];
        }

        $aud .= @$_SERVER['HTTP_USER_AGENT'];
        $aud .= gethostname();

        return sha1($aud);
    }
}