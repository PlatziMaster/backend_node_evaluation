CREATE SCHEMA IF NOT EXISTS `platzi` DEFAULT CHARACTER SET utf8 ;
USE `platzi` ;


CREATE TABLE IF NOT EXISTS `platzi`.`categorys` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(85) NULL,
  `img` VARCHAR(200) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;



CREATE TABLE IF NOT EXISTS `platzi`.`products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(85) NULL,
  `price` VARCHAR(20) NULL,
  `description` TEXT NULL,
  `img` VARCHAR(200) NULL,
  `categorys_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_products_categorys_idx` (`categorys_id` ASC) ,
  CONSTRAINT `fk_products_categorys`
    FOREIGN KEY (`categorys_id`)
    REFERENCES `platzi`.`categorys` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
