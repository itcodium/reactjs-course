-- https://codeofaninja.com/2015/08/simple-php-mysql-shopping-cart-tutorial.html
-- https://code-boxx.com/simple-php-mysql-shopping-cart/

--
-- Table PRODUCTS 
--
DROP TABLE IF EXISTS `st_product`;
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
) ENGINE=InnoDB CHARSET=utf8;

--
-- Table PRODUCT IMAGES
--
DROP TABLE IF EXISTS `st_product_images`;
CREATE TABLE `st_product_images` (
  `id_image` int(11) NOT NULL AUTO_INCREMENT,
  `id_product` int(11) NOT NULL,
  `title` varchar(256) NOT NULL  DEFAULT '',
  `description` varchar(512) NOT NULL  DEFAULT '',
  `url` varchar(512) NOT NULL,
  PRIMARY KEY (`id_image`),
  CONSTRAINT `FK_id_image_id_product_` FOREIGN KEY (`id_product`) REFERENCES `st_product` (`id_product`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


--
-- TABLE ORDER 
--
DROP TABLE IF EXISTS `st_order`;
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
UNIQUE KEY `name_email_UNIQUE` (`name`, `email`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8;


--
-- ORDER ITEM
--
CREATE TABLE `orders_items` (
`id_order_item` int(11) NOT NULL AUTO_INCREMENT,
`id_order` int(11) NOT NULL,
`id_product` int(11) NOT NULL,
`quantity` int(11) NOT NULL,
PRIMARY KEY (`id_order_item`),
 UNIQUE KEY `order_product_UNIQUE` (`id_order`, `id_product`),
 CONSTRAINT `FK_id_product` FOREIGN KEY (`id_product`) REFERENCES `st_product` (`id_product`) ON DELETE NO ACTION ON UPDATE NO ACTION,
 CONSTRAINT `FK_id_order` FOREIGN KEY (`id_order`) REFERENCES `st_order` (`id_order`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
--  productGetAll
--
 USE `u159062377_news`;
DROP procedure IF EXISTS `productGetAll`;

USE `u159062377_news`;
DROP procedure IF EXISTS `u159062377_news`.`productGetAll`;
;

DELIMITER $$
USE `u159062377_news`$$
CREATE DEFINER=`root`@`%` PROCEDURE `productGetAll`()
BEGIN
   select id_product, sku, name, description, price, created, created_by, updated, updated_by
    from st_product; 
END$$

DELIMITER ;
;



--
-- productGetById
--
 USE `u159062377_news`;
DROP procedure IF EXISTS `productGetById`;

DELIMITER $$
USE `u159062377_news`$$
CREATE PROCEDURE `productGetById` (pk int)
BEGIN
    select id_product, sku, name, description, price, created, created_by, updated, updated_by
    from st_product
    where id_product=pk;
END$$

DELIMITER ;
