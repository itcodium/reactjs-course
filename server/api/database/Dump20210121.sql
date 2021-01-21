CREATE DATABASE  IF NOT EXISTS `u159062377_react` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */;
USE `u159062377_react`;
-- MySQL dump 10.13  Distrib 8.0.22, for Linux (x86_64)
--
-- Host: 172.23.0.1    Database: u159062377_react
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
-- Table structure for table `hr_app_modulo`
--

DROP TABLE IF EXISTS `hr_app_modulo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hr_app_modulo` (
  `id_modulo` int(11) NOT NULL AUTO_INCREMENT,
  `codigo` varchar(64) NOT NULL,
  `modulo` varchar(100) NOT NULL,
  `vigencia_desde` datetime NOT NULL,
  `vigencia_hasta` datetime DEFAULT NULL,
  `creado_por` varchar(20) NOT NULL,
  `fecha_creacion` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modificado_por` varchar(20) DEFAULT NULL,
  `fecha_modificacion` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id_modulo`),
  UNIQUE KEY `modulo_UNIQUE` (`modulo`),
  UNIQUE KEY `codigo_UNIQUE` (`codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8 COMMENT='Modulos del sistema';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hr_app_modulo`
--

LOCK TABLES `hr_app_modulo` WRITE;
/*!40000 ALTER TABLE `hr_app_modulo` DISABLE KEYS */;
INSERT INTO `hr_app_modulo` VALUES (16,'USER','Usuario','2016-06-01 00:00:00','2018-06-01 00:00:00','dbo','2016-07-30 20:34:26',NULL,NULL),(19,'MODULE','Modulo','2016-06-01 00:00:00','2018-06-01 00:00:00','dbo','2016-07-30 20:34:40',NULL,NULL),(21,'PERFIL','Perfil','2016-06-01 00:00:00','2018-06-01 00:00:00','dbo','2016-07-30 20:34:40',NULL,NULL),(22,'PERFIL_MODULE','PerfilModulo','2016-06-01 00:00:00','2018-06-01 00:00:00','dbo','2016-07-30 20:34:40','Test','2016-09-26 00:51:54'),(23,'MENU','Menu','2016-01-01 00:00:00','2050-01-01 00:00:00','test','2016-09-28 04:41:12',NULL,NULL),(31,'CLIENT','Client','2020-01-01 00:00:00','2030-12-31 00:00:00','test.module','2020-07-05 19:48:31',NULL,NULL),(32,'INGLES','Ingles','2020-01-01 00:00:00','2030-01-01 00:00:00','test','2020-01-01 00:00:00',NULL,NULL),(33,'STORE','store','2020-01-01 00:00:00','2030-01-01 00:00:00','curso','2021-01-01 00:00:00',NULL,NULL);
/*!40000 ALTER TABLE `hr_app_modulo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hr_app_perfil`
--

DROP TABLE IF EXISTS `hr_app_perfil`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hr_app_perfil` (
  `id_perfil` int(11) NOT NULL AUTO_INCREMENT,
  `perfil` varchar(50) NOT NULL,
  `vigencia_desde` datetime NOT NULL,
  `vigencia_hasta` datetime DEFAULT NULL,
  `creado_por` varchar(20) NOT NULL,
  `fecha_creacion` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modificado_por` varchar(20) DEFAULT NULL,
  `fecha_modificacion` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id_perfil`),
  UNIQUE KEY `perfil_UNIQUE` (`perfil`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8 COMMENT='Perfiles de seguridad';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hr_app_perfil`
--

LOCK TABLES `hr_app_perfil` WRITE;
/*!40000 ALTER TABLE `hr_app_perfil` DISABLE KEYS */;
INSERT INTO `hr_app_perfil` VALUES (1,'Administrador','2016-06-01 00:00:00','2020-06-01 00:00:00','-1','2016-06-01 21:23:41',NULL,NULL),(22,'usuario','2016-01-01 00:00:00','2018-01-01 00:00:00','test','2016-09-28 04:14:11',NULL,NULL),(23,'nada','2016-01-01 00:00:00','2020-01-01 00:00:00','test','2016-09-28 04:29:20',NULL,NULL),(33,'Client','2020-01-01 00:00:00','2030-12-31 00:00:00','test.module','2020-07-05 19:48:31',NULL,NULL),(34,'Ingles','2020-01-01 00:00:00','2030-01-01 00:00:00','test','2020-01-01 00:00:00',NULL,NULL),(35,'store-user','2020-01-01 00:00:00','2030-01-01 00:00:00','curso','2021-01-01 00:00:00',NULL,NULL),(36,'store-admin','2020-01-01 00:00:00','2030-01-01 00:00:00','curso','2021-01-01 00:00:00',NULL,NULL);
/*!40000 ALTER TABLE `hr_app_perfil` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hr_app_perfil_modulo`
--

DROP TABLE IF EXISTS `hr_app_perfil_modulo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hr_app_perfil_modulo` (
  `id_perfil_modulo` int(11) NOT NULL AUTO_INCREMENT,
  `id_perfil` int(11) NOT NULL,
  `id_modulo` int(11) NOT NULL,
  `enabled` tinyint(1) DEFAULT NULL,
  `creado_por` varchar(20) NOT NULL,
  `fecha_creacion` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modificado_por` varchar(20) DEFAULT NULL,
  `fecha_modificacion` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id_perfil_modulo`),
  UNIQUE KEY `uq_perfil_modulo` (`id_perfil`,`id_modulo`),
  KEY `id_perfil_idx` (`id_perfil`),
  KEY `FK_Id_modulo_idx` (`id_modulo`),
  CONSTRAINT `FK_Id_modulo` FOREIGN KEY (`id_modulo`) REFERENCES `hr_app_modulo` (`id_modulo`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_id_perfil` FOREIGN KEY (`id_perfil`) REFERENCES `hr_app_perfil` (`id_perfil`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8 COMMENT='Relacion perfiles-modulo';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hr_app_perfil_modulo`
--

LOCK TABLES `hr_app_perfil_modulo` WRITE;
/*!40000 ALTER TABLE `hr_app_perfil_modulo` DISABLE KEYS */;
INSERT INTO `hr_app_perfil_modulo` VALUES (22,1,21,1,'test','2018-06-01 06:00:00','test','2016-09-26 07:27:24'),(23,1,19,1,'test','2018-06-01 06:00:00','test','2016-09-26 07:27:27'),(25,1,16,1,'test','2018-06-01 06:00:00','test','2016-09-26 07:44:30'),(26,1,22,1,'test','2018-06-01 06:00:00','test','2016-09-26 07:27:48'),(36,22,16,1,'test','2016-09-28 04:14:48',NULL,NULL),(37,22,22,0,'test','2016-09-28 04:27:05','test','2016-09-28 04:27:50'),(38,1,23,1,'test','2016-10-09 22:04:14',NULL,NULL),(39,35,33,1,'curso','2020-01-01 17:58:14',NULL,NULL),(40,36,33,1,'curso','2020-01-01 17:58:14',NULL,NULL);
/*!40000 ALTER TABLE `hr_app_perfil_modulo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hr_app_profile_menu`
--

DROP TABLE IF EXISTS `hr_app_profile_menu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hr_app_profile_menu` (
  `id_perfil_menu` int(11) NOT NULL AUTO_INCREMENT,
  `id_perfil` int(11) NOT NULL DEFAULT '0',
  `id_menu` int(11) NOT NULL DEFAULT '0',
  `vigencia_desde` datetime NOT NULL,
  `vigencia_hasta` datetime DEFAULT NULL,
  `creado_por` varchar(20) NOT NULL,
  `fecha_creacion` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_perfil_menu`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hr_app_profile_menu`
--

LOCK TABLES `hr_app_profile_menu` WRITE;
/*!40000 ALTER TABLE `hr_app_profile_menu` DISABLE KEYS */;
/*!40000 ALTER TABLE `hr_app_profile_menu` ENABLE KEYS */;
UNLOCK TABLES;

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

LOCK TABLES `hr_app_session_keys` WRITE;
/*!40000 ALTER TABLE `hr_app_session_keys` DISABLE KEYS */;
INSERT INTO `hr_app_session_keys` VALUES ('4b6084ec-2b6e-11e6-a94e-c04a00011902',2,'2016-06-05 20:09:04','2016-06-06 01:39:04'),('8084d8c4-2b79-11e6-a94e-c04a00011902',2,'2016-06-05 21:29:18','2016-06-06 02:59:18'),('a223e322-3657-11e6-a49b-c04a00011902',2,'2050-01-01 00:00:00','2016-06-19 22:54:29'),('02a89193-3b17-11e6-a1f2-c04a00011902',2,'2016-06-25 18:24:29','2016-06-25 23:54:29'),('1f221745-8519-11e6-a581-c04a00011902',4,'2016-09-27 22:46:02','2016-09-28 04:16:02'),('4b9cac7f-851c-11e6-a581-c04a00011902',5,'2016-09-27 23:08:45','2016-09-28 04:38:45'),('c74a87ab-bf08-11ea-950b-c04a00011902',18,'2020-07-05 19:15:01','2020-07-05 21:45:01'),('2991e386-42fc-11eb-9da6-c04a00011902',18,'2020-12-20 17:17:16','2020-12-20 19:47:16'),('2bc361d9-43cd-11eb-a3fc-0242ac170003',18,'2020-12-21 21:13:24','2020-12-21 20:43:24'),('9af137bd-43d1-11eb-a3fc-0242ac170003',18,'2020-12-21 21:45:09','2020-12-21 21:15:09'),('1da286df-4ed1-11eb-8742-0242ac170003',22,'2021-01-04 21:39:21','2021-01-04 21:09:21');
/*!40000 ALTER TABLE `hr_app_session_keys` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`u159062377_react`@`127.0.0.1`*/ /*!50003 TRIGGER before_insert_session_keys
BEFORE INSERT ON hr_app_session_keys
FOR EACH ROW
BEGIN
  IF new.uuid IS NULL THEN
    SET new.uuid = uuid();
  END IF;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

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
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8 COMMENT='Tabla de usuarios';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hr_app_usuario`
--

LOCK TABLES `hr_app_usuario` WRITE;
/*!40000 ALTER TABLE `hr_app_usuario` DISABLE KEYS */;
INSERT INTO `hr_app_usuario` VALUES (2,'p.haddad.p@gmail.com','p.haddad.p@gmail.com','Sistema','p.haddad.p@gmail.com','4297f44b13955235245b2497399d7a93',1,'2016-01-01','2030-12-31','dbo','2016-04-27 22:43:09',NULL,NULL,'ES'),(4,'usuario','usuario','usuario','usuario@test.com.ar','4297f44b13955235245b2497399d7a93',22,'2016-01-01','2004-01-01','test','2016-09-28 04:15:34',NULL,NULL,'ES'),(5,'nada','nada','nada','nada@com.ar','4297f44b13955235245b2497399d7a93',23,'2016-01-01','2020-01-01','test','2016-09-28 04:32:48',NULL,NULL,'ES'),(18,'client','Cliente','Cliente','Client@test.com','4297f44b13955235245b2497399d7a93',33,'2020-01-01','2030-12-31','test.module','2020-07-05 19:48:31',NULL,NULL,'ES'),(19,'test','test','test','test@gmail.com','4297f44b13955235245b2497399d7a93',1,'2020-12-31','2025-12-31',NULL,'2020-12-31 20:24:39',NULL,NULL,'ES'),(22,'test2','test','test','test2@gmail.com','4297f44b13955235245b2497399d7a93',35,'2021-01-04','2026-01-04','store','2021-01-04 21:09:12',NULL,NULL,'ES'),(23,'test88','test77','test888','test88@hotmail.com','4297f44b13955235245b2497399d7a93',35,'2021-01-06','2026-01-06','store','2021-01-06 13:41:23',NULL,NULL,'ES');
/*!40000 ALTER TABLE `hr_app_usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hr_cliente`
--

DROP TABLE IF EXISTS `hr_cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hr_cliente` (
  `id_cliente` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(500) NOT NULL,
  `codigo` varchar(25) NOT NULL,
  `habilitado` tinyint(1) DEFAULT NULL,
  `creado_por` varchar(20) NOT NULL,
  `fecha_modificacion` timestamp NULL DEFAULT NULL,
  `modificado_por` varchar(20) DEFAULT NULL,
  `fecha_creacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_cliente`),
  UNIQUE KEY `codigo` (`codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=154 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hr_cliente`
--

LOCK TABLES `hr_cliente` WRITE;
/*!40000 ALTER TABLE `hr_cliente` DISABLE KEYS */;
INSERT INTO `hr_cliente` VALUES (153,'test_cliente_24','CLIENTE_24',1,'test',NULL,NULL,'2016-08-16 01:26:52');
/*!40000 ALTER TABLE `hr_cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hr_cliente_configuracion`
--

DROP TABLE IF EXISTS `hr_cliente_configuracion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hr_cliente_configuracion` (
  `id_cliente_configuracion` int(11) NOT NULL AUTO_INCREMENT,
  `id_cliente` int(11) NOT NULL DEFAULT '0',
  `clave` varchar(50) NOT NULL,
  `valor` varchar(200) NOT NULL,
  `creado_por` varchar(20) NOT NULL,
  `fecha_creacion` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_cliente_configuracion`),
  UNIQUE KEY `id_cliente_clave` (`id_cliente`,`clave`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hr_cliente_configuracion`
--

LOCK TABLES `hr_cliente_configuracion` WRITE;
/*!40000 ALTER TABLE `hr_cliente_configuracion` DISABLE KEYS */;
/*!40000 ALTER TABLE `hr_cliente_configuracion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hr_curriculum_vitae`
--

DROP TABLE IF EXISTS `hr_curriculum_vitae`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hr_curriculum_vitae` (
  `id_curriculum_vitae` int(11) NOT NULL AUTO_INCREMENT,
  `id_cliente` int(11) NOT NULL DEFAULT '0',
  `contenido` text NOT NULL,
  `ruta_archivo` varchar(500) NOT NULL,
  `creado_por` varchar(20) NOT NULL,
  `fecha_creacion` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_curriculum_vitae`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hr_curriculum_vitae`
--

LOCK TABLES `hr_curriculum_vitae` WRITE;
/*!40000 ALTER TABLE `hr_curriculum_vitae` DISABLE KEYS */;
/*!40000 ALTER TABLE `hr_curriculum_vitae` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hr_curriculum_vitae_palabra`
--

DROP TABLE IF EXISTS `hr_curriculum_vitae_palabra`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hr_curriculum_vitae_palabra` (
  `id_curriculum_vitae_palabra` int(11) NOT NULL AUTO_INCREMENT,
  `id_curriculum_vitae` int(11) NOT NULL,
  `palabra` varchar(250) NOT NULL,
  `creado_por` varchar(20) NOT NULL,
  `fecha_creacion` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_curriculum_vitae_palabra`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hr_curriculum_vitae_palabra`
--

LOCK TABLES `hr_curriculum_vitae_palabra` WRITE;
/*!40000 ALTER TABLE `hr_curriculum_vitae_palabra` DISABLE KEYS */;
/*!40000 ALTER TABLE `hr_curriculum_vitae_palabra` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hr_error`
--

LOCK TABLES `hr_error` WRITE;
/*!40000 ALTER TABLE `hr_error` DISABLE KEYS */;
INSERT INTO `hr_error` VALUES (1,'ES','A0000','El usuario o contraseña no validos','2016-06-25 23:47:09'),(2,'ES','A0001','No se encontro el parametro @param0','2016-06-25 23:47:09'),(4,'ES','A0003','El token ha expirado.','2016-07-02 23:50:23'),(5,'ES','A0002','No se ha enviado token de validacion.','2016-07-02 23:53:42'),(6,'ES','A0004','El token no es valido.','2016-07-03 06:41:02'),(7,'ES','A0005','No esta autorizado a acceder al modulo.','2016-07-30 23:08:19'),(8,'ES','A0006','La operacion de realizo correctamente.','2016-08-13 06:54:12'),(9,'ES','A0007','Se borraron @param0 registros.','2016-08-16 00:07:14'),(10,'ES','A0008','Se modificaron @param0 registros.','2016-08-16 00:15:27'),(11,'ES','A0009','Se insertaron @param0 registros.','2016-08-16 00:15:32'),(12,'ES','A0010','No se puede borrar el registro dado que tiene datos relacionados.','2016-09-28 03:59:07'),(13,'ES','A0011','Ya se ha inicializado el menu, el parametro nodo no puede ser 0 o NULL.','2016-10-09 19:50:59');
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hr_menu`
--

LOCK TABLES `hr_menu` WRITE;
/*!40000 ALTER TABLE `hr_menu` DISABLE KEYS */;
INSERT INTO `hr_menu` VALUES (1,NULL,NULL,1,4),(2,NULL,NULL,2,3),(3,NULL,NULL,7,10),(4,NULL,NULL,8,9),(5,NULL,NULL,5,6);
/*!40000 ALTER TABLE `hr_menu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hr_menu_perfil`
--

DROP TABLE IF EXISTS `hr_menu_perfil`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hr_menu_perfil` (
  `id_menu_perfil` int(11) NOT NULL AUTO_INCREMENT,
  `id_menu` int(11) NOT NULL,
  `id_perfil` int(11) NOT NULL,
  `enabled` tinyint(1) NOT NULL,
  PRIMARY KEY (`id_menu_perfil`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hr_menu_perfil`
--

LOCK TABLES `hr_menu_perfil` WRITE;
/*!40000 ALTER TABLE `hr_menu_perfil` DISABLE KEYS */;
/*!40000 ALTER TABLE `hr_menu_perfil` ENABLE KEYS */;
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
  `url` varchar(255) DEFAULT NULL,
  `icon` varchar(64) DEFAULT NULL,
  `action` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`id_menu_text`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hr_menu_text`
--

LOCK TABLES `hr_menu_text` WRITE;
/*!40000 ALTER TABLE `hr_menu_text` DISABLE KEYS */;
INSERT INTO `hr_menu_text` VALUES (1,1,'Tienda ','es','','',''),(2,2,'Productos','ES','/','',''),(3,3,'User','es','','login',''),(4,4,'Logout','ES','','','logout'),(5,5,'Contacto','es','/Contact','','');
/*!40000 ALTER TABLE `hr_menu_text` ENABLE KEYS */;
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
-- Table structure for table `hr_perfil_busqueda`
--

DROP TABLE IF EXISTS `hr_perfil_busqueda`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hr_perfil_busqueda` (
  `id_perfil_busqueda` int(11) NOT NULL AUTO_INCREMENT,
  `id_cliente` int(11) NOT NULL,
  `nombre_perfil_busqueda` varchar(250) NOT NULL,
  `creado_por` varchar(20) NOT NULL,
  `fecha_creacion` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modificado_por` varchar(20) DEFAULT NULL,
  `fecha_modificacion` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id_perfil_busqueda`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hr_perfil_busqueda`
--

LOCK TABLES `hr_perfil_busqueda` WRITE;
/*!40000 ALTER TABLE `hr_perfil_busqueda` DISABLE KEYS */;
/*!40000 ALTER TABLE `hr_perfil_busqueda` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hr_perfil_busqueda_palabra`
--

DROP TABLE IF EXISTS `hr_perfil_busqueda_palabra`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hr_perfil_busqueda_palabra` (
  `id_perfil_busqueda_palabra` int(11) NOT NULL AUTO_INCREMENT,
  `id_perfil_busqueda` int(11) NOT NULL,
  `palabra` varchar(250) NOT NULL,
  `creado_por` varchar(20) NOT NULL,
  `fecha_creacion` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modificado_por` varchar(20) DEFAULT NULL,
  `fecha_modificacion` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id_perfil_busqueda_palabra`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hr_perfil_busqueda_palabra`
--

LOCK TABLES `hr_perfil_busqueda_palabra` WRITE;
/*!40000 ALTER TABLE `hr_perfil_busqueda_palabra` DISABLE KEYS */;
/*!40000 ALTER TABLE `hr_perfil_busqueda_palabra` ENABLE KEYS */;
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
-- Table structure for table `robots`
--

DROP TABLE IF EXISTS `robots`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `robots` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(200) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `type` varchar(200) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `year` smallint(2) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=41 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `robots`
--

LOCK TABLES `robots` WRITE;
/*!40000 ALTER TABLE `robots` DISABLE KEYS */;
INSERT INTO `robots` VALUES (1,'test','test',1991),(2,'C-3PO','droid',1977),(4,'XC-3PO','Del',1977),(5,'XC-3PO','Del',1977);
/*!40000 ALTER TABLE `robots` ENABLE KEYS */;
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
-- Dumping events for database 'u159062377_react'
--

--
-- Dumping routines for database 'u159062377_react'
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
CREATE DEFINER=`u159062377_react`@`127.0.0.1` FUNCTION `getErrorMessage`(pLang varchar(2),pValue varchar(5)) RETURNS varchar(1024) CHARSET utf8
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
CREATE DEFINER=`u159062377_react`@`127.0.0.1` FUNCTION `getMenuId`(pName varchar(128)) RETURNS int(11)
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
CREATE DEFINER=`u159062377_react`@`127.0.0.1` FUNCTION `getParamValue`(pParamName varchar(50)) RETURNS varchar(500) CHARSET utf8
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
CREATE DEFINER=`u159062377_react`@`127.0.0.1` FUNCTION `raiseError`(pLang varchar(2),pValue varchar(5)) RETURNS varchar(1024) CHARSET utf8
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
/*!50003 DROP PROCEDURE IF EXISTS `clientDelete` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`u159062377_react`@`127.0.0.1` PROCEDURE `clientDelete`(pk int)
BEGIN
    delete from hr_cliente
    where id_cliente=pk;
    SELECT ROW_COUNT() row_count;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `clientDeleteByCode` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`u159062377_react`@`127.0.0.1` PROCEDURE `clientDeleteByCode`(pCode varchar(20))
BEGIN
	DELETE FROM hr_cliente
    WHERE codigo=pCode ;
    SELECT ROW_COUNT() row_count;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `clientGetAll` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`u159062377_react`@`127.0.0.1` PROCEDURE `clientGetAll`()
BEGIN
    select id_cliente,nombre,codigo,habilitado,creado_por,fecha_modificacion,modificado_por,fecha_creacion
    from hr_cliente;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `clientGetById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`u159062377_react`@`127.0.0.1` PROCEDURE `clientGetById`(pk int)
BEGIN
    select id_cliente,nombre,codigo,habilitado,creado_por,fecha_modificacion,modificado_por,fecha_creacion 
    from hr_cliente
    where id_cliente=pk;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `clientGetByName` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`u159062377_react`@`127.0.0.1` PROCEDURE `clientGetByName`(pname varchar(128))
BEGIN
    select id_cliente,nombre,codigo,habilitado,creado_por,fecha_modificacion,modificado_por,fecha_creacion 
    from hr_cliente;
    -- where nombre LIKE  CONCAT(pname,'%');
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `clientInsert` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`u159062377_react`@`127.0.0.1` PROCEDURE `clientInsert`(

	pNombre varchar(500),
	pCodigo varchar(25),
	pHabilitado tinyint ,
	pCreado_Por varchar(20),
	pFecha_Modificacion timestamp 
)
BEGIN
    INSERT INTO hr_cliente(nombre,codigo,habilitado,creado_por,fecha_modificacion)
       VALUES(pNombre,pCodigo,pHabilitado,pCreado_Por,pFecha_Modificacion);
     SELECT  LAST_INSERT_ID() id,ROW_COUNT() row_count;    
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `clientUpdate` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`u159062377_react`@`127.0.0.1` PROCEDURE `clientUpdate`(
	pId_Cliente int,
	pNombre varchar(500),
	pCodigo varchar(25),
	pHabilitado tinyint,
	pModificado_Por varchar(20)
    )
BEGIN
    UPDATE hr_cliente
    SET 
		nombre=pNombre,
		codigo=pCodigo,
		habilitado=pHabilitado,
		fecha_modificacion=now(),
		modificado_por=pModificado_Por
	WHERE id_cliente=pId_Cliente;
	SELECT  ROW_COUNT() row_count;
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
CREATE DEFINER=`u159062377_react`@`127.0.0.1` PROCEDURE `getErrorMessage`(pLang varchar(2),pValue varchar(5))
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
CREATE DEFINER=`u159062377_react`@`127.0.0.1` PROCEDURE `getSessionKeyByUser`(pEmail varchar(200),pPassword varchar(50),pLang varchar(2))
BEGIN
	
    
    
	DECLARE  vUUID varchar(64);
	DECLARE  vExpiration datetime;
	DECLARE  vId_usuario int;
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
    
    	SELECT a.uuid
			INTO vUUID
		FROM hr_app_session_keys a 
		WHERE a.id_usuario=vId_usuario and a.expiration>NOW();
        
        IF vUUID  IS NULL THEN 
			SET vExpiration= DATE_ADD(NOW(),INTERVAL 30 MINUTE);
			INSERT hr_app_session_keys( uuid,expiration,id_usuario)
						values( uuid(),vExpiration,vId_usuario);
        END IF;
        
		START TRANSACTION;
			UPDATE hr_app_usuario
			SET 
				lang=vLanguage
			WHERE id_usuario=vId_usuario;
		COMMIT;
		
        
		SELECT b.id_usuario,b.uuid ,b.expiration,
				a.id_usuario,a.usuario,a.nombre,a.apellido,a.email,a.lang,a.id_perfil
		FROM hr_app_usuario a
			inner join  hr_app_session_keys b
			on a.id_usuario=b.id_usuario
		WHERE b.id_usuario=vId_usuario 
				and b.expiration>NOW();
    ELSE	
		SET vErrorMessage =(SELECT getErrorMessage(vLanguage ,'A0000'));
		SIGNAL SQLSTATE VALUE 'A0000' SET MESSAGE_TEXT =vErrorMessage;
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
CREATE DEFINER=`u159062377_react`@`127.0.0.1` PROCEDURE `getSessionKeys`()
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
CREATE DEFINER=`u159062377_react`@`127.0.0.1` PROCEDURE `getSessionkeysByUUID`(pUuid varchar(64))
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
CREATE DEFINER=`u159062377_react`@`127.0.0.1` PROCEDURE `menu_addNodeChild`(pId_menu int,
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
        VALUES(LAST_INSERT_ID(),pName,pLang, pUrl,pIcon,pAction );    
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
CREATE DEFINER=`u159062377_react`@`127.0.0.1` PROCEDURE `menu_addNodeSameLevel`(pId_menu int,
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
        
        
        
        IF pId_menu =0 OR pId_menu IS NULL  THEN
			IF (SELECT COUNT(*) FROM hr_menu)=0 THEN
				INSERT INTO hr_menu(lft,rgt)
					VALUES(1,2);
				INSERT INTO hr_menu_text(id_menu,menu_text,lang,url,icon, action )
					VALUES(LAST_INSERT_ID(),pName,pLang,pUrl ,pIcon,pAction );
                    
			ELSE	
				
				SET vErrorMessage =(SELECT getErrorMessage(pLang ,'A0011'));
				SIGNAL SQLSTATE VALUE 'A0011' SET MESSAGE_TEXT =vErrorMessage;
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
			VALUES(id,pName,pLang,pUrl ,pIcon,pAction );
            
            SELECT  id as id_menu, ROW_COUNT() row_count;	
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
CREATE DEFINER=`u159062377_react`@`127.0.0.1` PROCEDURE `menu_deleteNode`(pId_menu int)
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
CREATE DEFINER=`u159062377_react`@`127.0.0.1` PROCEDURE `menu_deleteNodeMoveChild`(pId_menu int)
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
CREATE DEFINER=`u159062377_react`@`127.0.0.1` PROCEDURE `menu_getAll`(pLang varchar(2))
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
CREATE DEFINER=`u159062377_react`@`127.0.0.1` PROCEDURE `menu_getAllLeafNodes`(pLang varchar(2))
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
CREATE DEFINER=`u159062377_react`@`127.0.0.1` PROCEDURE `menu_getDepthSubTree`(id int,pLang varchar(2))
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
CREATE DEFINER=`u159062377_react`@`127.0.0.1` PROCEDURE `menu_getFullTree`(id int,pLang varchar(2))
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
CREATE DEFINER=`u159062377_react`@`127.0.0.1` PROCEDURE `menu_getImmediateSubordinatesNode`(id int,pLang varchar(2))
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
CREATE DEFINER=`u159062377_react`@`127.0.0.1` PROCEDURE `menu_getNodesDepth`(pLang varchar(2))
BEGIN
		SELECT node.lft,node.id_menu ,c.menu_text as title,  c.url,c.icon,c.action, (COUNT(parent.id_menu) - 1) AS depth
		FROM hr_menu AS node,
			 hr_menu AS parent,
             hr_menu_text AS c
		WHERE node.lft BETWEEN parent.lft AND parent.rgt
				AND node.id_menu=c.id_menu 
				AND c.lang=pLang
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
CREATE DEFINER=`u159062377_react`@`127.0.0.1` PROCEDURE `menu_getSinglePath`(id int,pLang varchar(2))
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
CREATE DEFINER=`u159062377_react`@`127.0.0.1` PROCEDURE `menu_List`(pLang varchar(2))
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
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`u159062377_react`@`127.0.0.1` PROCEDURE `menu_updateNode`(pId_menu int,pLang varchar(2),pName varchar(128))
BEGIN
		UPDATE hr_menu_text
		SET 
			menu_text=pName
		WHERE id_menu= pId_menu and lang=pLang;
        SELECT  ROW_COUNT() row_count;	
	END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `moduleDelete` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`u159062377_react`@`127.0.0.1` PROCEDURE `moduleDelete`(pk int)
BEGIN
    delete from hr_app_modulo
    where id_modulo=pk;
    SELECT  ROW_COUNT() row_count;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `moduleGetAll` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`u159062377_react`@`127.0.0.1` PROCEDURE `moduleGetAll`()
BEGIN
    select id_modulo,modulo,codigo,vigencia_desde,vigencia_hasta,creado_por,modificado_por
    from hr_app_modulo;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `moduleGetById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`u159062377_react`@`127.0.0.1` PROCEDURE `moduleGetById`(pk int)
BEGIN
    select id_modulo,modulo,codigo,vigencia_desde,vigencia_hasta,creado_por,modificado_por
    from hr_app_modulo
    where id_modulo=pk;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `moduleInsert` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`u159062377_react`@`127.0.0.1` PROCEDURE `moduleInsert`(

	pModulo varchar(100),
    pCodigo varchar(64),
	pVigencia_Desde datetime ,
	pVigencia_Hasta datetime ,
	pCreado_Por varchar(20)
)
BEGIN
    INSERT INTO hr_app_modulo(modulo,codigo,vigencia_desde,vigencia_hasta,creado_por,fecha_creacion)
        VALUES(pModulo,pCodigo,pVigencia_Desde,pVigencia_Hasta,pCreado_Por,now());
	SELECT  LAST_INSERT_ID() id,ROW_COUNT() row_count;        
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `moduleUpdate` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`u159062377_react`@`127.0.0.1` PROCEDURE `moduleUpdate`(
	pId_Modulo int,
	pModulo varchar(100),
    pCodigo varchar(64),
	pVigencia_Desde datetime,
	pVigencia_Hasta datetime,
	pModificado_Por varchar(20)
    )
BEGIN
    UPDATE hr_app_modulo
    SET 
		modulo=pModulo,
        codigo=pCodigo,
		vigencia_desde=pVigencia_Desde,
		vigencia_hasta=pVigencia_Hasta,
		modificado_por=pModificado_Por,
		fecha_modificacion=now()
	WHERE id_modulo=pId_Modulo;
    SELECT  ROW_COUNT() row_count;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `perfilDelete` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`u159062377_react`@`127.0.0.1` PROCEDURE `perfilDelete`(pk int)
BEGIN
	DECLARE vErrorMessage varchar(1024);
	DECLARE  vCount varchar(1024);
	SELECT count(1)
		INTO vCount
    FROM hr_app_perfil_modulo
	WHERE id_perfil=pk and enabled=1;
    
    IF vCount = 0 THEN
	    DELETE FROM hr_app_perfil_modulo
        WHERE id_perfil=pk;
    ELSE
    	SET vErrorMessage =(SELECT getErrorMessage('' ,'A0010'));
		SIGNAL SQLSTATE VALUE 'A0010' SET MESSAGE_TEXT =vErrorMessage;
    END IF; 
    
    DELETE FROM hr_app_perfil where id_perfil=pk;
    SELECT  ROW_COUNT() row_count;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `perfilGetAll` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`u159062377_react`@`127.0.0.1` PROCEDURE `perfilGetAll`()
BEGIN
    select id_perfil,perfil,vigencia_desde,vigencia_hasta,creado_por,modificado_por,fecha_creacion,fecha_modificacion
    from hr_app_perfil;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `perfilGetById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`u159062377_react`@`127.0.0.1` PROCEDURE `perfilGetById`(pk int)
BEGIN
    select id_perfil,perfil,vigencia_desde,vigencia_hasta,creado_por,modificado_por
    from hr_app_perfil
    where id_perfil=pk;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `perfilInsert` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`u159062377_react`@`127.0.0.1` PROCEDURE `perfilInsert`(

	pPerfil varchar(50),
	pVigencia_Desde datetime ,
	pVigencia_Hasta datetime ,
	pCreado_Por varchar(20)
)
BEGIN
    INSERT INTO hr_app_perfil(perfil,vigencia_desde,vigencia_hasta,fecha_creacion,creado_por)
        VALUES(pPerfil,pVigencia_Desde,pVigencia_Hasta,now(),pCreado_Por);
    SELECT  LAST_INSERT_ID() id,ROW_COUNT() row_count;    
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `perfilmoduleDelete` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`u159062377_react`@`127.0.0.1` PROCEDURE `perfilmoduleDelete`(pk int)
BEGIN
    delete from hr_app_perfil_modulo
    where id_perfil_modulo=pk;
    SELECT  ROW_COUNT() row_count;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `perfilmoduleGetAll` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`u159062377_react`@`127.0.0.1` PROCEDURE `perfilmoduleGetAll`()
BEGIN
    select id_perfil_modulo,id_perfil,id_modulo,creado_por,fecha_creacion,modificado_por,fecha_modificacion
    from hr_app_perfil_modulo;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `perfilmoduleGetById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`u159062377_react`@`127.0.0.1` PROCEDURE `perfilmoduleGetById`(pk int)
BEGIN
    select id_perfil_modulo,id_perfil,id_modulo,creado_por,fecha_creacion,modificado_por,fecha_modificacion 
    from hr_app_perfil_modulo
    where id_perfil_modulo=pk;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `perfilmoduleGetByIdPerfil` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`u159062377_react`@`127.0.0.1` PROCEDURE `perfilmoduleGetByIdPerfil`(pk int)
BEGIN
    select id_perfil_modulo,id_perfil,id_modulo, enabled,creado_por,fecha_creacion,modificado_por,fecha_modificacion 
    from hr_app_perfil_modulo
    where id_perfil=pk;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `perfilmoduleGetByModuloUsuario` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`u159062377_react`@`127.0.0.1` PROCEDURE `perfilmoduleGetByModuloUsuario`(pModulo varchar(100),pIdUsuario int)
BEGIN
    select a.id_perfil,a.id_modulo,a.enabled
	from hr_app_perfil_modulo a
		inner join hr_app_modulo b on
		a.id_modulo=b.id_modulo
        inner join hr_app_usuario c 
			on c.id_perfil=a.id_perfil
	where (b.modulo=pModulo or b.codigo=pModulo )
		and c.id_usuario=pIdUsuario;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `perfilmoduleInsert` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`u159062377_react`@`127.0.0.1` PROCEDURE `perfilmoduleInsert`(
	pId_Perfil int ,
	pId_Modulo int ,
	pEnabled int,
	pCreado_Por varchar(20)
)
BEGIN
	DECLARE  vId_perfil_modulo int;

	SELECT id_perfil_modulo
		INTO vId_perfil_modulo  
    FROM hr_app_perfil_modulo
	WHERE id_perfil=pId_Perfil and id_modulo=pId_Modulo;

	IF vId_perfil_modulo  IS NULL THEN 
	    INSERT INTO hr_app_perfil_modulo(id_perfil,id_modulo,enabled,creado_por)
	        VALUES(pId_Perfil,pId_Modulo,pEnabled,pCreado_Por);
	   	SELECT  LAST_INSERT_ID() id,ROW_COUNT() row_count;    
	ELSE	
		CALL perfilmoduloUpdate(vId_perfil_modulo, pId_Perfil,pId_Modulo,pEnabled,pCreado_Por );	
    END IF;        
        
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `perfilmoduleUpdate` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`u159062377_react`@`127.0.0.1` PROCEDURE `perfilmoduleUpdate`(
	pId_Perfil_Modulo int,
	pId_Perfil int,
	pId_Modulo int,
	pEnabled int,
	pModificado_Por varchar(20)
    )
BEGIN
    UPDATE hr_app_perfil_modulo
    SET 
		id_perfil=pId_Perfil,
		id_modulo=pId_Modulo,
		enabled =pEnabled,
		modificado_por=pModificado_Por,
		fecha_modificacion=now()
	WHERE id_perfil_modulo=pId_Perfil_Modulo;
	SELECT  ROW_COUNT() row_count;    
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `perfilUpdate` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`u159062377_react`@`127.0.0.1` PROCEDURE `perfilUpdate`(
	pId_Perfil int,
	pPerfil varchar(50),
	pVigencia_Desde datetime,
	pVigencia_Hasta datetime,
	pModificado_Por varchar(20)
    )
BEGIN
    UPDATE hr_app_perfil
    SET 
		perfil=pPerfil,
		vigencia_desde=pVigencia_Desde,
		vigencia_hasta=pVigencia_Hasta,
		modificado_por=pModificado_Por,
		fecha_modificacion=now()
	WHERE id_perfil=pId_Perfil;
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
CREATE DEFINER=`u159062377_react`@`127.0.0.1` PROCEDURE `productGetAll`()
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
CREATE DEFINER=`u159062377_react`@`127.0.0.1` PROCEDURE `productGetById`(pk int)
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
CREATE DEFINER=`u159062377_react`@`127.0.0.1` PROCEDURE `sessionkeysGetAll`()
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
CREATE DEFINER=`u159062377_react`@`127.0.0.1` PROCEDURE `usuarioDelete`(pk int)
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
CREATE DEFINER=`u159062377_react`@`127.0.0.1` PROCEDURE `usuarioGetAll`()
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
CREATE DEFINER=`u159062377_react`@`127.0.0.1` PROCEDURE `usuarioGetById`(pk int)
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
CREATE DEFINER=`u159062377_react`@`127.0.0.1` PROCEDURE `usuarioInsert`(
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
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`u159062377_react`@`127.0.0.1` PROCEDURE `usuarioUpdate`(
	pId_Usuario int,
	pUsuario varchar(50),
	pNombre varchar(50),
	pApellido varchar(50),
	pEmail varchar(200),
	pPassword varchar(200),
	pId_Perfil int,
	pVigencia_Desde date,
	pVigencia_Hasta date,
	pModificado_Por varchar(20)
    )
BEGIN
    UPDATE hr_app_usuario
    SET 
		usuario=pUsuario,
		nombre=pNombre,
		apellido=pApellido,
		email=pEmail,
		password=pPassword,
		id_perfil=pId_Perfil,
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

-- Dump completed on 2021-01-21 17:34:36
