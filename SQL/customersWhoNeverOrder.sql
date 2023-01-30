Table: Customers

+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| id          | int     |
| name        | varchar |
+-------------+---------+
id is the primary key column for this table.
Each row of this table indicates the ID and name of a customer.
 

Table: Orders

+-------------+------+
| Column Name | Type |
+-------------+------+
| id          | int  |
| customerId  | int  |
+-------------+------+
id is the primary key column for this table.
customerId is a foreign key of the ID from the Customers table.
Each row of this table indicates the ID of an order and the ID of the customer who ordered it.
 

Write an SQL query to report all customers who never order anything.

Return the result table in any order.

The query result format is in the following example.

 

Example 1:

Input: 
Customers table:
+----+-------+
| id | name  |
+----+-------+
| 1  | Joe   |
| 2  | Henry |
| 3  | Sam   |
| 4  | Max   |
+----+-------+
Orders table:
+----+------------+
| id | customerId |
+----+------------+
| 1  | 3          |
| 2  | 1          |
+----+------------+
Output: 
+-----------+
| Customers |
+-----------+
| Henry     |
| Max       |
+-----------+



--solution using inner join--
--the below creates a table of customers who have ordered based on their id, then selects the name of customers from the customer table who are NOT in that table. 
SELECT name as Customers FROM customers WHERE customers.id NOT IN (SELECT customers.id FROM customers INNER JOIN orders ON customers.id = orders.customerId)


--solution using left join--
-- left join returns all records from the left table and matching records from table 2.  aka table 1 or the table you are selecting FROM. table 2 is the table you are left joining ON.

-- the below creates a table of table 1 + matching records from table 2, then filters out all rows whose id are null. All of the orders.id are NOT NULL, therefore we filter out all of the matching records that are found in the order table. 
SELECT name as Customers FROM customers LEFT JOIN orders ON customers.id = orders.customerId WHERE orders.id IS NULL


-- official solution --
SELECT name as Customers FROM customers WHERE customers.id NOT IN (SELECT customerId FROM orders)