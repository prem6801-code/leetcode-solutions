-- Last updated: 24/07/2026, 23:49:09
# Write your MySQL query statement below
select EmployeeUNI.unique_id,Employees.name
from Employees 
Left Outer Join EmployeeUNI
ON EmployeeUNI.id = Employees.id 