-- Last updated: 24/07/2026, 23:49:50
select customer_id
from Customer
group by customer_id
having count(distinct product_key) = (SELECT COUNT(*) FROM Product)
