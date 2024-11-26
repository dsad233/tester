SELECT i.REST_ID as "REST_ID", i.REST_NAME as "REST_NAME", i.FOOD_TYPE as "FOOD_TYPE", i.FAVORITES as "FAVORITES", i.ADDRESS as "ADDRESS", round(avg(r.REVIEW_SCORE	), 2) as "REVIEW_SCORE"
from REST_INFO i inner join REST_REVIEW r on i.REST_ID = r.REST_ID
group by 1
having i.ADDRESS like "서울%"
order by 6 desc, 4 desc