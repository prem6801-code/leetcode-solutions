-- Last updated: 24/07/2026, 23:49:04
select u.name,case when t.travelled_distance is null then 0 else t.travelled_distance end as travelled_distance 
from
(   
    select user_id,sum(distance) as travelled_distance
    from Rides
    group by user_id
) as t right join Users u
on t.user_id = u.id
order by t.travelled_distance desc,u.name 
