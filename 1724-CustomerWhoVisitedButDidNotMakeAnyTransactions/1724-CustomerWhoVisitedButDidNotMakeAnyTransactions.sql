-- Last updated: 24/07/2026, 23:48:57
# Write your MySQL query statement below
select customer_id , count(visit_id) as count_no_trans
from Visits 
where visit_id  not in (select distinct visit_id from Transactions )
Group by  customer_id

