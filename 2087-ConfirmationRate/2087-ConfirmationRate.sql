-- Last updated: 24/07/2026, 23:48:39
select s.user_id,
round
(
    (
        (case when temp.active_count is null then 0 else temp.active_count end) 
        / 
        (case when temp.total is null then 1 else temp.total end)
    )
,2
) confirmation_rate
from    
    (
        select user_id,
        COUNT(CASE WHEN action = 'confirmed' THEN 1 END) AS active_count ,
        count(1) as total
        from Confirmations
        group by user_id
    ) 
as temp right join Signups s 
on temp.user_id=s.user_id