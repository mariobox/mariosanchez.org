---
title: "Store Sales and Inventory System with SQL"
description: 
date: 2025-01-06
---

**Made with**:  <i class="fas fa-database"></i> SQLite

Video overview: (https://youtu.be/0tICUfe6Nbg)

#### Scope

The database for the Soccer Shirt Store includes all entities necessary to facilitate the process of tracking customer orders and inventory available for a chain of sports retail stores that for now only sells soccer shirts. It also enables the generation of useful reports to run the business, as detailed in the `queries.sql` file. As such, included in the database's scope is:

* Stores, including basic identifying information
* Salespersons, including basic identifying information
* Customers, including basic identifying information
* Shirts, including basic information
* Orders, including a field for **type** which enables a return

As a result of many-to-many relationships between the Stores and Shirts, and Orders and Shirts entities, the following junction tables will be created:
* Carried, which details the inventory of shirts in each store
* Ordered, which details the shirts ordered in each order

#### Functional Requirements

This database will support:

* CRUD operations for orders
* Automatic update of inventory available after an order is completed
* Tracking lifetime purchases by customers and sales by salespeople

Note that in this iteration, the system will not support automatic replenishment of shirts once inventory reaches 0.

#### Representation

Entities are captured in SQLite tables with the following schema.

##### Entities

The database includes the following entities:

##### Stores

The `stores` table includes:

* `id`, which specifies the unique ID for the store as an `INTEGER`. This column thus has the `PRIMARY KEY` constraint applied.
* `location`, which specifies the city or region where the store is located as `TEXT`, given `TEXT` is appropriate for city fields.

##### Shirts

The `shirts` table includes:

* `id`, which specifies the unique ID for the shirt as an `INTEGER`. This column thus has the `PRIMARY KEY` constraint applied.
* `team`, which specifies the shirt's team as `TEXT`.
* `size`, which specifies the shirt size (S, M or L) as `TEXT`.
* `price`, which specifies the shirt price as `NUMERIC`.

All columns in the `shirts` table are required and hence should have the `NOT NULL` constraint applied. No other constraints are necessary.

##### Customers

The `customer` table includes:

* `id`, which specifies the unique ID for the customer as an `INTEGER`. This column thus has the `PRIMARY KEY` constraint applied.
* `first_name`, which specifies the customer's first name as `TEXT`, given `TEXT` is appropriate for name fields.
* `last_name`, which specifies the customer's last name as `TEXT`, given `TEXT` is appropriate for name fields.

All columns that are not primary keys or foreign keys in the `customers` table are required, and hence should have the `NOT NULL` constraint applied. No other constraints are necessary.

##### Salespersons

The `salespersons` table includes:

* `id`, which specifies the unique ID for the salesperson as an `INTEGER`. This column thus has the `PRIMARY KEY` constraint applied.
* `first_name`, which specifies the salesperson's first name as `TEXT`, given `TEXT` is appropriate for name fields.
* `last_name`, which specifies the salesperson's last name as `TEXT`, given `TEXT` is appropriate for name fields.
* `store_id`, which specifies the store the salesperson works at, as `INTEGER`.

All columns that are not primary keys or foreign keys in the `salespersons` table are required, and hence should have the `NOT NULL` constraint applied. This column `store_id` has the `FOREIGN KEY` constraint applied, referencing the `id` column in the `stores` table, which reflects and ensures that each salesperson works in a particular store.

##### Orders

The `orders` table includes:

* `id`, which specifies the unique ID for the order as an `INTEGER`. This column thus has the `PRIMARY KEY` constraint applied.
* `customer_id`, which specifies the ID of the customer who placed the order as an `INTEGER`. This column thus has the `FOREIGN KEY` constraint applied, referencing the `id` column in the `customers` table, which ensures that each order be referenced back to a customer.
* `salesperson_id`, which specifies the ID of the salesperson who sold the order as an `INTEGER`. This column thus has the `FOREIGN KEY` constraint applied, referencing the `id` column in the `salespersons` table, which ensures that each order be referenced back to a salesperson.
* `store_id`, which specifies the ID of the store where the shirt was sold, as an `INTEGER`. This column thus has the `FOREIGN KEY` constraint applied, referencing the `id` column in the `stores` table, which ensures that each order be referenced back to a store.
* `type`, which specifies the type of order (P or R, for "purchase" or "return") as `TEXT`.
* `date`, which specifies the date of the order, as `NUMERIC`. If no value is provided, it will default to the CURRENT_TIMESTAMP.

All columns that are not primary keys or foreign keys in the `orders` table are required and hence have the `NOT NULL` constraint applied.

##### Ordered

The `ordered` table includes:

* `order_id`, which specifies the ID of the order where the shirt was included, as an `INTEGER`. This column thus has the `FOREIGN KEY` constraint applied, referencing the `id` column in the `orders` table.
* `shirt_id`, which specifies the ID of a shirt in an order, as an `INTEGER`. This column thus has the `FOREIGN KEY` constraint applied, referencing the `id` column in the `shirts` table.
* `quantity`, which specifies quantity of shirts of each kind ordered, as an `INTEGER`. Since an order can be created for a purchase or for a return, `quantity` accepts negative values.

The `PRIMARY KEY` will be the combination of (`order_id`, `shirt_id`).


##### Carried

The `carried` table includes:

* `store_id`, which specifies the ID of the store where the order originates, as an `INTEGER`. This column thus has the `FOREIGN KEY` constraint applied, referencing the `id` column in the `stores` table.
* `shirt_id`, which specifies the ID of a shirt carried in the store, as an `INTEGER`. This column thus has the `FOREIGN KEY` constraint applied, referencing the `id` column in the `shirts` table.
* `quantity`, which specifies quantity of shirts of each kind ordered, as an `INTEGER`. Since an order can be created for a purchase or for a return, `quantity` accepts negative values.

The `PRIMARY KEY` will be the combination of (`store_id`, `shirt_id`).


#### Relationships

The below entity relationship diagram describes the relationships among the entities in the database.

![ER Diagram](/img/er.jpg)


As detailed by the diagram:

* One store may employ many salespersons, but a salesperson can only work with one store. A store may have a minimum of 0 salespersons (like when everybody quits) but a salesperson needs to be assigned to one store in order to be considered a salesperson.
* One store can carry many shirts (a minimum of 0 if they are out of stock) and any shirt can be sold in many stores (minimum of 1 to be set up in the system).
* One order can include many shirts (with a minimum of 1, otherwise there won't be an order) and each shirt can be purchased in many different orders (with a minimum of 0 if nobody orders that shirt).
* One customer can place many orders (minimum of 1 to be considered a customer) but any order can only be associated to one customer (minimum of 1, otherwise there won't be an order).
* One salesperson can sell many orders (minimum of 0 if it is a new salesperson or one that hasn't sold anything yet) but an order can be sold by only one salesperson (minimum of 1, otherwise there won't be an order).
* A shirt can be sold in many stores (minimum of 1 to be set up in the system), and one store can carry many shirts (a minimum of 0 if they are out of stock).
* A shirt can be purchased in many different orders (with a minimum of 0 if nobody orders that shirt), and one order can include many shirts (with a minimum of 1, otherwise there won't be an order).

#### Optimizations

Per the typical queries in `queries.sql`, it is common for users of the database to want to obtain reports based on a certain shirt being ordered. For that reason, indexes are created on the `order_id` and `shirt_id` on the `ordered` table so that those reports are obtained faster.

Similarly, it is also common practice for a user of the database to concerned with viewing orders and sales per customer, or orders and sales to one particular customer. As such, an index is created on the `customer_id` column in the `orders` table to speed the identification of customers.

#### Limitations

The current schema includes a trigger to automatically update inventory every time a shirt is sold. In order to avoid out-of-stock situations, our trigger uses a CASE statement that automatically replenishes the stock to 5 if a customer orders a quantity of shirts larger than the inventory on hand. In other words, if a store has 3 shirts in stock but the customer wants to buy 5, the store automatically orders 8 shirts: 3 to send to the customer (so the order is honored) and 5 to keep in inventory. We assume instant delivery of those 8 shirts, which in real life probably won't be possible: a real life scenario would probably involve notifying the customer of the out-of-stock situation, asking them to come back after a few days to allow for delivery time of the replenishment order.
