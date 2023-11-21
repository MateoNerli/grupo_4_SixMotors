-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3307
-- Tiempo de generación: 21-11-2023 a las 23:27:56
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `sixmotors`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `orderitems`
--

CREATE TABLE `orderitems` (
  `id` int(11) NOT NULL,
  `orderId` int(11) NOT NULL,
  `productId` int(11) DEFAULT NULL,
  `name` varchar(100) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `quantity` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `orderitems`
--

INSERT INTO `orderitems` (`id`, `orderId`, `productId`, `name`, `price`, `quantity`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 2, 2, 'Toyota Hilux', 29.00, 1, '2023-10-10 02:50:53', '2023-10-10 02:50:53', NULL),
(2, 2, 1, 'Peugeot 208', 73.00, 1, '2023-10-10 02:50:53', '2023-10-10 02:50:53', NULL),
(3, 3, 1, 'Peugeot 208', 73.00, 1, '2023-10-10 03:12:06', '2023-10-10 03:12:06', NULL),
(4, 4, 11, 'Bujia', 88.00, 1, '2023-10-10 23:01:48', '2023-10-10 23:01:48', NULL),
(5, 4, 6, 'Amortiguador', 73.00, 1, '2023-10-10 23:01:48', '2023-10-10 23:01:48', NULL),
(6, 4, 3, 'Alternador', 10.00, 1, '2023-10-10 23:01:48', '2023-10-10 23:01:48', NULL),
(7, 4, 7, 'espejos-laterales', 28.00, 1, '2023-10-10 23:01:48', '2023-10-10 23:01:48', NULL),
(8, 5, 3, 'Alternador', 10.00, 1, '2023-10-15 20:21:50', '2023-10-15 20:21:50', NULL),
(9, 5, 7, 'espejos-laterales', 28.00, 1, '2023-10-15 20:21:50', '2023-10-15 20:21:50', NULL),
(10, 5, 12, 'piston', 1.00, 1, '2023-10-15 20:21:50', '2023-10-15 20:21:50', NULL),
(11, 5, 6, 'Amortiguador', 73.00, 1, '2023-10-15 20:21:50', '2023-10-15 20:21:50', NULL),
(12, 6, 27, 'Optica trasera Ford Ranger', 150.00, 1, '2023-10-22 21:59:35', '2023-10-22 21:59:35', NULL),
(13, 6, 28, 'Optica Delantera Kit x2 Ford Ranger', 280.00, 1, '2023-10-22 21:59:35', '2023-10-22 21:59:35', NULL),
(14, 6, 33, 'Luz de Giro Kit x2 Toyota Hilux', 280.00, 1, '2023-10-22 21:59:35', '2023-10-22 21:59:35', NULL),
(15, 6, 23, 'Optica Trasera Kit X2 Renault Sandero', 140.00, 1, '2023-10-22 21:59:35', '2023-10-22 21:59:35', NULL),
(16, 6, 3, 'Alternador', 10.00, 21, '2023-10-22 21:59:35', '2023-10-22 21:59:35', NULL),
(17, 6, 6, 'Amortiguador', 73.00, 1, '2023-10-22 21:59:35', '2023-10-22 21:59:35', NULL),
(18, 6, 13, 'rueda', 94.00, 1, '2023-10-22 21:59:35', '2023-10-22 21:59:35', NULL),
(19, 7, 11, 'Bujia', 88.00, 1, '2023-10-25 00:14:17', '2023-10-25 00:14:17', NULL),
(20, 7, 7, 'espejos-laterales', 28.00, 1, '2023-10-25 00:14:17', '2023-10-25 00:14:17', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `total` decimal(10,2) NOT NULL,
  `paymentMethod` varchar(25) NOT NULL,
  `shippingMethod` varchar(25) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `orders`
--

INSERT INTO `orders` (`id`, `userId`, `total`, `paymentMethod`, `shippingMethod`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(2, 20, 102.00, 'Débito', 'Cadete', '2023-10-10 02:50:53', '2023-10-10 02:50:53', NULL),
(3, 20, 73.00, 'Efectivo', 'Correo', '2023-10-10 03:12:06', '2023-10-10 03:12:06', NULL),
(4, 20, 199.00, 'Efectivo', 'Cadete', '2023-10-10 23:01:48', '2023-10-10 23:01:48', NULL),
(5, 20, 112.00, 'Débito', 'Andreani', '2023-10-15 20:21:50', '2023-10-15 20:21:50', NULL),
(6, 20, 1227.00, 'Débito', 'Correo', '2023-10-22 21:59:35', '2023-10-22 21:59:35', NULL),
(7, 20, 116.00, 'Efectivo', 'Andreani', '2023-10-25 00:14:17', '2023-10-25 00:14:17', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `type` tinyint(4) DEFAULT NULL,
  `description` varchar(1000) DEFAULT NULL,
  `img` varchar(100) DEFAULT NULL,
  `category` varchar(45) DEFAULT NULL,
  `colors` varchar(45) DEFAULT NULL,
  `price` decimal(10,2) NOT NULL,
  `marked` tinyint(1) DEFAULT 0,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `is_km` tinyint(1) DEFAULT NULL,
  `year` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `type`, `description`, `img`, `category`, `colors`, `price`, `marked`, `createdAt`, `updatedAt`, `deletedAt`, `is_km`, `year`) VALUES
(1, 'Peugeot 208', 0, 'Nondisp fx of unsp ulna styloid pro, 7thH', 'peugot-208.jpg', 'Usado', 'Khaki', 73.00, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 0, 1998),
(2, 'Toyota Hilux', 0, '    Lac w/o fb of unsp frnt wl of thrx w/o penet thor cav, subs', 'Toyota Hilux.jpg', 'Usado', 'Mauv', 99999999.99, 0, '0000-00-00 00:00:00', '2023-11-11 03:33:47', NULL, 0, 2006),
(3, 'Alternador ', 1, '    Alternador auto', 'alternador.jpg', 'Motor', 'Mauv', 10000.00, 0, '0000-00-00 00:00:00', '2023-11-16 12:09:40', NULL, 1, 2000),
(4, 'Volkswagen Amarok', 0, 'Other alopecia areata', 'Volkswagen Amarok.jpg', 'Usado', 'Goldenrod', 79.00, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 0, 2012),
(5, 'Ford Ranger', 0, 'Cataract extraction status, right eye', 'Ford Ranger.jpg', 'Usado', 'Puce', 37.00, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 0, 1995),
(6, 'Amortiguadores', 1, '        Stress fracture, right finger(s), init encntr for fracture', 'Amortiguadores-autos.jpg', 'Amortiguadores', 'Aquamarine', 1000.00, 0, '0000-00-00 00:00:00', '2023-11-14 13:33:41', NULL, 0, 1993),
(7, 'espejos-lateral', 1, 'Benign neoplm of prph nerves and autonm nervous sys of abd', 'espejos-laterales-ap.jpg', 'Otros', 'Purple', 2800.00, 0, '0000-00-00 00:00:00', '2023-11-14 13:34:38', NULL, 0, 1993),
(8, 'Renault Sandero', 0, '  Lacerat unsp blood vessel at shldr/up arm, right arm, init', 'Renault Sandero.jpg', 'Usado', 'Indigo', 2400000.00, 0, '0000-00-00 00:00:00', '2023-10-19 22:28:24', NULL, 0, 2011),
(9, 'Renault Alaskan', 0, 'Foster-Kennedy syndrome, unspecified eye', 'Renault Alaskan.jpg', 'Usado', 'Teal', 50.00, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 0, 2012),
(10, 'Fiat 147', 0, 'Associated transverse-posterior fracture of acetabulum', 'Fiat-147.jpg', 'Usado', 'Orange', 23.00, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 0, 1994),
(11, 'Bujia', 1, 'Inj muscle, fascia and tendon of lower back, subs encntr', 'bujia.jpeg', 'Motor', 'Mauv', 8000.00, 0, '0000-00-00 00:00:00', '2023-11-14 13:35:19', NULL, 0, 2000),
(12, 'Pistones', 1, 'Lacerat extn musc/fasc/tend l little fngr at forarm lv, init', 'piston.jpg', 'Motor', 'Violet', 1000.00, 0, '0000-00-00 00:00:00', '2023-11-11 17:18:48', NULL, 1, 2008),
(13, 'rueda', 1, 'Contus/lac/hem crblm w LOC of unsp duration', 'rueda-camion.webp', 'Cubiertas', 'Green', 94.00, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 1, 2005),
(14, 'Fiat Cronos', 0, 'Unil post-trauma osteoarth of first carpometacarp joint', 'Fiat Cronos.jpg', 'Usado', 'Mauv', 69.00, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 0, 1995),
(23, 'Optica Trasera Kit X2 Renault Sandero', 1, 'Nondisp fx of unsp ulna styloid pro, 7thH', 'Optica trasera  x2 Renault Sandero.jpg', 'Iluminacion', 'Khaki', 140.00, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 0, 2023),
(24, 'Optica trasera Renault Sandero', 1, 'Lac w/o fb of unsp frnt wl of thrx w/o penet thor cav, subs', 'Optica trasera Renault Sandero.jpg', 'Iluminacion', 'Mauv', 80.00, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 1, 2023),
(25, 'Optica Delantera Kit x2 Renault Sandero', 1, 'Other alopecia areata', 'Optica delantera x2 Renault Sandero.jpg', 'Iluminacion', 'Goldenrod', 280.00, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 1, 2023),
(26, 'Optica Trasera x2 Ford Ranger', 1, 'Cataract extraction status, right eye', 'Optica trasera x2 Ford Ranger.jpg', 'Iluminacion', 'Puce', 280.00, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 1, 2023),
(27, 'Optica trasera Ford Ranger', 1, 'Stress fracture, right finger(s), init encntr for fracture', 'Optica trasera Ford Ranger.jpg', 'Iluminacion', 'Aquamarine', 150.00, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 1, 2023),
(28, 'Optica Delantera Kit x2 Ford Ranger', 1, 'Benign neoplm of prph nerves and autonm nervous sys of abd', 'Optica delantera x2 Ford Ranger.jpg', 'Iluminacion', 'Purple', 280.00, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 0, 2023),
(29, 'Optica Delantera Ford Ranger', 1, 'Lacerat unsp blood vessel at shldr/up arm, right arm, init', 'Optica delantera Ford Ranger.jpg', 'Iluminacion', 'Indigo', 150.00, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 0, 2023),
(30, 'Optica Trasera Kit x2 VW Amarokn', 1, 'Foster-Kennedy syndrome, unspecified eye', 'Optica trasera x2 VW Amarok.jpg', 'Iluminacion', 'Teal', 280.00, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 0, 2023),
(31, 'Optica Trasera VW Amarok', 1, 'Associated transverse-posterior fracture of acetabulum', 'Optica trasera VW Amarok.jpg', 'Iluminacion', 'Orange', 150.00, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 0, 2023),
(32, 'Optica Delantera Kit x2 VW Amarok', 1, 'Inj muscle, fascia and tendon of lower back, subs encntr', 'Optica delantera x2 VW Amarok.jpeg', 'Iluminacion', 'Mauv', 280.00, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 0, 2023),
(33, 'Luz de Giro Kit x2 Toyota Hilux', 1, 'Lacerat extn musc/fasc/tend l little fngr at forarm lv, init', 'Luz de giro x2 Toyota Hilux.jpg', 'Iluminacion', 'Violet', 280.00, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 1, 2023),
(34, 'Optica Trasera Toyota Hilux', 1, 'Contus/lac/hem crblm w LOC of unsp duration', 'Optica Trasera Toyota Hilux.jpg', 'Iluminacion', 'Green', 94.00, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 1, 2023),
(35, 'Optica Trasera Kit x2 Toyota Hilux', 1, 'Unil post-trauma osteoarth of first carpometacarp joint', 'Optica trasera x2 Toyota Hilux.jpg', 'Iluminacion', 'Mauv', 150.00, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 1, 2023),
(36, 'Optica Delantera Toyota Hilux', 1, 'dsadsad', 'Optica delantera Toyota Hilux.jpg', 'Iluminacion', 'gris', 120.00, 0, '2023-10-09 14:30:06', '2023-10-09 14:30:06', NULL, 1, 2023),
(37, 'Optica Delantera Kit x2 Toyota hilux', 1, 'Osos', 'optica delantera x2 Toyota hilux.jpg', 'Iluminacion', 'rojo', 200.00, 0, '2023-10-12 14:47:07', '2023-10-12 14:47:07', NULL, 1, 2023),
(38, 'Optica Trasera Kit x2 Peugeot 208', 1, 'Nondisp fx of unsp ulna styloid pro, 7thH', 'Optica trasera x2 Peugeot 208.jpg', 'Iluminacion', 'Khaki', 290.00, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 0, 2023),
(39, 'Optica trasera Peugeot 208', 1, 'Lac w/o fb of unsp frnt wl of thrx w/o penet thor cav, subs', 'optica trasera Peugeot 208.jpg', 'Iluminacion', 'Mauv', 150.00, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 1, 2023),
(40, 'Optica Delantera Kit x2 peugeot 208', 1, 'Unsp fx r patella, subs for opn fx type 3A/B/C w malunion', 'optica delantera x2 peugeot 208.jpg', 'Iluminacion', 'Mauv', 200.00, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 0, 2023),
(41, 'Optica Delantera peugeot 208', 1, 'Other alopecia areata', 'optica delantera peugeot 208.jpg', 'Iluminacion', 'Goldenrod', 110.00, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 1, 2023),
(42, 'Luneta Trasera Renault Alaskan', 1, 'Cataract extraction status, right eye', 'Luneta trasera Renault Alaskan.jpg', 'Otros', 'Puce', 800.00, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 1, 2023),
(43, 'Luneta Trasera Renault Sandero', 1, 'Stress fracture, right finger(s), init encntr for fracture', 'Luneta trasera Renault Sandero.jpg', 'Otros', 'Aquamarine', 600.00, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 1, 2023),
(44, 'Parabrisas Fiat Cronos', 1, 'Benign neoplm of prph nerves and autonm nervous sys of abd', 'Parabrisas delantero Fiat Cronos.jpg', 'Otros', 'Purple', 900.00, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 0, 2023),
(45, 'Parabrisas Renault Sandero', 1, 'Lacerat unsp blood vessel at shldr/up arm, right arm, init', 'parabrisas delantero Renault Sandero.jpg', 'Otros', 'Indigo', 950.00, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 0, 2023),
(46, 'Parabrisas VW Amarok', 1, 'Foster-Kennedy syndrome, unspecified eye', 'Oparabrisas delantero VW Amarok.jpg', 'Otros', 'Teal', 1000.00, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 0, 2023),
(47, 'Parabrisas Peugeot 208', 1, 'Associated transverse-posterior fracture of acetabulum', 'parabrisas delantero Peugeot 208.jpg', 'Otros', 'Orange', 950.00, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 0, 2023),
(48, 'Optica Delantera Kit x2 VW Amarok', 1, 'Inj muscle, fascia and tendon of lower back, subs encntr', 'Optica delantera x2 VW Amarok.jpeg', 'Iluminacion', 'Mauv', 280.00, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 0, 2023),
(49, 'Kit 2 amortiguadores delanteros', 1, 'Lacerat extn musc/fasc/tend l little fngr at forarm lv, init', 'kit 2 amortiguadores delanteros.jpg', 'Amortiguadores', 'Violet', 80.00, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 1, 2023),
(50, 'Cubierta 205 55 16', 1, 'Contus/lac/hem crblm w LOC of unsp duration', 'cubierta 205 55 16.jpg', 'Cubiertas', 'Green', 80.00, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 1, 2023),
(51, 'Kit 4 Discos de Freno + Pastillas', 1, 'Unil post-trauma osteoarth of first carpometacarp joint', 'kit 4 discos + pastillas.jpg', 'Otros', 'Mauv', 50.00, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 1, 2023),
(52, 'Kit 4 pastillas de freno', 1, 'dsadsad', 'juego 4 pastillas de freno.jpg', 'Otros', 'gris', 20.00, 0, '2023-10-09 14:30:06', '2023-10-09 14:30:06', NULL, 1, 2023),
(53, 'Kit de embrague VW Amarok', 1, 'Osos', 'Kit de embrague Vw Amarok.jpg', 'Otros', 'rojo', 200.00, 0, '2023-10-12 14:47:07', '2023-10-12 14:47:07', NULL, 1, 2023),
(54, 'Bocha', 1, 'Bocha trialer', 'products-img-1699584873556.jpg', 'Otros', 'Negro', 10000.00, 0, '2023-11-10 02:54:33', '2023-11-10 02:54:33', NULL, 0, 2222),
(55, 'Hola', 1, 'Caño', 'products-img-1699673871528.jpg', 'Otros', 'MArron', 5.00, 0, '2023-11-11 03:37:51', '2023-11-11 03:37:51', NULL, 0, 2004),
(56, 'Citroen c3', 0, '  Lacerat unsp blood vessel at shldr/up arm, right arm, init', 'citroenc3.jpg', 'Usado', 'Sky Blue', 20000000.00, 0, '0000-00-00 00:00:00', '2023-10-19 22:28:24', NULL, 0, 2023),
(57, 'Toyota Etios', 0, '  t shldr/p blood vessel at shldr/up arm, right arm, init', 'toyotaetios.jpg', '0km', 'white', 18000000.00, 0, '0000-00-00 00:00:00', '2023-10-19 22:28:24', NULL, 1, 2023),
(58, 'Fiat Mobi', 0, '  ontus/lac/hem crblm w LOC of unsp duration, right arm, init', 'fiatmobi.jpg', '0km', 'red', 17000000.00, 0, '0000-00-00 00:00:00', '2023-10-19 22:28:24', NULL, 1, 2023),
(59, 'Fiat Cronos', 0, ' neoplm of prph nerves and autonm nervous , right arm, init', 'fiatcronos.jpg', '0km', 'silver', 22000000.00, 0, '0000-00-00 00:00:00', '2023-10-19 22:28:24', NULL, 1, 2023),
(60, 'Chevrolet Onix', 0, ' neoplm of prph nerves and autonm nervous , right arm, init', 'onix.jpg', '0km', 'silver', 16000000.00, 0, '0000-00-00 00:00:00', '2023-10-19 22:28:24', NULL, 1, 2023),
(61, 'Chevrolet Joy', 0, ' neoplm of prph nerves and autonm nervous , right arm, init', 'Joy.jpg', '0km', 'silver', 15000000.00, 0, '0000-00-00 00:00:00', '2023-10-19 22:28:24', NULL, 1, 2023),
(62, 'Renault Logan', 0, ' neoplm of prph nerves and autonm nervous , right arm, init', 'logan.jpg', '0km', 'dark-grey', 20000000.00, 0, '0000-00-00 00:00:00', '2023-10-19 22:28:24', NULL, 1, 2023),
(63, 'Nissan Versa', 0, ' nerves and auneoplm of prph nerves andnervous , right arm, init', 'versa.jpg', '0km', 'satin-red', 23000000.00, 0, '0000-00-00 00:00:00', '2023-10-19 22:28:24', NULL, 1, 2023),
(64, 'Vw Virtus', 0, ' nerves and auneoplm of prph nerves andnervous , right arm, init', 'virtus.jpg', '0km', 'oak-grey', 25000000.00, 0, '0000-00-00 00:00:00', '2023-10-19 22:28:24', NULL, 1, 2023),
(65, 'Nissan X-Trail', 0, ' nerves and auneoplm of prph nerves andnervous , right arm, init', 'xtrail.jpg', '0km', 'marfil', 25000000.00, 0, '0000-00-00 00:00:00', '2023-10-19 22:28:24', NULL, 1, 2023),
(66, 'Vw Polo Track', 0, ' nerves and auneoplm of prph nerves andnervous , right arm, init', 'polotrack.jpg', '0km', 'dark-grey', 20000000.00, 0, '0000-00-00 00:00:00', '2023-10-19 22:28:24', NULL, 1, 2023),
(67, 'Toyota Hilux SRX Wide-Track', 0, ' nerves and auneoplm of prph nerves andnervous , right arm, init', 'hiluxsrx.jpg', '0km', 'dark-grey', 27000000.00, 0, '0000-00-00 00:00:00', '2023-10-19 22:28:24', NULL, 1, 2023),
(68, 'Kia Sportage', 0, ' nerves and auneoplm of prph nerves andnervous , right arm, init', 'sportage.jpg', '0km', 'dark-grey', 28000000.00, 0, '0000-00-00 00:00:00', '2023-10-19 22:28:24', NULL, 1, 2023),
(69, 'Nissan Kicks Xplay', 0, ' nerves and auneoplm of prph nerves andnervous , right arm, init', 'kicksxplay.jpg', '0km', 'dark-grey', 24000000.00, 0, '0000-00-00 00:00:00', '2023-10-19 22:28:24', NULL, 1, 2023),
(70, 'VW Passat Variant', 0, ' nerves and auneoplm of prph nerves andnervous , right arm, init', 'passatvariant.jpg', 'Usado', 'electragreen', 29000000.00, 0, '0000-00-00 00:00:00', '2023-10-19 22:28:24', NULL, 0, 2023),
(71, 'Renault Kangoo Z.E.', 0, ' nerves and auneoplm of prph nerves andnervous , right arm, init', 'kangooze.jpg', 'Usado', 'white', 21000000.00, 0, '0000-00-00 00:00:00', '2023-10-19 22:28:24', NULL, 0, 2023),
(72, 'Vw ID.2all', 0, ' Benign neoplm of prph nerves and autonm nervous sys of abd', 'id2all.jpg', 'Usado', 'lazlo', 40000000.00, 0, '0000-00-00 00:00:00', '2023-10-19 22:28:24', NULL, 0, 2023),
(73, 'Mitsubishi Outlander', 0, ' Benign neoplm of prph nerves and autonm nervous sys of abd', 'outlander.jpg', 'Usado', 'marfil', 30000000.00, 0, '0000-00-00 00:00:00', '2023-10-19 22:28:24', NULL, 0, 2023),
(74, 'Toyota Corolla GR Sport', 0, ' Benign neoplm of prph nerves and autonm nervous sys of abd', 'corollagr.jpg', 'Usado', 'marfil', 29000000.00, 0, '0000-00-00 00:00:00', '2023-10-19 22:28:24', NULL, 0, 2023),
(75, 'Toyota Yaris XS CVT', 0, ' Benign neoplm of prph nerves and autonm nervous sys of abd', 'yaris.jpg', 'Usado', 'dark-red', 24000000.00, 0, '0000-00-00 00:00:00', '2023-10-19 22:28:24', NULL, 0, 2023),
(76, 'Toyota Corolla', 0, ' Benign neoplm of prph nerves and autonm nervous sys of abd', 'corolla.jpg', 'Usado', 'dark-grey', 26000000.00, 0, '0000-00-00 00:00:00', '2023-10-19 22:28:24', NULL, 0, 2023),
(77, 'Honda HR-V', 0, ' Benign neoplm of prph nerves and autonm nervous sys of abd', 'hrv.jpg', 'Usado', 'dark-grey', 27000000.00, 0, '0000-00-00 00:00:00', '2023-10-19 22:28:24', NULL, 0, 2023),
(78, 'Honda ZR-V', 0, ' Benign neoplm of prph nerves and autonm nervous sys of abd', 'zrv.jpg', 'Usado', 'dark-grey', 26000000.00, 0, '0000-00-00 00:00:00', '2023-10-19 22:28:24', NULL, 0, 2023),
(79, 'Renault Kardian', 0, ' Benign neoplm of prph nerves and autonm nervous sys of abd', 'cardian.jpg', '0km', 'dark-grey', 22000000.00, 0, '0000-00-00 00:00:00', '2023-10-19 22:28:24', NULL, 1, 2023),
(80, 'Peugeot 2008', 0, ' Benign neoplm of prph nerves and autonm nervous sys of abd', '2008.jpg', '0km', 'dark-grey', 27000000.00, 0, '0000-00-00 00:00:00', '2023-10-19 22:28:24', NULL, 1, 2023),
(81, 'Toyota EPU', 0, ' Benign neoplm of prph nerves and autonm nervous sys of abd', 'epu.jpg', '0km', 'dark-grey', 99000000.00, 0, '0000-00-00 00:00:00', '2023-10-19 22:28:24', NULL, 1, 2023),
(82, 'Ford Ranger V6 XLS AT10 4WD', 0, ' Benign neoplm of prph nerves and autonm nervous sys of abd', 'rangerv6.jpg', '0km', 'city-blue', 40000000.00, 0, '0000-00-00 00:00:00', '2023-10-19 22:28:24', NULL, 1, 2023),
(83, 'Vw Tarok', 0, ' Unil post-trauma osteoarth of first carpometacarp joint', 'tarok.jpg', '0km', 'city-blue', 99000000.00, 0, '0000-00-00 00:00:00', '2023-10-19 22:28:24', NULL, 1, 2023),
(84, 'Citroën C4 Cactus Noir', 0, ' Unil post-trauma osteoarth of first carpometacarp joint', 'c4cactusnoir.jpg', '0km', 'city-blue', 27000000.00, 0, '0000-00-00 00:00:00', '2023-10-19 22:28:24', NULL, 1, 2023),
(85, 'Jeep Compass T270 Limited AT6 4x2 ', 0, ' Unil post-trauma osteoarth of first carpometacarp joint', 'compasst270.jpg', '0km', 'black', 33000000.00, 0, '0000-00-00 00:00:00', '2023-10-19 22:28:24', NULL, 1, 2023),
(86, 'Jeep Grand Cherokee', 0, ' Unil post-trauma osteoarth of first carpometacarp joint', 'grandcherokee.jpg', '0km', 'black', 44000000.00, 0, '0000-00-00 00:00:00', '2023-10-19 22:28:24', NULL, 1, 2023),
(87, 'Ford Maverick Hybrid', 0, ' Unil post-trauma osteoarth of first carpometacarp joint', 'maverickh.jpg', '0km', 'op-silver', 28000000.00, 0, '0000-00-00 00:00:00', '2023-10-19 22:28:24', '0000-00-00 00:00:00', 1, 2023),
(88, 'Honda Civic Hybrid', 0, ' Unil post-trauma osteoarth of first carpometacarp joint', 'civich.jpg', 'Usado', 'op-silver', 28000000.00, 0, '0000-00-00 00:00:00', '2023-10-19 22:28:24', NULL, 0, 2023),
(89, 'Peugeot Landtrek', 0, ' Unil post-trauma osteoarth of first carpometacarp joint', 'Landtrek.jpg', 'Usado', 'op-silver', 48000000.00, 0, '0000-00-00 00:00:00', '2023-10-19 22:28:24', NULL, 0, 2023),
(90, 'Ford Ranger V6 Limited Plus', 0, ' Unil post-trauma osteoarth of first carpometacarp joint', 'rangerv6limited.jpg', 'Usado', 'op-silver', 48000000.00, 0, '0000-00-00 00:00:00', '2023-10-19 22:28:24', NULL, 0, 2023),
(91, 'Chevrolet Montana', 0, ' Unil post-trauma osteoarth of first carpometacarp joint', 'montana.jpg', 'Usado', 'dark-silver', 28000000.00, 0, '0000-00-00 00:00:00', '2023-10-19 22:28:24', NULL, 0, 2023),
(92, 'Citroen C3 Aircross', 0, ' Unil post-trauma osteoarth of first carpometacarp joint', 'c3air.jpg', 'Usado', 'pearl-whiter', 23000000.00, 0, '0000-00-00 00:00:00', '2023-10-19 22:28:24', NULL, 0, 2023),
(93, 'Chevrolet Spin Activ', 0, ' Unil post-trauma osteoarth of first carpometacarp joint', 'spin.jpg', 'Usado', 'pearl-whiter', 15000000.00, 0, '0000-00-00 00:00:00', '2023-10-19 22:28:24', NULL, 0, 2023),
(94, 'Range Rover Evoque HST', 0, ' Foster-Kennedy syndrome, unspecified eye', 'evoque.jpg', 'Usado', 'pearl-red', 65000000.00, 0, '0000-00-00 00:00:00', '2023-10-19 22:28:24', NULL, 0, 2023),
(95, 'Peugeot 208 Style', 0, ' Foster-Kennedy syndrome, unspecified eye', '208st.jpg', 'Usado', 'pearl-red', 21000000.00, 0, '0000-00-00 00:00:00', '2023-10-19 22:28:24', NULL, 0, 2023),
(96, 'Chery Tiggo 8 Pro', 0, ' Foster-Kennedy syndrome, unspecified eye', 'tiggo.jpg', 'Usado', 'pearl-red', 29000000.00, 0, '0000-00-00 00:00:00', '2023-10-19 22:28:24', NULL, 0, 2023),
(97, 'Ford Ranger Raptor', 0, ' Foster-Kennedy syndrome, unspecified eye', 'raptor.jpg', 'Usado', 'pearl-red', 49000000.00, 0, '0000-00-00 00:00:00', '2023-10-19 22:28:24', NULL, 0, 2023),
(98, 'Vw Vento GLi', 0, ' Foster-Kennedy syndrome, unspecified eye', 'vento.jpg', 'Usado', 'pearl-red', 39000000.00, 0, '0000-00-00 00:00:00', '2023-10-19 22:28:24', NULL, 0, 2023),
(99, 'Mercedes-Benz Clase T', 0, ' Foster-Kennedy syndrome, unspecified eye', 'claset.jpg', '0km', 'bright-yellow', 39000000.00, 0, '0000-00-00 00:00:00', '2023-10-19 22:28:24', NULL, 1, 2023),
(100, 'Fiat Pulse', 0, ' Foster-Kennedy syndrome, unspecified eye', 'pulse.jpg', '0km', 'bright-yellow', 19000000.00, 0, '0000-00-00 00:00:00', '2023-10-19 22:28:24', NULL, 1, 2023),
(101, 'Fiat Cronos CVT', 0, ' Foster-Kennedy syndrome, unspecified eye', 'fiatcronos.jpg', '0km', 'grey', 18000000.00, 0, '0000-00-00 00:00:00', '2023-10-19 22:28:24', '0000-00-00 00:00:00', 1, 2023),
(102, 'Chevrolet S10 Z71', 0, ' Foster-Kennedy syndrome, unspecified eye', 's10.jpg', '0km', 'grey', 38000000.00, 0, '0000-00-00 00:00:00', '2023-10-19 22:28:24', NULL, 1, 2023),
(103, 'Ford Ranger FX4', 0, ' Foster-Kennedy syndrome, unspecified eye', 'rangerf.jpg', '0km', 'grey', 48000000.00, 0, '0000-00-00 00:00:00', '2023-10-19 22:28:24', NULL, 1, 2023),
(104, 'Fiat Mobi (ESP)', 0, ' Foster-Kennedy syndrome, unspecified eye', 'mobiesp.jpg', '0km', 'grey', 12000000.00, 0, '0000-00-00 00:00:00', '2023-10-19 22:28:24', NULL, 1, 2023),
(105, 'Jeep Compass TD350 Trailhawk ', 0, ' Foster-Kennedy syndrome, unspecified eye', 'compasstd350.jpg', '0km', 'blue', 49000000.00, 0, '0000-00-00 00:00:00', '2023-10-19 22:28:24', NULL, 1, 2023),
(106, 'Nissan Frontier', 0, ' Foster-Kennedy syndrome, unspecified eye', 'frontier.jpg', '0km', 'silver', 49000000.00, 0, '0000-00-00 00:00:00', '2023-10-19 22:28:24', NULL, 1, 2023),
(107, 'Toyota Hilux GR-Sport III', 0, ' Foster-Kennedy syndrome, unspecified eye', 'hiluxsp.jpg', '0km', 'marfil-white', 49000000.00, 0, '0000-00-00 00:00:00', '2023-10-19 22:28:24', NULL, 1, 2023),
(108, 'Toyota Corolla Cross GR-Sport', 0, ' Foster-Kennedy syndrome, unspecified eye', 'corollacross.jpg', '0km', 'marfil-white', 49000000.00, 0, '0000-00-00 00:00:00', '2023-10-19 22:28:24', NULL, 1, 2023),
(109, 'Chevrolet Tracker RS', 0, ' Foster-Kennedy syndrome, unspecified eye', 'tracker.jpg', '0km', 'marfil-white', 24000000.00, 0, '0000-00-00 00:00:00', '2023-10-19 22:28:24', NULL, 1, 2023),
(110, 'Chevrolet Tracker', 0, ' Foster-Kennedy syndrome, unspecified eye', 'trackercomun.jpg', 'Usado', 'marfil-white', 21000000.00, 0, '0000-00-00 00:00:00', '2023-10-19 22:28:24', NULL, 0, 2023),
(111, 'Ford Territory', 0, ' Foster-Kennedy syndrome, unspecified eye', 'territory.jpg', 'Usado', 'marfil-blue', 51000000.00, 0, '0000-00-00 00:00:00', '2023-10-19 22:28:24', NULL, 0, 2023),
(112, 'Fiat Pulse Audace Turbo 200', 0, ' Foster-Kennedy syndrome, unspecified eye', 'pulse.jpg', 'Usado', 'grey', 16000000.00, 0, '0000-00-00 00:00:00', '2023-10-19 22:28:24', NULL, 0, 2023),
(113, 'Gola', 0, 'Clio mio', 'products-img-1700137986378.jpg', '0km', 'Rojo', 50000000.00, 0, '2023-11-16 12:33:06', '2023-11-16 12:33:06', NULL, 1, 2023);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `lastname` varchar(45) NOT NULL,
  `user` varchar(45) NOT NULL,
  `type` tinyint(4) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `img` varchar(100) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `cel` varchar(255) DEFAULT NULL,
  `reviews` varchar(512) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `lastname`, `user`, `type`, `email`, `password`, `img`, `createdAt`, `updatedAt`, `deletedAt`, `country`, `cel`, `reviews`) VALUES
(1, 'Guss', 'Twyford', 'gtwyford0', 0, 'gtwyford0@theatlantic.com', '123456', 'ImgProfile-1697757123851.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 'Russia', '132-766-8677', 'muy buena antencion, muy buena pagina'),
(2, 'Armstrong', 'Joule', 'ajoule1', 0, 'ajoule1@youku.com', '$2a$04$mTFjNKNrbF3MdFE9OOu0BukIwrMB8u1EZl7wZ6rnDJwIV7qQXqj9u', 'ImgProfile-1697758258875.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 'Indonesia', '337-699-6396', 'muy buena antencion, muy buena pagina'),
(3, 'Cassandre', 'Boutellier', 'cboutellier2', 0, 'cboutellier2@unblog.fr', '$2a$04$mj6YC8Grvj1yedZx/yHBBOJTwCyZnIZOD3K3rIGkP1/3mmaPtQfae', 'ImgProfile-1697756959547.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 'Indonesia', '736-567-3935', 'muy buena antencion, muy buena pagina'),
(4, 'Thomasin', 'Feares', 'tfeares3', 0, 'tfeares3@cyberchimps.com', '$2a$04$UbeRgSbct02m0xXEHp/baOSQ5s/oc59grsN6F3kkLghayi4g01OmG', 'ImgProfile-1697757511326.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 'Indonesia', '874-391-3697', 'muy buena antencion, muy buena pagina'),
(5, 'Jenelle', 'Norrey', 'jnorrey4', 0, 'jnorrey4@live.com', '$2a$04$21LJfSbfsnGjNEN89bVlT.FTvVd1J3bfONPwG8M4HtOEJ.TDgMPS.', 'ImgProfile-1699969511098.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 'Myanmar', '574-428-0265', 'muy buena antencion, muy buena pagina'),
(6, 'Jabez', 'Ingarfill', 'jingarfill5', 0, 'jingarfill5@mtv.com', '$2a$04$T/AWX7763ZQXIt.Nqs4q4Oxa1ZonbN7FT7kheOvoX4QADdHDzCCBy', 'ImgProfile-1697758258876.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 'Poland', '289-369-7692', NULL),
(7, 'Karolina', 'Dossettor', 'kdossettor6', 0, 'kdossettor6@sun.com', '$2a$04$i/EsH06eLaPoz05kNFece.ueTwYNYUrnECGmn/chvboQttHhxFal.', 'ImgProfile-1699969511099.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 'Costa Rica', '916-519-8692', NULL),
(8, 'Maiga', 'Hounsome', 'mhounsome7', 0, 'mhounsome7@github.com', '$2a$04$RZc75HrF1FOqjFNcf3IpD.VIJ1TlPndJ3jUpDLZj/sCWemrEIF/nS', 'ImgProfile-1699969511000.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 'Philippines', '106-973-0212', 'muy buena antencion, muy buena pagina'),
(9, 'Brocky', 'Hartill', 'bhartill8', 0, 'bhartill8@360.cn', '$2a$04$Vd7ArzmOnolRT81MEdTzJu39X60dT.IoGK26s1h7kQhf42ehngHCK', 'ImgProfile-1699969511001.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 'Philippines', '929-272-0329', NULL),
(10, 'Arel', 'Gery', 'agery9', 0, 'agery9@nasa.gov', '$2a$04$BRHa0lh5s8kXVfRwRYcBAeyyqaHiIBNyx3nFok/QNUsHySvwnbVn.', 'ImgProfile-1699969511002.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 'Afghanistan', '135-816-9298', 'muy buena antencion, muy buena pagina'),
(11, 'Katheryn', 'Joinsey', 'kjoinseya', 0, 'kjoinseya@cyberchimps.com', '$2a$04$Q8OR.9SDkqog14lSH97s0eD11ODKolcUHzED0WSiis85IdnYxMl/O', 'ImgProfile-1699969511003.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 'Indonesia', '345-873-1554', 'muy buena antencion, muy buena pagina'),
(12, 'Leslie', 'Wallbanks', 'lwallbanksb', 0, 'lwallbanksb@163.com', '$2a$04$DLKvj0jS2L/5YSqlkwLiJO8sy.H3blIxZP/UxCYetpf3aFE1COFji', 'ImgProfile-1699969511004.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 'Philippines', '125-763-9734', NULL),
(13, 'Bobby', 'Belchambers', 'bbelchambersc', 0, 'bbelchambersc@hc360.com', '$2a$04$WN9ufnrFk8.Q3AZdxSvYRe1laHwmF3BipR1DJCG8HZQq4gRfpJXXi', 'ImgProfile-1699969511005.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 'Pakistan', '245-956-1706', NULL),
(14, 'Ario', 'Mycroft', 'amycroftd', 0, 'amycroftd@google.com.hk', '$2a$04$PWy1VccBP7UKpWVzM8zpfe/TtMRZvwNTo6.wPQY1arU1PhBweKdZq', 'ImgProfile-1699969511006.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 'Russia', '560-952-2457', NULL),
(15, 'Maryl', 'Spering', 'msperinge', 0, 'msperinge@mapy.cz', '$2a$04$RdCdnk7JIt1.tC5yCHY/Auo.ilQ2HFe0Vdf2PH2DfzWaY45raKDo2', 'ImgProfile-1699969511007.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 'Lebanon', '469-582-9919', NULL),
(16, 'Vic', 'Eustanch', 'veustanchf', 0, 'veustanchf@craigslist.org', '$2a$04$hp9BnUUCbqY0EIePiKjDE..MyY4NCudUmEeoz88Hloq1mB.g8Z26a', 'ImgProfile-1699969511008.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 'Brazil', '971-832-0731', 'muy buena antencion, muy buena pagina'),
(17, 'Diann', 'Durdan', 'ddurdang', 0, 'ddurdang@cornell.edu', '$2a$04$O7x6uAVYYUQ5DwP13JvpIOYWAhM37I7B3gNkjLr2hkskib5Ac2EJu', 'ImgProfile-1699969511009.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 'China', '327-167-3871', NULL),
(18, 'Gennifer', 'Sunnucks', 'gsunnucksh', 0, 'gsunnucksh@ted.com', '$2a$04$7mqH.KzXd4eCZogNqND2i.ZeTGQG2kfzDJRAcC5TMN5TVq8x7/Nb2', 'ImgProfile-1699969511010.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 'Latvia', '618-336-4505', NULL),
(19, 'Siobhan', 'Antrack', 'santracki', 0, 'santracki@msu.edu', '$2a$04$zmd6H195Pfaedc4ziQrtHOATF7dqOA0oRDlPHfcbV0xWBP0X4xmwq', 'ImgProfile-1699969511011.png', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 'Bahamas', '712-522-7913', 'muy buena antencion, muy buena pagina'),
(20, 'mateo', 'nerli', 'mnerli', 1, 'mateo@gmail.com', '$2a$10$9XQcLzHGb373QVWNTqXcq.tf9EzEbcpOq6cy8LIVIw6Bo.eAEcafm', 'ImgProfile-1696860162786.jpg', '2023-10-09 14:02:43', '2023-11-18 14:38:02', NULL, 'Surinam', '33654564', 'muy buena antencion, muy buena pagina'),
(1007, 'ghodfgodf', 'sdfs', 'sadfa', 0, 'youou@gmail.com', '$2a$10$i6h.Vr3ZDWbnjU7RDOxKKedGSp1MQMdEkHKikfahin8OXifkXyE6K', 'ImgProfile-1697757511326.jpg', '2023-10-19 23:30:58', '2023-11-19 21:01:53', NULL, 'Argentina', '5732453453', 'Genial'),
(1008, 'franco', 'nerli', 'franco', 0, 'franco@gmail.com', '$2a$10$cUYZJ1ZMBiSMsSWRbhtvJONTdtbQK1rtDeLO6nSQ3whJ0SkxVSfUm', 'ImgProfile-1699969511097.jpg', '2023-11-14 13:45:11', '2023-11-19 20:59:47', NULL, 'Argentina', '3364512222', 'hola');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `orderitems`
--
ALTER TABLE `orderitems`
  ADD PRIMARY KEY (`id`),
  ADD KEY `orderitems_ibfk_1` (`orderId`),
  ADD KEY `orderitems_ibfk_2` (`productId`);

--
-- Indices de la tabla `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `orders_ibfk_1` (`userId`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `orderitems`
--
ALTER TABLE `orderitems`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=114;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1009;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `orderitems`
--
ALTER TABLE `orderitems`
  ADD CONSTRAINT `orderitems_ibfk_1` FOREIGN KEY (`orderId`) REFERENCES `orders` (`id`),
  ADD CONSTRAINT `orderitems_ibfk_2` FOREIGN KEY (`productId`) REFERENCES `products` (`id`);

--
-- Filtros para la tabla `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
