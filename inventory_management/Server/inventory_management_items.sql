-- MySQL dump 10.13  Distrib 8.0.31, for macos12 (x86_64)
--
-- Host: localhost    Database: inventory_management
-- ------------------------------------------------------
-- Server version	8.0.31

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
-- Table structure for table `items`
--

DROP TABLE IF EXISTS `items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `items` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_name` varchar(45) NOT NULL,
  `in_stock` int NOT NULL,
  `category` varchar(45) NOT NULL,
  `src` varchar(70) NOT NULL,
  `storage` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=146 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `items`
--

LOCK TABLES `items` WRITE;
/*!40000 ALTER TABLE `items` DISABLE KEYS */;
INSERT INTO `items` VALUES (21,'Green Apple',26,'Vegetables','https://source.unsplash.com/30x30','V1'),(22,'Red Apple',20,'Vegetables','https://source.unsplash.com/30x30','V1'),(23,'Eggplant',16,'Vegetables','https://source.unsplash.com/30x30','V1'),(24,'Asparagus',12,'Vegetables','https://source.unsplash.com/30x30','V1'),(25,'Beet',56,'Vegetables','https://source.unsplash.com/30x30','V1'),(26,'Bok Choy',7,'Vegetables','https://source.unsplash.com/30x30','V1'),(27,'Broccoli',15,'Vegetables','https://source.unsplash.com/30x30','V1'),(28,'Brussels Sprouts',44,'Vegetables','https://source.unsplash.com/30x30','V1'),(29,'Purple Cabagge',12,'Vegetables','https://source.unsplash.com/30x30','V1'),(30,'Carrots',60,'Vegetables','https://source.unsplash.com/30x30','V2'),(31,'Cauliflower',11,'Vegetables','https://source.unsplash.com/30x30','V2'),(32,'Celery',30,'Vegetables','https://source.unsplash.com/30x30','V2'),(33,'Celeriac',33,'Vegetables','https://source.unsplash.com/30x30','V2'),(34,'Chard',10,'Vegetables','https://source.unsplash.com/30x30','V2'),(35,'Chicory',3,'Vegetables','https://source.unsplash.com/30x30','V2'),(36,'Corn',12,'Vegetables','https://source.unsplash.com/30x30','V2'),(37,'Cress',34,'Vegetables','https://source.unsplash.com/30x30','V2'),(38,'Cucumbers',70,'Vegetables','https://source.unsplash.com/30x30','V2'),(39,'Daikon',10,'Vegetables','https://source.unsplash.com/30x30','V3'),(40,'Garlic',41,'Vegetables','https://source.unsplash.com/30x30','V3'),(41,'Green Beans',12,'Vegetables','https://source.unsplash.com/30x30','V3'),(42,'Greens',23,'Vegetables','https://source.unsplash.com/30x30','V3'),(43,'Collard Greens',36,'Vegetables','https://source.unsplash.com/30x30','V3'),(44,'Mustard Greens',43,'Vegetables','https://source.unsplash.com/30x30','V3'),(45,'Gourds',60,'Vegetables','https://source.unsplash.com/30x30','V3'),(46,'Jicama',32,'Vegetables','https://source.unsplash.com/30x30','V3'),(47,'Kale',11,'Vegetables','https://source.unsplash.com/30x30','V3'),(50,'Beef Knuckle',28,'Meat','https://source.unsplash.com/30x30','M1'),(51,'Beef Rump',9,'Meat','https://source.unsplash.com/30x30','M1'),(52,'Beef Striploin',4,'Meat','https://source.unsplash.com/30x30','M1'),(53,'Beef Fillet',4,'Meat','https://source.unsplash.com/30x30','M1'),(54,'Beef Ribeye',6,'Meat','https://source.unsplash.com/30x30','M1'),(55,'Beef Trim',6,'Meat','https://source.unsplash.com/30x30','M1'),(56,'Chicken Breasts',6,'Meat','https://source.unsplash.com/30x30','M1'),(57,'Chicken Legs',3,'Meat','https://source.unsplash.com/30x30','M2'),(58,'Chicken Chines',9,'Meat','https://source.unsplash.com/30x30','M2'),(59,'Chicken Shoulders',9,'Meat','https://source.unsplash.com/30x30','M2'),(60,'Chicken Loins',10,'Meat','https://source.unsplash.com/30x30','M2'),(61,'Chicken Racks',11,'Meat','https://source.unsplash.com/30x30','M2'),(62,'Chicken Neck',13,'Meat','https://source.unsplash.com/30x30','M2'),(63,'Chicken Fillets',5,'Meat','https://source.unsplash.com/30x30','M2'),(64,'Pork Legs',4,'Meat','https://source.unsplash.com/30x30','M2'),(65,'Pork Fillets',6,'Meat','https://source.unsplash.com/30x30','M2'),(66,'Pork Belly',7,'Meat','https://source.unsplash.com/30x30','M3'),(67,'Pork Ears',7,'Meat','https://source.unsplash.com/30x30','M3'),(68,'Pork Sides',5,'Meat','https://source.unsplash.com/30x30','M3'),(69,'Pork Bones',4,'Meat','https://source.unsplash.com/30x30','M3'),(70,'Pork Shoulders',2,'Meat','https://source.unsplash.com/30x30','M3'),(71,'Mustard Greens',6,'Meat','https://source.unsplash.com/30x30','M3'),(72,'Pork Sausages',8,'Meat','https://source.unsplash.com/30x30','M3'),(73,'Chicken Sausages',3,'Meat','https://source.unsplash.com/30x30','M3'),(74,'Veal',10,'Meat','https://source.unsplash.com/30x30','M3'),(75,'Abalone',5,'Fish','https://source.unsplash.com/30x30','F1'),(76,'Anchovies',3,'Fish','https://source.unsplash.com/30x30','F1'),(77,'Barramundi',3,'Fish','https://source.unsplash.com/30x30','F1'),(78,'Black Cod',10,'Fish','https://source.unsplash.com/30x30','F1'),(79,'Bombay Duck',4,'Fish','https://source.unsplash.com/30x30','F1'),(80,'Bream',4,'Fish','https://source.unsplash.com/30x30','F1'),(81,'Brill',6,'Fish','https://source.unsplash.com/30x30','F1'),(82,'Carp',6,'Fish','https://source.unsplash.com/30x30','F1'),(83,'Clams',6,'Fish','https://source.unsplash.com/30x30','F1'),(84,'Cod',3,'Fish','https://source.unsplash.com/30x30','F2'),(85,'Coley',9,'Fish','https://source.unsplash.com/30x30','F2'),(86,'Crab',9,'Fish','https://source.unsplash.com/30x30','F2'),(87,'Crayfish',10,'Fish','https://source.unsplash.com/30x30','F2'),(88,'Cuttlefish',11,'Fish','https://source.unsplash.com/30x30','F2'),(89,'Dabs',13,'Fish','https://source.unsplash.com/30x30','F2'),(90,'Dover Sole',5,'Fish','https://source.unsplash.com/30x30','F2'),(91,'Grey Mullet',4,'Fish','https://source.unsplash.com/30x30','F2'),(92,'Apricots',22,'Fruit','https://source.unsplash.com/30x30','FR1'),(93,'Avocados',13,'Fruit','https://source.unsplash.com/30x30','FR1'),(94,'Bananas',23,'Fruit','https://source.unsplash.com/30x30','FR1'),(95,'Squash',10,'Fruit','https://source.unsplash.com/30x30','FR1'),(96,'Cherries',4,'Fruit','https://source.unsplash.com/30x30','FR1'),(97,'Dates',4,'Fruit','https://source.unsplash.com/30x30','FR1'),(98,'Elderberries',6,'Fruit','https://source.unsplash.com/30x30','FR1'),(99,'Figs',6,'Fruit','https://source.unsplash.com/30x30','FR1'),(100,'Grapes',6,'Fruit','https://source.unsplash.com/30x30','FR1'),(101,'Guava',3,'Fruit','https://source.unsplash.com/30x30','FR2'),(102,'HoneyDew Melons',9,'Fruit','https://source.unsplash.com/30x30','FR2'),(103,'Kiwis',9,'Fruit','https://source.unsplash.com/30x30','FR2'),(104,'Lemons',10,'Fruit','https://source.unsplash.com/30x30','FR2'),(105,'Mangoes',11,'Fruit','https://source.unsplash.com/30x30','FR2'),(106,'Nectarines',13,'Fruit','https://source.unsplash.com/30x30','FR2'),(107,'Olives',5,'Fruit','https://source.unsplash.com/30x30','FR2'),(108,'Oranges',4,'Fruit','https://source.unsplash.com/30x30','FR2'),(109,'Pears',6,'Fruit','https://source.unsplash.com/30x30','FR2'),(110,'Peppers',7,'Fruit','https://source.unsplash.com/30x30','FR3'),(111,'Pineapples',7,'Fruit','https://source.unsplash.com/30x30','FR3'),(112,'Pumpkins',5,'Fruit','https://source.unsplash.com/30x30','FR3'),(113,'Quince',4,'Fruit','https://source.unsplash.com/30x30','FR3'),(114,'Raisins',2,'Fruit','https://source.unsplash.com/30x30','FR3'),(115,'Satsumas',6,'Fruit','https://source.unsplash.com/30x30','FR3'),(116,'Strawberries',8,'Fruit','https://source.unsplash.com/30x30','FR3'),(117,'Tomatoes',3,'Fruit','https://source.unsplash.com/30x30','FR3'),(118,'Ugli',10,'Fruit','https://source.unsplash.com/30x30','FR3'),(119,'Canned Meat',15,'Dry Food','https://source.unsplash.com/30x30','D1'),(120,'Canned Tunna',13,'Dry Food','https://source.unsplash.com/30x30','D1'),(121,'Canned Salmon',23,'Dry Food','https://source.unsplash.com/30x30','D1'),(122,'Canned Pineapple',10,'Dry Food','https://source.unsplash.com/30x30','D1'),(123,'Peanut Butter',4,'Dry Food','https://source.unsplash.com/30x30','D1'),(124,'Tea Bags',4,'Dry Food','https://source.unsplash.com/30x30','D1'),(125,'Coffe',6,'Dry Food','https://source.unsplash.com/30x30','D2'),(126,'Canned Pasta',6,'Dry Food','https://source.unsplash.com/30x30','D2'),(127,'Canned Vegetables',6,'Dry Food','https://source.unsplash.com/30x30','D2'),(128,'Syrup',3,'Dry Food','https://source.unsplash.com/30x30','D3'),(129,'Round Rice',9,'Dry Food','https://source.unsplash.com/30x30','D3'),(130,'Long Rice',9,'Dry Food','https://source.unsplash.com/30x30','D3'),(131,'Black Rice',10,'Dry Food','https://source.unsplash.com/30x30','D3'),(132,'Red Rice',11,'Dry Food','https://source.unsplash.com/30x30','D3'),(133,'Wild Rice',13,'Dry Food','https://source.unsplash.com/30x30','D3'),(134,'Jelly',5,'Dry Food','https://source.unsplash.com/30x30','D3'),(135,'Sugar',4,'Dry Food','https://source.unsplash.com/30x30','D3'),(136,'Flour',6,'Dry Food','https://source.unsplash.com/30x30','D3'),(137,'Honey',7,'Dry Food','https://source.unsplash.com/30x30','D4'),(138,'Oil',7,'Dry Food','https://source.unsplash.com/30x30','D4'),(139,'Vinegar',5,'Dry Food','https://source.unsplash.com/30x30','D4'),(140,'Bread',4,'Dry Food','https://source.unsplash.com/30x30','D4'),(141,'Breadcrumbs',2,'Dry Food','https://source.unsplash.com/30x30','D4'),(142,'Yeast',6,'Dry Food','https://source.unsplash.com/30x30','D4'),(143,'Tabasco',8,'Dry Food','https://source.unsplash.com/30x30','D4'),(144,'Olives',3,'Dry Food','https://source.unsplash.com/30x30','D4'),(145,'Paprika',10,'Dry Food','https://source.unsplash.com/30x30','D4');
/*!40000 ALTER TABLE `items` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-29 12:27:19
