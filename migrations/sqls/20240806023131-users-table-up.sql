CREATE TABLE IF NOT EXISTS users (
    id serial PRIMARY KEY,
    firstName VARCHAR(70),
    lastName VARCHAR(70),
    password VARCHAR(100)
);