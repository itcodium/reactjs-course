<?php
ini_set('default_charset', 'utf-8');
use Phalcon\Http\Response;
class ResponseFormat{

  private $response;
  function __construct(){
		$this->response = $this->getResponse();
	}
	public function getResponse(){
		$response = new  Response();
		$response->setContentType('application/json', 'utf-8');
		$response->sendHeaders();
		return $response;
	}
	public function get(){
		return  $this->response ;
	}

	public  function error($message,$code){
		$this->response->setStatusCode('500', 'Internal Server Error');
		switch ($message) {
			case "Expired token":
				$this->response->setJsonContent(
					['status'=>'error','code'=>'10001', 'message'=>  $message ]
				);
				break;
			case "Not allowed":
				$this->response->setJsonContent(
					['status'=>'error','code'=>'10002', 'message'=>  $message ]
				);
				break;
			default:
				$this->response->setJsonContent(
					['status'=>'error','code'=> $code ,'message'=>  $message ]
				);	
		}
			
	}

	public function data($data){
		$this->response->setJsonContent(
			[  'status' => 'ok','data'  =>  $data ]
		);
	}
 }
?>