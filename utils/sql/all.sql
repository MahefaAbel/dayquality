-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le :  lun. 27 avr. 2020 à 09:49
-- Version du serveur :  8.0.18
-- Version de PHP :  7.3.13-1+0~20191218.50+debian10~1.gbp23c2da

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

--
-- Base de données :  `dayquality.mahefa.company`
--

-- --------------------------------------------------------

--
-- Structure de la table `andro`
--

CREATE TABLE `andro` (
  `id` int(11) NOT NULL,
  `name` varchar(128) NOT NULL,
  `description` text,
  `date_add` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `date_update` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `memo_andro`
--

CREATE TABLE `memo_andro` (
  `id` int(11) NOT NULL,
  `id_andro` int(11) NOT NULL,
  `description` varchar(128) NOT NULL,
  `date_add` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `date_update` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `andro`
--
ALTER TABLE `andro`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `memo_andro`
--
ALTER TABLE `memo_andro`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `andro`
--
ALTER TABLE `andro`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `memo_andro`
--
ALTER TABLE `memo_andro`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;
