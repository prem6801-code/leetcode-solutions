-- Last updated: 24/07/2026, 23:52:43
select e2.name as Employee
from Employee e1 
inner join Employee e2
on e2.managerId = e1.id
where e1.salary < e2.salary