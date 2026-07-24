-- Last updated: 24/07/2026, 23:52:47
# Write your MySQL query statement below
select p.firstName,p.lastName,a.city,a.state
from Person p
left join Address a
on p.personId  = a.personId
