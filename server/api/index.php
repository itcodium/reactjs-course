<?php
use Phalcon\Loader;
use Phalcon\Mvc\Micro;

require_once 'business/User.php';
require_once 'business/Product.php';
require_once 'business/Menu.php';

$app = new Micro();

UserBus::init($app);
ProductBus::init($app);
MenuBus::init($app);

$app->post('/login','UserBus::login');
 
$app->get('/user', 'UserBus::getAll');
$app->get('/user/{id:[0-9]+}','UserBus::getById');
$app->post('/user','UserBus::insert');
$app->put('/user/{id:[0-9]+}','UserBus::update');
$app->delete('/user/{id:[0-9]+}','UserBus::delete');
 
$app->get('/product', 'ProductBus::getAll');
$app->get('/product/{id:[0-9]+}','ProductBus::getById');

$app->get('/menu/full', 'MenuBus::getFullMenu');
$app->get('/menu/{id:[0-9]+}', 'MenuBus::getNodesDepthByUser');
$app->post('/menu/samelevel', 'MenuBus::addNodeSameLevel');
$app->post('/menu/child', 'MenuBus::addNodeChild');
$app->put('/menu/privileges','MenuBus::changeUserPrivilege');
$app->put('/menu/{id:[0-9]+}','MenuBus::update');

$app->delete('/menu/{id:[0-9]+}','MenuBus::delete');


$app->get('/test/500', function () use ($app) {
    $app->response->setStatusCode(500, "Internal Error");
    $app->response->setJsonContent(array('status' => 'ERROR', 'messages' => "internal error"));
    return $app->response;
});
$app->get('/test/400', function () use ($app) {
    $app->response->setStatusCode(400, "Page not found");
    $app->response->setJsonContent(array('status' => 'ERROR', 'messages' => "Page not found"));
    return $app->response;
});
 
$app->notFound(
    function () use ($app) {
      $app->response->setContentType('application/json', 'utf-8');
      $app->response->setStatusCode(404, "Not Found")->sendHeaders();
      $app->response->setJsonContent(array('status' => 'ERROR', 'messages' => "Url not found."));
      return $app->response;
    }
  );

$app->handle();
?>
