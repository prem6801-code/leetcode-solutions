-- Last updated: 24/07/2026, 23:51:10
# Write your MySQL query statement below
select name,bonus
-- select *
from Employee as e
Left Join Bonus as b 
on e.empId = b.empId 
where b.bonus <1000 or b.bonus is null