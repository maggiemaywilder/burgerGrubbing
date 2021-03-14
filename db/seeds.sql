USE burgers_db;

-- insert queries to populate burgers table with at least 3 entries --
-- not putting the devoured column should populate to false throughout, correct? --
INSERT INTO burgers (burger_name)
VALUES ('Mushroom Swiss Burger'), ('Turkey Burger'), ('Double Bacon Cheeseburger');