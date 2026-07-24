-- Last updated: 24/07/2026, 23:50:58
select customer_number
from
(
select customer_number, COUNT(1) AS ordercount, DENSE_RANK() OVER (ORDER BY COUNT(1) DESC) AS rnk
from orders
group by customer_number
) as temp
where rnk = 1


