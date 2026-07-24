-- Last updated: 24/07/2026, 23:51:07
-- select round(sum(tiv_2016),2) as tiv_2016
-- from
-- (
--     select I2.pid,I2.tiv_2015,I2.tiv_2016,I2.lat,I2.lon
--     from Insurance I1 inner join Insurance I2
--     on I1.tiv_2015 = I2.tiv_2015 
--     where (I2.lat,I2.lon) in (
--         select lat,lon
--         from Insurance
--         group by lat,lon
--         having count(*)<2
--     ) 
--     group by I2.pid
-- ) as temp 


SELECT ROUND(SUM(tiv_2016), 2) AS tiv_2016
FROM Insurance i
WHERE tiv_2015 IN (
    SELECT tiv_2015
    FROM Insurance
    GROUP BY tiv_2015
    HAVING COUNT(*) > 1
)
AND (lat, lon) IN (
    SELECT lat, lon
    FROM Insurance
    GROUP BY lat, lon
    HAVING COUNT(*) = 1
);

