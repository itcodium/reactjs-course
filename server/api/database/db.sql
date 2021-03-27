-- MySQL dump 10.13  Distrib 8.0.23, for Linux (x86_64)
--
-- Host: 172.23.0.1    Database: u447625416_react
-- ------------------------------------------------------
-- Server version	5.7.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `hr_app_session_keys`
--

DROP TABLE IF EXISTS `hr_app_session_keys`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hr_app_session_keys` (
  `uuid` varchar(64) DEFAULT NULL,
  `id_usuario` int(11) NOT NULL,
  `expiration` datetime NOT NULL,
  `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  KEY `ck_session_keys__users` (`id_usuario`),
  CONSTRAINT `ck_session_keys__users` FOREIGN KEY (`id_usuario`) REFERENCES `hr_app_usuario` (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hr_app_session_keys`
--
 
--
-- Table structure for table `hr_app_usuario`
--

DROP TABLE IF EXISTS `hr_app_usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hr_app_usuario` (
  `id_usuario` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(50) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `email` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL,
  `id_perfil` int(11) DEFAULT NULL,
  `vigencia_desde` date NOT NULL,
  `vigencia_hasta` date DEFAULT NULL,
  `creado_por` varchar(100) DEFAULT NULL,
  `fecha_creacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `modificado_por` varchar(20) DEFAULT NULL,
  `fecha_modificacion` timestamp NULL DEFAULT NULL,
  `lang` varchar(2) DEFAULT 'ES',
  PRIMARY KEY (`id_usuario`),
  UNIQUE KEY `idx_hr_app_usuario_email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=86 DEFAULT CHARSET=utf8 COMMENT='Tabla de usuarios';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hr_app_usuario`
--

LOCK TABLES `hr_app_usuario` WRITE;
/*!40000 ALTER TABLE `hr_app_usuario` DISABLE KEYS */;
INSERT INTO `hr_app_usuario` VALUES (2,'p.haddad.p@gmail.com','p.haddad.p@gmail.com','Sistema','p.haddad.p@gmail.com','4297f44b13955235245b2497399d7a93',1,'2016-01-01','2030-12-31','dbo','2016-04-27 22:43:09',NULL,NULL,'ES'),(4,'usuario','usuario','usuario','usuario@test.com.ar','4297f44b13955235245b2497399d7a93',22,'2016-01-01','2004-01-01','test','2016-09-28 04:15:34',NULL,NULL,'ES'),(18,'client','Cliente','Cliente','Client@test.com','4297f44b13955235245b2497399d7a93',33,'2020-01-01','2030-12-31','test.module','2020-07-05 19:48:31',NULL,NULL,'ES'),(25,'admin','admin','admin','admin@test.com','4297f44b13955235245b2497399d7a93',35,'2021-02-22','2026-02-22','store','2021-02-22 21:38:15',NULL,NULL,'ES'),(85,'test','test444','test44','test@gmail.com','4297f44b13955235245b2497399d7a93',35,'2021-01-01','2022-02-02','store','2021-03-11 16:55:44','2','2021-03-22 21:40:09','ES');
/*!40000 ALTER TABLE `hr_app_usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hr_error`
--

DROP TABLE IF EXISTS `hr_error`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hr_error` (
  `id_error` int(11) NOT NULL AUTO_INCREMENT,
  `lang` varchar(2) DEFAULT NULL,
  `value` varchar(5) DEFAULT NULL,
  `message` varchar(1024) DEFAULT NULL,
  `fecha_creacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_error`),
  UNIQUE KEY `value` (`lang`,`value`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hr_error`
--

LOCK TABLES `hr_error` WRITE;
/*!40000 ALTER TABLE `hr_error` DISABLE KEYS */;
INSERT INTO `hr_error` VALUES (1,'ES','10000','El usuario o contraseña no validos','2016-06-25 23:47:09'),(2,'ES','10001','No se encontro el parametro @param0','2016-06-25 23:47:09'),(4,'ES','10003','El token ha expirado.','2016-07-02 23:50:23'),(5,'ES','10002','No se ha enviado token de validacion.','2016-07-02 23:53:42'),(6,'ES','10004','El token no es valido.','2016-07-03 06:41:02'),(7,'ES','10005','No esta autorizado a acceder al modulo.','2016-07-30 23:08:19'),(8,'ES','10006','La operacion de realizo correctamente.','2016-08-13 06:54:12'),(9,'ES','10007','Se borraron @param0 registros.','2016-08-16 00:07:14'),(10,'ES','10008','Se modificaron @param0 registros.','2016-08-16 00:15:27'),(11,'ES','10009','Se insertaron @param0 registros.','2016-08-16 00:15:32'),(12,'ES','10010','No se puede borrar el registro dado que tiene datos relacionados.','2016-09-28 03:59:07'),(13,'ES','10011','Ya se ha inicializado el menu, el parametro nodo no puede ser 0 o NULL.','2016-10-09 19:50:59'),(14,'ES','10012','Usuario fuera de vigencia.','2021-10-09 19:50:59');
/*!40000 ALTER TABLE `hr_error` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hr_menu`
--

DROP TABLE IF EXISTS `hr_menu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hr_menu` (
  `id_menu` int(11) NOT NULL AUTO_INCREMENT,
  `menu_order` int(11) DEFAULT NULL,
  `id_perfil` int(11) DEFAULT NULL,
  `lft` int(11) NOT NULL,
  `rgt` int(11) NOT NULL,
  PRIMARY KEY (`id_menu`)
) ENGINE=InnoDB AUTO_INCREMENT=69 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hr_menu`
--

LOCK TABLES `hr_menu` WRITE;
/*!40000 ALTER TABLE `hr_menu` DISABLE KEYS */;
INSERT INTO `hr_menu` VALUES (1,NULL,NULL,1,4),(2,NULL,NULL,2,3),(3,NULL,NULL,115,118),(4,NULL,NULL,116,117),(5,NULL,NULL,113,114),(6,NULL,NULL,5,12),(10,NULL,NULL,10,11),(11,NULL,NULL,8,9),(12,NULL,NULL,111,112),(13,NULL,NULL,89,90),(14,NULL,NULL,91,92),(15,NULL,NULL,93,94),(16,NULL,NULL,95,96),(17,NULL,NULL,97,98),(18,NULL,NULL,99,100),(19,NULL,NULL,101,102),(20,NULL,NULL,103,104),(21,NULL,NULL,105,106),(22,NULL,NULL,107,108),(23,NULL,NULL,109,110),(24,NULL,NULL,87,88),(25,NULL,NULL,85,86),(26,NULL,NULL,73,84),(27,NULL,NULL,80,83),(28,NULL,NULL,81,82),(29,NULL,NULL,76,79),(30,NULL,NULL,77,78),(31,NULL,NULL,74,75),(32,NULL,NULL,57,72),(33,NULL,NULL,66,71),(34,NULL,NULL,58,65),(35,NULL,NULL,63,64),(36,NULL,NULL,69,70),(37,NULL,NULL,61,62),(38,NULL,NULL,67,68),(39,NULL,NULL,59,60),(40,NULL,NULL,43,56),(41,NULL,NULL,50,55),(42,NULL,NULL,44,49),(43,NULL,NULL,45,48),(44,NULL,NULL,53,54),(45,NULL,NULL,51,52),(46,NULL,NULL,46,47),(47,NULL,NULL,39,42),(48,NULL,NULL,40,41),(49,NULL,NULL,15,38),(50,NULL,NULL,32,37),(51,NULL,NULL,22,31),(52,NULL,NULL,16,21),(53,NULL,NULL,35,36),(54,NULL,NULL,25,30),(55,NULL,NULL,19,20),(56,NULL,NULL,17,18),(57,NULL,NULL,23,24),(58,NULL,NULL,33,34),(59,NULL,NULL,28,29),(60,NULL,NULL,26,27),(64,NULL,NULL,13,14),(68,NULL,NULL,6,7);
/*!40000 ALTER TABLE `hr_menu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hr_menu_text`
--

DROP TABLE IF EXISTS `hr_menu_text`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hr_menu_text` (
  `id_menu_text` int(11) NOT NULL AUTO_INCREMENT,
  `id_menu` int(11) DEFAULT NULL,
  `menu_text` varchar(50) NOT NULL,
  `lang` varchar(2) NOT NULL,
  `codigo` varchar(45) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `icon` varchar(64) DEFAULT NULL,
  `action` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`id_menu_text`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hr_menu_text`
--

LOCK TABLES `hr_menu_text` WRITE;
/*!40000 ALTER TABLE `hr_menu_text` DISABLE KEYS */;
INSERT INTO `hr_menu_text` VALUES (1,1,'Tienda','ES',NULL,'','',''),(2,2,'Productos','ES',NULL,'/products','',''),(3,3,'User','ES',NULL,'','login',''),(4,4,'Logout','ES',NULL,'','','logout'),(5,5,'Contacto','ES',NULL,'/contact','',''),(6,6,'Admin','ES',NULL,'','',''),(10,10,'User','ES',NULL,'/user','',''),(11,11,'Menu','ES',NULL,'/menu','',''),(15,68,'User Privileges','ES',NULL,'/userPrivileges','','');
/*!40000 ALTER TABLE `hr_menu_text` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hr_menu_usuario`
--

DROP TABLE IF EXISTS `hr_menu_usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hr_menu_usuario` (
  `id_menu_usuario` int(11) NOT NULL AUTO_INCREMENT,
  `id_menu` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `enabled` tinyint(1) NOT NULL,
  PRIMARY KEY (`id_menu_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hr_menu_usuario`
--

LOCK TABLES `hr_menu_usuario` WRITE;
/*!40000 ALTER TABLE `hr_menu_usuario` DISABLE KEYS */;
INSERT INTO `hr_menu_usuario` VALUES (1,1,2,1),(2,2,2,0),(3,5,2,0),(4,4,2,1),(5,3,2,1),(6,17,25,1),(7,16,25,1),(8,3,25,1),(9,4,25,1),(10,6,25,1),(11,6,2,1),(12,7,2,0),(13,8,2,0),(14,1,85,1),(15,2,85,1),(16,3,85,1),(17,4,85,1),(18,5,85,1),(19,9,2,0),(20,10,2,1),(21,11,2,1),(24,68,2,1),(25,6,85,0),(26,68,85,0),(27,11,85,0),(28,10,85,0),(29,9,85,0),(30,7,85,0),(31,8,85,0);
/*!40000 ALTER TABLE `hr_menu_usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hr_param`
--

DROP TABLE IF EXISTS `hr_param`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hr_param` (
  `id_param` int(11) NOT NULL AUTO_INCREMENT,
  `param_name` varchar(50) DEFAULT NULL,
  `value` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id_param`),
  UNIQUE KEY `value` (`param_name`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hr_param`
--

LOCK TABLES `hr_param` WRITE;
/*!40000 ALTER TABLE `hr_param` DISABLE KEYS */;
INSERT INTO `hr_param` VALUES (1,'DEFAULT_LANGUAGE','ES');
/*!40000 ALTER TABLE `hr_param` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders_items`
--

DROP TABLE IF EXISTS `orders_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders_items` (
  `id_order_item` int(11) NOT NULL AUTO_INCREMENT,
  `id_order` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  PRIMARY KEY (`id_order_item`),
  UNIQUE KEY `order_product_UNIQUE` (`id_order`,`id_product`),
  KEY `FK_id_product` (`id_product`),
  CONSTRAINT `FK_id_order` FOREIGN KEY (`id_order`) REFERENCES `st_order` (`id_order`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_id_product` FOREIGN KEY (`id_product`) REFERENCES `st_product` (`id_product`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders_items`
--

LOCK TABLES `orders_items` WRITE;
/*!40000 ALTER TABLE `orders_items` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `st_order`
--

DROP TABLE IF EXISTS `st_order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `st_order` (
  `id_order` int(11) NOT NULL AUTO_INCREMENT,
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_by` varchar(20) NOT NULL,
  `updated` timestamp NULL DEFAULT NULL,
  `updated_by` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id_order`),
  UNIQUE KEY `name_email_UNIQUE` (`name`,`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `st_order`
--

LOCK TABLES `st_order` WRITE;
/*!40000 ALTER TABLE `st_order` DISABLE KEYS */;
/*!40000 ALTER TABLE `st_order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `st_product`
--

DROP TABLE IF EXISTS `st_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `st_product` (
  `id_product` int(11) NOT NULL AUTO_INCREMENT,
  `sku` varchar(128) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `description` text,
  `price` decimal(10,2) NOT NULL DEFAULT '0.00',
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_by` varchar(20) NOT NULL,
  `updated` timestamp NULL DEFAULT NULL,
  `updated_by` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id_product`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `st_product`
--

LOCK TABLES `st_product` WRITE;
/*!40000 ALTER TABLE `st_product` DISABLE KEYS */;
INSERT INTO `st_product` VALUES (1,'NESE219','Notebook Exo Smart E19 Intel Celeron Ram4gb Ssd64gb Win10 14','¿Llevas tu notebook a todos lados? Con la nueva EXO, tené todas tus fotos y archivos directos en la nube. vas a estar conectado y llevarla en tu mochila a cualquier lado por su exclusivo diseño!',40.00,'2020-01-01 00:00:00','mock',NULL,NULL),(2,'NL145','Notebook Lenovo S145 Intel Celeron N4000 15.6 4gb 1tb Oferta','Diseñada para ofrecer un rendimiento duradero, la IdeaPad S145 ofrece un procesamiento potente y fluido con un diseño elegante y ligero. Perfecta para realizar tus tareas diarias, esta portátil duradera de 15,6” ofrece un magnífico sonido y opciones de almacenamiento seguras y rápidas.',48.57,'2020-01-01 00:00:00','mock',NULL,NULL),(3,'NIC464','Notebook Intel Celeron 4gb Ram 64gb Ssd Windows 10 Home Wifi','Especificaciones técnicas            - Marca: eNova - Procesador: Intel Celeron N3350 - Pantalla: 14 1366x768 HD - RAM: 4GB - SSD: 64GB - Camara frontal: 0.3 Mpx - Touchpad: Multitactil de 5 puntos - Conectividad: Wifi y Bluetooth - Windows 10',35.00,'2020-01-01 00:00:00','mock',NULL,NULL),(4,'NKEC432','Notebook Kiano Elegance Celeron 4gb Ssd32 + Ssd512 W10 Pro','Realizamos Factura A o B. La solicitud de factura A o EXENTO se estipula antes de realizar la compra cambiando los datos que Mercado libre habilita en la sección DATOS PARA SU FACTURA por el CUIT para que queden registrados en la ficha de compra.',53.00,'2020-01-01 00:00:00','mock',NULL,NULL);
/*!40000 ALTER TABLE `st_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `st_product_images`
--

DROP TABLE IF EXISTS `st_product_images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `st_product_images` (
  `id_image` int(11) NOT NULL AUTO_INCREMENT,
  `id_product` int(11) NOT NULL,
  `title` varchar(256) NOT NULL,
  `description` varchar(512) NOT NULL,
  `url` varchar(512) NOT NULL,
  PRIMARY KEY (`id_image`),
  KEY `FK_id_image_id_product_` (`id_product`),
  CONSTRAINT `FK_id_image_id_product_` FOREIGN KEY (`id_product`) REFERENCES `st_product` (`id_product`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `st_product_images`
--

LOCK TABLES `st_product_images` WRITE;
/*!40000 ALTER TABLE `st_product_images` DISABLE KEYS */;
INSERT INTO `st_product_images` VALUES (3,1,'.','.','/images/th/1.jpg'),(4,2,'.','.','/images/th/2.jpg'),(5,3,'.','.','/images/th/3.jpg'),(6,4,'.','.','/images/th/4.jpg');
/*!40000 ALTER TABLE `st_product_images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'u447625416_react'
--

--
-- Dumping routines for database 'u447625416_react'
--
/*!50003 DROP FUNCTION IF EXISTS `getErrorMessage` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`u447625416_react`@`127.0.0.1` FUNCTION `getErrorMessage`(pLang varchar(2),pValue varchar(5)) RETURNS varchar(1024) CHARSET utf8
BEGIN
	DECLARE  vMessage varchar(1024);
    DECLARE vLanguage varchar(500);
    
    IF pLang='' OR pLang is NULL THEN
    	SET vLanguage =(select getParamValue('DEFAULT_LANGUAGE'));
    ELSE 
		SET vLanguage=pLang;
    END IF;
  
	SET vMessage =(	SELECT  message	
					FROM hr_error
					WHERE lang=vLanguage AND value=pValue);
                    
	IF  IFNULL(vMessage ,'') =''THEN 
		SET vLanguage =(select getParamValue('DEFAULT_LANGUAGE'));
    	SET vMessage =( SELECT  message
						FROM hr_error
						WHERE lang=vLanguage AND value='A0001');
		RETURN replace(vMessage,'@param0',pValue);
    END IF;
    return vMessage ;
   
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `getMenuId` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`u447625416_react`@`127.0.0.1` FUNCTION `getMenuId`(pName varchar(128)) RETURNS int(11)
BEGIN
		DECLARE  vId INT;
        SELECT a.id_menu
			INTO vId 
		FROM hr_menu  a
			inner join hr_menu_text b
				on a.id_menu=b.id_menu
        WHERE b.menu_text=pName;        
		RETURN vId;
	END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `getParamValue` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`u447625416_react`@`127.0.0.1` FUNCTION `getParamValue`(pParamName varchar(50)) RETURNS varchar(500) CHARSET utf8
BEGIN

	DECLARE  vParamValue varchar(1024);
    
	SELECT  value
	INTO vParamValue 
	FROM hr_param
	WHERE param_name=pParamName;

	RETURN vParamValue;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `raiseError` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`u447625416_react`@`127.0.0.1` FUNCTION `raiseError`(pLang varchar(2),pValue varchar(5)) RETURNS varchar(1024) CHARSET utf8
BEGIN

	DECLARE  vMessage varchar(1024);
    
	SELECT  message
	INTO vMessage 
	FROM hr_error
	WHERE lang=pLang AND value=pValue;
    
    /*
	SIGNAL SQLSTATE VALUE pValue 
	SET MESSAGE_TEXT =vMessage;
    */

	RETURN '';
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getErrorMessage` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`u447625416_react`@`127.0.0.1` PROCEDURE `getErrorMessage`(pLang varchar(2),pValue varchar(5))
BEGIN
    SELECT getErrorMessage(pLang,pValue) ErrorMessage;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getSessionKeyByUser` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`u447625416_react`@`127.0.0.1` PROCEDURE `getSessionKeyByUser`(pEmail varchar(200),pPassword varchar(50),pLang varchar(2))
BEGIN
	
    
    
	DECLARE  vUUID varchar(64);
	DECLARE  vExpiration datetime;
	DECLARE  vId_usuario int;
    DECLARE  vExpiredUser int;
    DECLARE vErrorMessage varchar(1024);
    DECLARE vLanguage varchar(500);
    IF pLang='' OR pLang IS NULL  THEN
		SET vLanguage =(select getParamValue('DEFAULT_LANGUAGE'));
    ELSE    
		SET vLanguage =pLang;
	END IF;	
    
    -- https://dev.mysql.com/doc/refman/5.5/en/error-messages-server.html
    /*
     Error: 1437 SQLSTATE: 42000 (ER_TOO_LONG_BODY)
	 Message: Routine body for '%s' is too long
    */
    SELECT id_usuario
		INTO vId_usuario  
    FROM hr_app_usuario
	WHERE email=pEmail and password=pPassword;
    
    IF vId_usuario  IS NOT NULL THEN 
    
    	/*SELECT a.uuid
			INTO vUUID
		FROM hr_app_session_keys a 
		WHERE a.id_usuario=vId_usuario and a.expiration>NOW();
        
        IF vUUID  IS NULL THEN 
			SET vExpiration= DATE_ADD(NOW(),INTERVAL 30 MINUTE);
			INSERT hr_app_session_keys( uuid,expiration,id_usuario)
						values( uuid(),vExpiration,vId_usuario);
        END IF;
        */
		START TRANSACTION;
			UPDATE hr_app_usuario
			SET 
				lang=vLanguage
			WHERE id_usuario=vId_usuario;
		COMMIT;
		
        SELECT 1
			INTO vExpiredUser
		FROM hr_app_usuario a
		WHERE a.id_usuario=vId_usuario 
				and CAST( NOW() as date) between a.vigencia_desde and a.vigencia_hasta;
                
        IF vExpiredUser  IS NULL THEN 
			SET vErrorMessage =(SELECT getErrorMessage(vLanguage ,'10012'));
			SIGNAL SQLSTATE VALUE '10012' SET MESSAGE_TEXT =vErrorMessage;
		END IF;
        
		SELECT a.id_usuario,
				a.id_usuario,a.usuario,a.nombre,a.apellido,a.email,a.lang,a.id_perfil
		FROM hr_app_usuario a
		WHERE a.id_usuario=vId_usuario 
				and a.vigencia_hasta > CAST( NOW() as date);
    ELSE	
		SET vErrorMessage =(SELECT getErrorMessage(vLanguage ,'10000'));
		SIGNAL SQLSTATE VALUE '10000' SET MESSAGE_TEXT =vErrorMessage;
    END IF;
    
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getSessionKeys` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`u447625416_react`@`127.0.0.1` PROCEDURE `getSessionKeys`()
BEGIN
   	Select 
	  uuid,
	  id_usuario,
      expiration
	FROM hr_app_session_keys
	WHERE expiration > now();
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getSessionkeysByUUID` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`u447625416_react`@`127.0.0.1` PROCEDURE `getSessionkeysByUUID`(pUuid varchar(64))
BEGIN
    select uuid,id_usuario,expiration,created
    from hr_app_session_keys
    where uuid=pUuid;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `menu_addNodeChild` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`u447625416_react`@`127.0.0.1` PROCEDURE `menu_addNodeChild`(pId_menu int,
pLang varchar(2),
pName varchar(128),
pUrl varchar(255),
pIcon varchar(65),
pAction varchar(65)
)
BEGIN
		DECLARE myLeft INT;
		SET myLeft =(SELECT lft  FROM hr_menu		WHERE id_menu = pId_menu);

		UPDATE hr_menu SET rgt = rgt + 2 WHERE rgt > myLeft;
		UPDATE hr_menu SET lft = lft + 2 WHERE lft > myLeft;

		INSERT INTO hr_menu(lft, rgt) 
			VALUES(myLeft + 1, myLeft + 2);
            
        INSERT INTO hr_menu_text(id_menu,menu_text,lang,url,icon, action  )
        VALUES(LAST_INSERT_ID(),pName, UPPER(pLang), pUrl,pIcon,pAction );    
        SELECT  ROW_COUNT() row_count;	

	END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `menu_addNodeSameLevel` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`u447625416_react`@`127.0.0.1` PROCEDURE `menu_addNodeSameLevel`(pId_menu int,
pLang varchar(2),
pName varchar(128),
pUrl varchar(255),
pIcon varchar(64),
pAction varchar(64)
)
BEGIN
 
	 DECLARE vErrorMessage varchar(1024);
        DECLARE myRight INT;
        DECLARE id INT;
        DECLARE idNode INT;
        
        IF pId_menu =0 OR pId_menu IS NULL  THEN
			IF (SELECT COUNT(*) FROM hr_menu)=0 THEN
				INSERT INTO hr_menu(lft,rgt)
					VALUES(1,2);
				INSERT INTO hr_menu_text(id_menu,menu_text,lang,url,icon, action )
					VALUES(LAST_INSERT_ID(),pName,UPPER(pLang),pUrl ,pIcon,pAction );
                    
			ELSE	
				
				SELECT node.id_menu 
					INTO pId_menu 
				FROM hr_menu AS node,
					 hr_menu AS parent,
					 hr_menu_text AS c
				WHERE node.lft BETWEEN parent.lft AND parent.rgt
						AND node.id_menu=c.id_menu 
						AND c.lang=pLang
				GROUP BY node.lft,node.id_menu,c.url,c.icon,c.action,c.menu_text
				HAVING(COUNT(parent.id_menu) - 1)=0
				ORDER BY node.id_menu DESC
                LIMIT 1;
				
			END IF;
			
		END IF;                
		
      
        IF pId_menu >0  AND pId_menu IS NOT NULL THEN
			-- SELECT @myRight := rgt FROM hr_menu WHERE id_menu =pId_menu;
            SELECT rgt 
				INTO myRight 
            FROM hr_menu WHERE id_menu =pId_menu;

			UPDATE hr_menu SET rgt = rgt + 2 WHERE rgt > myRight;
			UPDATE hr_menu SET lft = lft + 2 WHERE lft > myRight;
			
			INSERT INTO hr_menu(lft, rgt) 
				VALUES( myRight + 1, myRight + 2);
			
            SET id=LAST_INSERT_ID();
        
			INSERT INTO hr_menu_text(id_menu,menu_text,lang ,url ,icon,action )
			VALUES(id,pName,UPPER(pLang),pUrl ,pIcon,pAction );
            
            SELECT  id as id_menu, ROW_COUNT() row_count;	
		END IF;
    
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `menu_changeUserPrivilege` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`u447625416_react`@`127.0.0.1` PROCEDURE `menu_changeUserPrivilege`(pId_menu int,
pId_usuario int,
pValue int
)
BEGIN
        IF (SELECT COUNT(*) FROM hr_menu_usuario WHERE id_menu=pId_menu AND id_usuario=pId_usuario)=0 THEN
				INSERT INTO `hr_menu_usuario` (`id_menu`,`id_usuario`, `enabled`) 
                VALUES (pId_menu, pId_usuario, pValue);
                SELECT  ROW_COUNT() row_count;	
		ELSE
			UPDATE `hr_menu_usuario` 
				SET `enabled` = pValue
			WHERE id_menu=pId_menu AND id_usuario=pId_usuario;
            SELECT  ROW_COUNT() row_count;	
		END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `menu_deleteNode` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`u447625416_react`@`127.0.0.1` PROCEDURE `menu_deleteNode`(pId_menu int)
BEGIN
		DECLARE vCount INT;
        DECLARE myLeft INT;
        DECLARE myRight INT;
        DECLARE myWidth INT;
        SET vCount=0;

		SELECT myLeft = lft, myRight = rgt, myWidth = rgt - lft + 1
		FROM hr_menu
		WHERE id_menu= pId_menu;

		DELETE FROM hr_menu WHERE lft BETWEEN myLeft AND myRight;
        DELETE FROM hr_menu_text WHERE id_menu= pId_menu;
        SET  vCount=(SELECT  ROW_COUNT());	

		UPDATE hr_menu SET rgt = rgt - myWidth WHERE rgt > myRight;
		UPDATE hr_menu SET lft = lft - myWidth WHERE lft > myRight;
        
        SELECT  vCount row_count;	

 	END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `menu_deleteNodeMoveChild` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`u447625416_react`@`127.0.0.1` PROCEDURE `menu_deleteNodeMoveChild`(pId_menu int)
BEGIN

		SELECT @myLeft := lft, @myRight := rgt, @myWidth := rgt - lft + 1
		FROM hr_menu
		WHERE id_menu = pId_menu;

		DELETE FROM hr_menu WHERE lft = @myLeft;
        DELETE FROM hr_menu_text WHERE id_menu= pId_menu;
        SELECT  ROW_COUNT() row_count;	

		UPDATE hr_menu SET rgt = rgt - 1, lft = lft - 1 WHERE lft BETWEEN @myLeft AND @myRight;
		UPDATE hr_menu SET rgt = rgt - 2 WHERE rgt > @myRight;
		UPDATE hr_menu SET lft = lft - 2 WHERE lft > @myRight;

	END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `menu_getAll` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`u447625416_react`@`127.0.0.1` PROCEDURE `menu_getAll`(pLang varchar(2))
BEGIN
		SELECT a.id_menu,b.menu_text
		FROM hr_menu  a
			inner join hr_menu_text b
				on a.id_menu=b.id_menu
		where b.lang=pLang
		ORDER BY lft;
	END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `menu_getAllLeafNodes` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`u447625416_react`@`127.0.0.1` PROCEDURE `menu_getAllLeafNodes`(pLang varchar(2))
BEGIN
		SELECT c.menu_text
		FROM hr_menu node,hr_menu_text AS c
		WHERE node.rgt = node.lft + 1
			AND node.id_menu=c.id_menu 
            AND c.lang=pLang;
	END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `menu_getDepthSubTree` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`u447625416_react`@`127.0.0.1` PROCEDURE `menu_getDepthSubTree`(id int,pLang varchar(2))
BEGIN
     SELECT c.menu_text , (COUNT(parent.id_menu) - (sub_tree.depth + 1)) AS depth
		FROM hr_menu AS node,
			hr_menu AS parent,
			hr_menu AS sub_parent,
            hr_menu_text AS c,
			(
				SELECT node.id_menu, (COUNT(parent.id_menu) - 1) AS depth
				FROM hr_menu AS node,
				hr_menu AS parent
				WHERE node.lft BETWEEN parent.lft AND parent.rgt
				AND node.id_menu = id 
				GROUP BY node.id_menu
				ORDER BY node.lft
			)AS sub_tree
		WHERE node.lft BETWEEN parent.lft AND parent.rgt
			AND node.lft BETWEEN sub_parent.lft AND sub_parent.rgt
			AND sub_parent.id_menu = sub_tree.id_menu
            AND node.id_menu=c.id_menu 
			AND c.lang=pLang
		GROUP BY c.menu_text 
		ORDER BY node.lft;
		 
	END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `menu_getFullTree` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`u447625416_react`@`127.0.0.1` PROCEDURE `menu_getFullTree`(id int,pLang varchar(2))
BEGIN
		SELECT c.menu_text
		FROM hr_menu AS node,hr_menu AS parent,hr_menu_text AS c
		WHERE node.lft BETWEEN parent.lft AND parent.rgt
				AND node.id_menu=c.id_menu 
				AND parent.id_menu =IFNULL( id,parent.id_menu)
				AND c.lang=pLang
		ORDER BY node.lft;
	END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `menu_getImmediateSubordinatesNode` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`u447625416_react`@`127.0.0.1` PROCEDURE `menu_getImmediateSubordinatesNode`(id int,pLang varchar(2))
BEGIN
    	SELECT c.menu_text, (COUNT(parent.id_menu) - (sub_tree.depth + 1)) AS depth
		FROM hr_menu AS node,
			hr_menu AS parent,
			hr_menu AS sub_parent,
            hr_menu_text AS c,
			(
				SELECT node.id_menu, (COUNT(parent.id_menu) - 1) AS depth
				FROM hr_menu AS node,
				hr_menu AS parent
				WHERE node.lft BETWEEN parent.lft AND parent.rgt
				AND node.id_menu = id 
				GROUP BY node.id_menu
				ORDER BY node.lft
			)AS sub_tree
		WHERE node.lft BETWEEN parent.lft AND parent.rgt
			AND node.lft BETWEEN sub_parent.lft AND sub_parent.rgt
			AND sub_parent.id_menu = sub_tree.id_menu
            AND node.id_menu=c.id_menu 
			AND c.lang=pLang
		GROUP BY c.menu_text
		HAVING depth <= 1
		ORDER BY node.lft;
    END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `menu_getNodesDepth` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`u447625416_react`@`127.0.0.1` PROCEDURE `menu_getNodesDepth`(pLang varchar(2))
BEGIN
		SELECT node.lft,node.id_menu ,c.menu_text as title,  c.url,c.icon,c.action, (COUNT(parent.id_menu) - 1) AS depth, 1 AS enabled
		FROM hr_menu AS node,
			 hr_menu AS parent,
             hr_menu_text AS c
		WHERE node.lft BETWEEN parent.lft AND parent.rgt
				AND node.id_menu=c.id_menu 
				AND c.lang=pLang
		GROUP BY node.lft,node.id_menu,c.url,c.icon,c.action,c.menu_text
		ORDER BY node.lft, node.id_menu DESC;
	END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `menu_getNodesDepthByUser` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`u447625416_react`@`127.0.0.1` PROCEDURE `menu_getNodesDepthByUser`(pLang varchar(2),idUser int)
BEGIN
SELECT  node.lft,node.id_menu ,c.menu_text as title,  c.url,c.icon,c.action, (COUNT(parent.id_menu) - 1) AS depth,
        ifnull(( select enabled from hr_menu_usuario  
				 where id_usuario= idUser and id_menu =node.id_menu ),0) as enabled 
		FROM hr_menu AS node,
			 hr_menu AS parent,
             hr_menu_text AS c
		WHERE node.lft BETWEEN parent.lft AND parent.rgt
				AND node.id_menu=c.id_menu  
				AND c.lang= pLang
		GROUP BY node.lft,node.id_menu,c.url,c.icon,c.action,c.menu_text
		ORDER BY node.lft;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `menu_getNodesDepthByUserUrl` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`u447625416_react`@`127.0.0.1` PROCEDURE `menu_getNodesDepthByUserUrl`(pIdUser int ,pUrl varchar(128))
BEGIN
SELECT  node.lft,node.id_menu ,c.menu_text as title,  c.url,c.icon,c.action, (COUNT(parent.id_menu) - 1) AS depth,
        ifnull(( select enabled from hr_menu_usuario  
				 where id_usuario=pIdUser  and id_menu =node.id_menu ),0) as enabled 
		FROM hr_menu AS node,
			 hr_menu AS parent,
             hr_menu_text AS c
		WHERE node.lft BETWEEN parent.lft AND parent.rgt
				AND node.id_menu=c.id_menu  
                AND c.url=pUrl
                AND 
                (SELECT enabled FROM hr_menu_usuario  
				 WHERE id_usuario=pIdUser  AND id_menu =node.id_menu)=1
		GROUP BY node.lft,node.id_menu,c.url,c.icon,c.action,c.menu_text
		ORDER BY node.lft;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `menu_getSinglePath` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`u447625416_react`@`127.0.0.1` PROCEDURE `menu_getSinglePath`(id int,pLang varchar(2))
BEGIN
		SELECT c.menu_text 
		FROM hr_menu AS node,hr_menu AS parent,hr_menu_text AS c
		WHERE node.lft BETWEEN parent.lft AND parent.rgt
			AND node.id_menu =id 
            AND parent.id_menu=c.id_menu 
             AND c.lang=pLang
		ORDER BY parent.lft;
	END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `menu_List` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`u447625416_react`@`127.0.0.1` PROCEDURE `menu_List`(pLang varchar(2))
BEGIN
		SELECT node.id_menu,CONCAT( REPEAT('    ', COUNT(parent.id_menu) - 1), c.menu_text) AS name
		FROM hr_menu AS node,	hr_menu AS parent,hr_menu_text AS c
		WHERE node.lft BETWEEN parent.lft AND parent.rgt
        and c.lang=pLang
         and node.id_menu=c.id_menu -- and parent.id_menu=c.id_menu
		GROUP BY node.id_menu
        ORDER BY node.lft;
	END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `menu_updateNode` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`u447625416_react`@`127.0.0.1` PROCEDURE `menu_updateNode`(
pId_menu int,
pLang varchar(2),
pName varchar(128),
pUrl varchar(255),
pIcon varchar(64),
pAction varchar(64)
)
BEGIN
		UPDATE hr_menu_text
		SET 
			menu_text=pName,
            url=pUrl,
            icon=pIcon, 
            action  =pAction
		WHERE id_menu= pId_menu and lang= UPPER(pLang);
        SELECT  ROW_COUNT() row_count;	
	END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `productGetAll` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`u447625416_react`@`127.0.0.1` PROCEDURE `productGetAll`()
BEGIN
 select a.id_product as id, a.sku, a.name, a.description, b.url as image, a.price, a.created, a.created_by, a.updated, a.updated_by
   from st_product a
   inner join st_product_images b
   ON a.id_product = b.id_product;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `productGetById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`u447625416_react`@`127.0.0.1` PROCEDURE `productGetById`(pk int)
BEGIN
    select a.id_product as id, a.sku, a.name, a.description, b.url as image, a.price, a.created, a.created_by, a.updated, a.updated_by
   from st_product a
   inner join st_product_images b
    ON a.id_product = b.id_product 
    WHERE a.id_product=pk;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sessionkeysGetAll` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`u447625416_react`@`127.0.0.1` PROCEDURE `sessionkeysGetAll`()
BEGIN
    select uuid,id_usuario,expiration,created
    from hr_app_session_keys;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usuarioDelete` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`u447625416_react`@`127.0.0.1` PROCEDURE `usuarioDelete`(pk int)
BEGIN
    delete from hr_app_usuario
    where id_usuario=pk;
	SELECT  ROW_COUNT() row_count;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usuarioGetAll` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`u447625416_react`@`127.0.0.1` PROCEDURE `usuarioGetAll`()
BEGIN
    select id_usuario,usuario,nombre,apellido,email,password,id_perfil,vigencia_desde,vigencia_hasta,creado_por,fecha_creacion,modificado_por,fecha_modificacion
    from hr_app_usuario;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usuarioGetById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`u447625416_react`@`127.0.0.1` PROCEDURE `usuarioGetById`(pk int)
BEGIN
    select id_usuario,usuario,nombre,apellido,email,password,id_perfil,vigencia_desde,vigencia_hasta,creado_por,fecha_creacion,modificado_por,fecha_modificacion 
    from hr_app_usuario
    where id_usuario=pk;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usuarioInsert` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`u447625416_react`@`127.0.0.1` PROCEDURE `usuarioInsert`(
	pUsuario varchar(50),
	pNombre varchar(50),
	pApellido varchar(50),
	pEmail varchar(200),
	pPassword varchar(200),
	pId_Perfil int ,
	pVigencia_Desde date ,
	pVigencia_Hasta date ,
	pCreado_Por varchar(100)
	
)
BEGIN
    INSERT INTO hr_app_usuario(usuario,nombre,apellido,email,password,id_perfil,vigencia_desde,vigencia_hasta,creado_por)
        VALUES(pUsuario,pNombre,pApellido,pEmail,pPassword,pId_Perfil,pVigencia_Desde,pVigencia_Hasta,pCreado_Por);
	SELECT  LAST_INSERT_ID() id,ROW_COUNT() row_count;    
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usuarioUpdate` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`u447625416_react`@`127.0.0.1` PROCEDURE `usuarioUpdate`(
	pId_Usuario int,
	pNombre varchar(50),
	pApellido varchar(50),
	pVigencia_Desde date,
	pVigencia_Hasta date,
	pModificado_Por varchar(20)
    )
BEGIN
    UPDATE hr_app_usuario
    SET 
		nombre=pNombre,
		apellido=pApellido,
		vigencia_desde=pVigencia_Desde,
		vigencia_hasta=pVigencia_Hasta,
		modificado_por=pModificado_Por,
		fecha_modificacion=now()
	WHERE id_usuario=pId_Usuario;
	SELECT  ROW_COUNT() row_count;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-03-26 14:26:46
