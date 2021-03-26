<?php
    define('DB_HOST', 'store_database');
    define('DB_NAME', 'u447625416_react');
    define('DB_USERNAME', 'u447625416_react');
    define('DB_PASSWORD', 'React123');
    mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
    class DbConnect{
        private $con;
        function __construct(){}
        function connect(){
            error_reporting(0);
            $this->con = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME);
            $this->con->set_charset("utf8");
            if (mysqli_connect_errno()) {
                throw new Exception(mysqli_connect_error());
            }
            return $this->con;
        }
    }

?>