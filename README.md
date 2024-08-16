# Storefront Backend Project

## Prerequisites
- Node.js
- PostgreSQL

## Steps for Installation & Running

### 1. Clone the repository
```bash
  git clone https://github.com/NTRCodes/nd0067-c2-creating-an-api-with-postgresql-and-express-project-starter.git
  cd nd0067-c2-creating-an-api-with-postgresql-and-express-project-starter
```
### 2. Install the dependencies 
```bash
  npm install
```

### 3. Setup PostgreSQL

- Make sure PostgreSQL is installed and running on your local machine.
-- If you decide to run this in a docker image, you may require more configuration.
- Create a new PostgreSQL database
```bash
  psql -U postgres

  CREATE DATABASE store;
```
- After creating the database, use `db-migrate` to create your `migration files` and `sql` files
  ```bash
  db-migrate create create-table-name --sql-file

- There are a few tables you need to create:
  - users
  - products
  - orders
  - order_products


- After creating all of your tables run the following command:
```bash
  db-migrate up
```

### 4. Create a `.env` file in the root directory of the project and add the following:
  ```bash
  SERVER_PORT=3000
  DB_PORT=5432
  POSTGRES_HOST=0.0.0.0
  POSTGRES_USER=postgres
  POSTGRES_PASSWORD=done
  POSTGRES_DB=store
  POSTGRES_TEST_DB=store_test
  BCRYPT_PASSWORD=jamal-is-dope
  SALT_ROUNDS=10
  ENV=dev
  TOKEN_SECRET=udacity!
```
### 5. Start the development server
```bash
  npm run watch
```

### 6. Run tests
```bash
  npm test
```
