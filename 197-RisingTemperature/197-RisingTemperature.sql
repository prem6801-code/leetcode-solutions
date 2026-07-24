-- Last updated: 24/07/2026, 23:52:36
# Write your MySQL query statement below
SELECT e2.id
FROM Weather AS e1 
LEFT JOIN Weather AS e2
  ON e1.recordDate = DATE_SUB(e2.recordDate, INTERVAL 1 DAY)
  AND e1.temperature < e2.temperature
WHERE e2.id IS NOT NULL;