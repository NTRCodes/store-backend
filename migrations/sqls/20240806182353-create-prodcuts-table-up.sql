CREATE TABLE if not exists products
(
    id       serial primary key,
    name     varchar(50)  not null,
    price    decimal(75) not null,
    category varchar(100)
);