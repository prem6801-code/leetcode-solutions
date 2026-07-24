-- Last updated: 24/07/2026, 23:49:48
# Write your MySQL query statement below
select Product.product_name,Sales.year,sales.price
from product 
Inner join Sales
On Sales.product_id = product.product_id