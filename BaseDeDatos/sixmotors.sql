-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3307
-- Tiempo de generación: 18-10-2023 a las 03:10:13
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
(11, 5, 6, 'Amortiguador', 73.00, 1, '2023-10-15 20:21:50', '2023-10-15 20:21:50', NULL);

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
(5, 20, 112.00, 'Débito', 'Andreani', '2023-10-15 20:21:50', '2023-10-15 20:21:50', NULL);

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
  `category` varchar(45) NOT NULL,
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
(1, 'Peugeot 208', 0, 'Nondisp fx of unsp ulna styloid pro, 7thH', 'peugot-208.jpg', '', 'Khaki', 73.00, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 0, 1998),
(2, 'Toyota Hilux', 0, 'Lac w/o fb of unsp frnt wl of thrx w/o penet thor cav, subs', 'Toyota Hilux.jpg', '', 'Mauv', 29.00, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 1, 2006),
(3, 'Alternador', 1, 'Unsp fx r patella, subs for opn fx type 3A/B/C w malunion', 'alternador.jpg', '', 'Mauv', 10.00, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 0, 2000),
(4, 'Volkswagen Amarok', 0, 'Other alopecia areata', 'Volkswagen Amarok.jpg', '', 'Goldenrod', 79.00, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 1, 2012),
(5, 'Ford Ranger', 0, 'Cataract extraction status, right eye', 'Ford Ranger.jpg', '', 'Puce', 37.00, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 1, 1995),
(6, 'Amortiguador', 1, 'Stress fracture, right finger(s), init encntr for fracture', 'Amortiguadores-autos.jpg', '', 'Aquamarine', 73.00, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 1, 1993),
(7, 'espejos-laterales', 1, 'Benign neoplm of prph nerves and autonm nervous sys of abd', 'espejos-laterales-ap.jpg', '', 'Purple', 28.00, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 0, 1993),
(8, 'Renault Sandero', 0, 'Lacerat unsp blood vessel at shldr/up arm, right arm, init', 'Renault Sandero.jpg', '', 'Indigo', 24.00, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 0, 2011),
(9, 'Renault Alaskan', 0, 'Foster-Kennedy syndrome, unspecified eye', 'Renault Alaskan.jpg', '', 'Teal', 50.00, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 0, 2012),
(10, 'Fiat 147', 0, 'Associated transverse-posterior fracture of acetabulum', 'Fiat-147.jpg', '', 'Orange', 23.00, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 0, 1994),
(11, 'Bujia', 1, 'Inj muscle, fascia and tendon of lower back, subs encntr', 'bujia.jpeg', '', 'Mauv', 88.00, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 0, 2000),
(12, 'piston', 1, 'Lacerat extn musc/fasc/tend l little fngr at forarm lv, init', 'piston.jpg', '', 'Violet', 1.00, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 1, 2008),
(13, 'rueda', 1, 'Contus/lac/hem crblm w LOC of unsp duration', 'rueda-camion.webp', '', 'Green', 94.00, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 1, 2005),
(14, 'Fiat Cronos', 0, 'Unil post-trauma osteoarth of first carpometacarp joint', 'Fiat Cronos.jpg', '', 'Mauv', 69.00, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 1, 1995),
(21, 'aaaaa', 1, 'dsadsad', 'products-img-1696861806939.jpg', '', 'gris', 12332.00, 0, '2023-10-09 14:30:06', '2023-10-09 14:30:06', NULL, 1, 2022),
(22, 'aaaaa', 1, 'Osos', 'products-img-1697122027020.jpg', '', 'rojo', 4343.00, 0, '2023-10-12 14:47:07', '2023-10-12 14:47:07', NULL, 1, 2000);

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
(1, 'Guss', 'Twyford', 'gtwyford0', 0, 'gtwyford0@theatlantic.com', '123456', 'ImgProfile-1696860162786.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 'Russia', '132-766-8677', 'muy buena antencion, muy buena pagina'),
(2, 'Armstrong', 'Joule', 'ajoule1', 0, 'ajoule1@youku.com', '$2a$04$mTFjNKNrbF3MdFE9OOu0BukIwrMB8u1EZl7wZ6rnDJwIV7qQXqj9u', 'ImgProfile-1696860162786.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 'Indonesia', '337-699-6396', 'muy buena antencion, muy buena pagina'),
(3, 'Cassandre', 'Boutellier', 'cboutellier2', 0, 'cboutellier2@unblog.fr', '$2a$04$mj6YC8Grvj1yedZx/yHBBOJTwCyZnIZOD3K3rIGkP1/3mmaPtQfae', 'ImgProfile-1696860162786.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 'Indonesia', '736-567-3935', 'muy buena antencion, muy buena pagina'),
(4, 'Thomasin', 'Feares', 'tfeares3', 0, 'tfeares3@cyberchimps.com', '$2a$04$UbeRgSbct02m0xXEHp/baOSQ5s/oc59grsN6F3kkLghayi4g01OmG', 'ImgProfile-1696860162786.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 'Indonesia', '874-391-3697', 'muy buena antencion, muy buena pagina'),
(5, 'Jenelle', 'Norrey', 'jnorrey4', 0, 'jnorrey4@live.com', '$2a$04$21LJfSbfsnGjNEN89bVlT.FTvVd1J3bfONPwG8M4HtOEJ.TDgMPS.', 'ImgProfile-1696860162786.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 'Myanmar', '574-428-0265', 'muy buena antencion, muy buena pagina'),
(6, 'Jabez', 'Ingarfill', 'jingarfill5', 0, 'jingarfill5@mtv.com', '$2a$04$T/AWX7763ZQXIt.Nqs4q4Oxa1ZonbN7FT7kheOvoX4QADdHDzCCBy', 'ImgProfile-1696860162786.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 'Poland', '289-369-7692', NULL),
(7, 'Karolina', 'Dossettor', 'kdossettor6', 0, 'kdossettor6@sun.com', '$2a$04$i/EsH06eLaPoz05kNFece.ueTwYNYUrnECGmn/chvboQttHhxFal.', 'ImgProfile-1696860162786.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 'Costa Rica', '916-519-8692', NULL),
(8, 'Maiga', 'Hounsome', 'mhounsome7', 0, 'mhounsome7@github.com', '$2a$04$RZc75HrF1FOqjFNcf3IpD.VIJ1TlPndJ3jUpDLZj/sCWemrEIF/nS', 'ImgProfile-1696860162786.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 'Philippines', '106-973-0212', 'muy buena antencion, muy buena pagina'),
(9, 'Brocky', 'Hartill', 'bhartill8', 0, 'bhartill8@360.cn', '$2a$04$Vd7ArzmOnolRT81MEdTzJu39X60dT.IoGK26s1h7kQhf42ehngHCK', 'ImgProfile-1696860162786.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 'Philippines', '929-272-0329', NULL),
(10, 'Arel', 'Gery', 'agery9', 0, 'agery9@nasa.gov', '$2a$04$BRHa0lh5s8kXVfRwRYcBAeyyqaHiIBNyx3nFok/QNUsHySvwnbVn.', 'ImgProfile-1696860162786.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 'Afghanistan', '135-816-9298', 'muy buena antencion, muy buena pagina'),
(11, 'Katheryn', 'Joinsey', 'kjoinseya', 0, 'kjoinseya@cyberchimps.com', '$2a$04$Q8OR.9SDkqog14lSH97s0eD11ODKolcUHzED0WSiis85IdnYxMl/O', 'ImgProfile-1696860162786.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 'Indonesia', '345-873-1554', 'muy buena antencion, muy buena pagina'),
(12, 'Leslie', 'Wallbanks', 'lwallbanksb', 0, 'lwallbanksb@163.com', '$2a$04$DLKvj0jS2L/5YSqlkwLiJO8sy.H3blIxZP/UxCYetpf3aFE1COFji', 'ImgProfile-1696860162786.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 'Philippines', '125-763-9734', NULL),
(13, 'Bobby', 'Belchambers', 'bbelchambersc', 0, 'bbelchambersc@hc360.com', '$2a$04$WN9ufnrFk8.Q3AZdxSvYRe1laHwmF3BipR1DJCG8HZQq4gRfpJXXi', 'ImgProfile-1696860162786.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 'Pakistan', '245-956-1706', NULL),
(14, 'Ario', 'Mycroft', 'amycroftd', 0, 'amycroftd@google.com.hk', '$2a$04$PWy1VccBP7UKpWVzM8zpfe/TtMRZvwNTo6.wPQY1arU1PhBweKdZq', 'ImgProfile-1696860162786.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 'Russia', '560-952-2457', NULL),
(15, 'Maryl', 'Spering', 'msperinge', 0, 'msperinge@mapy.cz', '$2a$04$RdCdnk7JIt1.tC5yCHY/Auo.ilQ2HFe0Vdf2PH2DfzWaY45raKDo2', 'ImgProfile-1696860162786.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 'Lebanon', '469-582-9919', NULL),
(16, 'Vic', 'Eustanch', 'veustanchf', 0, 'veustanchf@craigslist.org', '$2a$04$hp9BnUUCbqY0EIePiKjDE..MyY4NCudUmEeoz88Hloq1mB.g8Z26a', 'ImgProfile-1696860162786.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 'Brazil', '971-832-0731', 'muy buena antencion, muy buena pagina'),
(17, 'Diann', 'Durdan', 'ddurdang', 0, 'ddurdang@cornell.edu', '$2a$04$O7x6uAVYYUQ5DwP13JvpIOYWAhM37I7B3gNkjLr2hkskib5Ac2EJu', 'ImgProfile-1696860162786.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 'China', '327-167-3871', NULL),
(18, 'Gennifer', 'Sunnucks', 'gsunnucksh', 0, 'gsunnucksh@ted.com', '$2a$04$7mqH.KzXd4eCZogNqND2i.ZeTGQG2kfzDJRAcC5TMN5TVq8x7/Nb2', 'ImgProfile-1696860162786.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 'Latvia', '618-336-4505', NULL),
(19, 'Siobhan', 'Antrack', 'santracki', 0, 'santracki@msu.edu', '$2a$04$zmd6H195Pfaedc4ziQrtHOATF7dqOA0oRDlPHfcbV0xWBP0X4xmwq', 'ImgProfile-1696860162786.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 'Bahamas', '712-522-7913', 'muy buena antencion, muy buena pagina'),
(20, 'mateo', 'nerli', 'mnerli', 1, 'mateo@gmail.com', '$2a$10$9XQcLzHGb373QVWNTqXcq.tf9EzEbcpOq6cy8LIVIw6Bo.eAEcafm', 'ImgProfile-1696860162786.jpg', '2023-10-09 14:02:43', '2023-10-09 14:02:43', NULL, 'Argentina', '33654564', 'muy buena antencion, muy buena pagina');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1004;

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
