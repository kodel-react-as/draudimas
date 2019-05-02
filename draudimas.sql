-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema draudimas
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema draudimas
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `draudimas` DEFAULT CHARACTER SET utf8 ;
USE `draudimas` ;

-- -----------------------------------------------------
-- Table `draudimas`.`users`  pin - personal identification number
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `draudimas`.`users` (
  `userId` BIGINT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(60) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `FirstName` VARCHAR(45) NOT NULL,
  `LastName` VARCHAR(45) NOT NULL,
  `pin` VARCHAR(45) NOT NULL,
  `country` VARCHAR(45) NOT NULL,
  `city` VARCHAR(45) NOT NULL,
  `address` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`userId`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `draudimas`.`policyType`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `draudimas`.`policyType` (
  `typeId` INT NOT NULL AUTO_INCREMENT,
  `policyname` VARCHAR(45) NOT NULL,
  `policyprice` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`typeId`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `draudimas`.`policies`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `draudimas`.`policies` (
  `policiesId` INT NOT NULL AUTO_INCREMENT,
  `userId` INT NOT NULL,
  `typeId` INT NOT NULL,
  `startdate` DATE NOT NULL,
  `enddate` DATE NOT NULL,
  `other` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`policiesId`, `userId`, `typeId`),
  CONSTRAINT `fk_policies_customers`
    FOREIGN KEY (`userId`)
    REFERENCES `draudimas`.`users` (`userId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_policies_policyType1`
    FOREIGN KEY (`typeId`)
    REFERENCES `draudimas`.`policyType` (`typeId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `draudimas`.`question`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `draudimas`.`question` (
  `questionId` INT NOT NULL,
  `userId` INT NOT NULL,
  `questionText` VARCHAR(45) NOT NULL,
  `questionDate` DATE NOT NULL,
  PRIMARY KEY (`questionId`, `userId`),
  CONSTRAINT `fk_question_customers1`
    FOREIGN KEY (`userId`)
    REFERENCES `draudimas`.`users` (`userId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `draudimas`.`claims`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `draudimas`.`claims` (
  `claimId` INT NOT NULL,
  `policiesId` INT NOT NULL,
  `customerId` INT NOT NULL,
  `typeId` INT NOT NULL,
  `dateClaimMade` DATE NOT NULL,
  `dateClaimSettled` DATE NOT NULL,
  `amountClaimed` DECIMAL NOT NULL,
  `amountSettled` DECIMAL NOT NULL,
  PRIMARY KEY (`claimId`, `policiesId`, `customerId`, `typeId`),
  CONSTRAINT `fk_claims_policies1`
    FOREIGN KEY (`policiesId` , `customerId` , `typeId`)
    REFERENCES `draudimas`.`policies` (`policiesId` , `userId` , `typeId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


INSERT INTO USERS(userid,username,password,FirstName,LastName,pin,country,city,address)
VALUES (1,'vartotojas','$2a$10$..UgxP7qpvJ640nL4a9zxOHNTuENIOGVgVSe5P8.5XOoPtkZ2kLB6','Vardenis','Pavardenis','39001020123','Lithuania','Vilnius','Totoriu12'),
		(2,'useris','123456','Petras','Petrauskas','39002030234','Lithuania','Kaunas','Nemuno15');


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
