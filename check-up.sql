-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Май 04 2022 г., 20:34
-- Версия сервера: 8.0.24
-- Версия PHP: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `check-up`
--

-- --------------------------------------------------------

--
-- Структура таблицы `check-up`
--

CREATE TABLE `check-up` (
  `id` int NOT NULL,
  `gender` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `price` bigint DEFAULT NULL,
  `sale` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `check-up`
--

INSERT INTO `check-up` (`id`, `gender`, `price`, `sale`) VALUES
(1, 'ДЛЯ МУЖЧИН', 3500, 2800),
(2, 'для женщин', 3300, 2500),
(3, 'ДЛЯ ДЕТЕЙ\r\n', 3000, 2000),
(4, 'ДЛЯ КОШЕК', 2500, 1750);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `check-up`
--
ALTER TABLE `check-up`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `check-up`
--
ALTER TABLE `check-up`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
