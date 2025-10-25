SELECT * FROM crud_express.cliente;

CREATE TABLE `crud_express`.`cliente` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `telefono` VARCHAR(45) NULL,
    `nombre` VARCHAR(45) NULL,
    `direccion` VARCHAR(45) NULL,
    `nit` VARCHAR(45) NULL,
    `precio` VARCHAR(45) NULL,
    `estado` VARCHAR(45) NULL,
    `fecha` DATE NULL,
    `pendiente` VARCHAR(45) NULL,
    PRIMARY KEY (`id`));
INSERT INTO `crud_express`.`cliente` (`telefono`, `nombre`, `direccion`, `nit`, `precio`, `estado`, `fecha`, `pendiente`)
VALUES ('123456789', 'Juan Perez', 'Calle Falsa 123', '1234567-8', '100.00', 'Activo', '2024-01-01', '350');