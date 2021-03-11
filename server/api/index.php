<?php
use Phalcon\Loader;
use Phalcon\Mvc\Micro;

//require_once 'business/Client.php';
require_once 'business/User.php';
//require_once 'business/Perfil.php';
//require_once 'business/Module.php';
//require_once 'business/PerfilModule.php';
require_once 'business/Product.php';
require_once 'business/Menu.php';

$app = new Micro();

UserBus::init($app);
//ClientBus::init($app);
//PerfilBus::init($app);
//ModuleBus::init($app);
//PerfilModuleBus::init($app);
ProductBus::init($app);
MenuBus::init($app);
/*
$app->get('/client', 'ClientBus::getAll');
$app->get('/client/{name}','ClientBus::getByName');
$app->get('/client/{id:[0-9]+}','ClientBus::getById');
$app->post('/client','ClientBus::insert');
$app->put('/client/{id:[0-9]+}','ClientBus::update');
$app->delete('/client/{id:[0-9]+}','ClientBus::delete');
$app->delete('/client/code/{code}','ClientBus::deleteByCode');
 */
$app->post('/login','UserBus::login');
 
$app->get('/user', 'UserBus::getAll');
$app->get('/user/{id:[0-9]+}','UserBus::getById');
$app->post('/user','UserBus::insert');
$app->put('/user/{id:[0-9]+}','UserBus::update');
$app->delete('/user/{id:[0-9]+}','UserBus::delete');
/*
$app->get('/perfil', 'PerfilBus::getAll');
$app->get('/perfil/{id:[0-9]+}','PerfilBus::getById');
$app->post('/perfil','PerfilBus::insert');
$app->put('/perfil/{id:[0-9]+}','PerfilBus::update');
$app->delete('/perfil/{id:[0-9]+}','PerfilBus::delete');

$app->get('/module', 'ModuleBus::getAll');
$app->get('/module/{id:[0-9]+}','ModuleBus::getById');
$app->post('/module','ModuleBus::insert');
$app->put('/module/{id:[0-9]+}','ModuleBus::update');
$app->delete('/module/{id:[0-9]+}','ModuleBus::delete');

$app->get('/perfilmodule', 'PerfilModuleBus::getAll');
$app->get('/perfilmodule/{id:[0-9]+}','PerfilModuleBus::getById');
$app->get('/perfilmodule/perfil/{id:[0-9]+}','PerfilModuleBus::getByIdPerfil');
$app->get('/perfilmodule/module','PerfilModuleBus::getByModuloUsuario');
$app->post('/perfilmodule','PerfilModuleBus::insert');
$app->put('/perfilmodule/{id:[0-9]+}','PerfilModuleBus::update');
$app->delete('/perfilmodule/{id:[0-9]+}','PerfilModuleBus::delete');
 */
$app->get('/product', 'ProductBus::getAll');
$app->get('/product/{id:[0-9]+}','ProductBus::getById');
$app->get('/menu', 'MenuBus::getNodesDepthByUser');

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
