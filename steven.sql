/*
SQLyog Ultimate v11.11 (64 bit)
MySQL - 5.5.5-10.4.6-MariaDB : Database - steven
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`steven` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `steven`;

/*Table structure for table `users_copy1` */

DROP TABLE IF EXISTS `users_copy1`;

CREATE TABLE `users_copy1` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `airport` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `fltclass` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

/*Data for the table `users_copy1` */

insert  into `users_copy1`(`id`,`firstname`,`lastname`,`airport`,`city`,`state`,`country`,`fltclass`) values (1,'Steven','jones','EWR','Trumbull','CT','US','FIRST'),(5,'Jason','Delco','MSP','Minneapolis','MN','US','ECONOMY'),(8,'Brian','Bruno','SDF','Louisville','KY','US','ECONOMY'),(9,'Ashley','Lochart','MCO','Orlando','FL','US','PREMIUM_ECONOMY'),(10,'Ryan','Hurly','SAN','Vista','CA','US','BUSINESS');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
