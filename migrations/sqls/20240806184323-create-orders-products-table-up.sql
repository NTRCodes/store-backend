CREATE TABLE IF NOT EXISTS order_products
(
    id SERIAL PRIMARY KEY,
    name varchar(70) not null,
    price float not null,
    category text
);
