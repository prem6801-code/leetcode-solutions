-- Last updated: 24/07/2026, 23:52:44
select round(score,2) as score,Dense_Rank() over(order by score desc) as "rank"
from Scores
