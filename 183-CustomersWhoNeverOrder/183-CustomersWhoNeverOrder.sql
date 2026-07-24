-- Last updated: 24/07/2026, 23:52:40
# Write your MySQL query statement below
select c.name as Customers
from Customers c
left join Orders o
on c.id = o.customerId
where o.customerId is null