create type prod_status as enum ('complete', 'active');

CREATE TABLE IF NOT EXISTS orders
(
    id       SERIAL PRIMARY KEY,
    quantity int                          not null,
    user_id  bigint references users (id) not null,
    status   prod_status                  not null
);