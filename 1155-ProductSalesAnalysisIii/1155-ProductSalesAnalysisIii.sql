-- Last updated: 24/07/2026, 23:49:51
select product_id,year as first_year,quantity,price
from Sales s
where (s.product_id,s.year) 
in 
(
select product_id,year
from     
    (
        select product_id,year,
        ROW_NUMBER() OVER (
            PARTITION BY product_id
            ORDER BY year
        ) AS RowNum
        from Sales
    ) as temp
where RowNum = 1
)

