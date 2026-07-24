-- Last updated: 24/07/2026, 23:49:36
select distinct author_id as id from Views
where author_id = viewer_id 
order by id;
