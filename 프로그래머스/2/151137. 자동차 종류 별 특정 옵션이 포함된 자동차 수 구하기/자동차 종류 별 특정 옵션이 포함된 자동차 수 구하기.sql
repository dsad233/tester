SELECT CAR_TYPE, count(*) CARS
from CAR_RENTAL_COMPANY_CAR
where OPTIONS Like "%통풍시트%" or OPTIONS Like "%열선시트%" or OPTIONS Like "%가죽시트%"
group by 1
order by 1 asc