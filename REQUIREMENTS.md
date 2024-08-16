# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

## API Endpoints
#### Products
- Index 
- Show
- Create [token required]
- [OPTIONAL] Top 5 most popular products 
- [OPTIONAL] Products by category (args: product category)

#### Users
- Index [token required]
- Show [token required]
- Create N[token required]

#### Orders
- Current Order by user (args: user id)[token required]
- [OPTIONAL] Completed Orders by user (args: user id)[token required]

## Data Shapes
#### Product
- id (serial bigint)
- name (varchar)
- price (decimal)
- [OPTIONAL] category (text)

#### Users
- id (serial bigint)
- firstname (varchar)
- lastname (varchar)
- password (varchar - hashed before being in the database)

#### Orders - many to many relationship with products and orders tables
- id (serial bigint)
- id of each product in the order ((bigint) foreign key from products table)
- quantity of each product in the order (integer)
- user_id ((bigint)foreign key from the user table user_id)
- status of order (active or complete) - (varchar)

