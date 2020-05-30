DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
	id INTEGER AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(30),
    devoured BOOLEAN DEFAULT false,
    
    PRIMARY KEY(id)
);

SELECT * FROM burgers;
DROP TABLE burgers;
-- INSERT INTO burgers(burger_name, devoured)
-- VALUES ("Mushroom Burger", false);

-- INSERT INTO burgers(burger_name, devoured)
-- VALUES ("Bacon Burger", false);

-- INSERT INTO burgers(burger_name, devoured)
-- VALUES ("Cheese Burger", false);