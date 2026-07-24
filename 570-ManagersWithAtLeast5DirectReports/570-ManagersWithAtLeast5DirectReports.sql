-- Last updated: 24/07/2026, 23:51:11
select name
from(
select e1.id,e1.name
from Employee e1 inner join Employee e2
on e1.id = e2.managerId
group by id
having count(*) >= 5
) as tmp