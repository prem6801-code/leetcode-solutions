-- Last updated: 24/07/2026, 23:49:34
select users.user_id as buyer_id,
users.join_date,
case when temp.ordercount is null then 0 else temp.ordercount end orders_in_2019
from 
(   
    select buyer_id,count(buyer_id) as ordercount
    from orders 
    where order_date between '2019-01-01' and '2019-12-31'
    group by buyer_id
) as temp 
right join users
on temp.buyer_id = users.user_id