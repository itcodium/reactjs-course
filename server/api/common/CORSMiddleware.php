<?php

use Phalcon\Events\Event;
use Phalcon\Mvc\Micro;
use Phalcon\Mvc\Micro\MiddlewareInterface;

/**
 * CORSMiddleware
 * https://docs.phalcon.io/3.4/en/application-micro
 * CORS checking
 */
class CORSMiddleware implements MiddlewareInterface
{
    /**
     * Before anything happens
     *
     * @param Event $event
     * @param Micro $application
     *
     * @returns bool
     */
    public function beforeHandleRoute(Event $event, Micro $application)
    {
        if ($application->request->getHeader('ORIGIN')) {
            $origin = $application->request->getHeader('ORIGIN');
            
        } else {
            $origin = '*';
        }
        echo "TEST";
        die();
        
        $application
            ->response
            ->setHeader('Access-Control-Allow-Origin', "*")
            ->setHeader('Access-Control-Allow-Methods','GET,PUT,POST,DELETE,OPTIONS')
            ->setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Range, Content-Disposition, Content-Type, Authorization')
            ->setHeader('Access-Control-Allow-Credentials', 'true');
            //$this->response->header('Access-Control-Allow-Origin','http://localhost:4200');
            //$this->response->header('Access-Control-Allow-Headers','Content-Type, Authorization');
            
    }

    /**
     * Calls the middleware
     *
     * @param Micro $application
     *
     * @returns bool
     */
    public function call(Micro $application)
    {
        return true;
    }
}
