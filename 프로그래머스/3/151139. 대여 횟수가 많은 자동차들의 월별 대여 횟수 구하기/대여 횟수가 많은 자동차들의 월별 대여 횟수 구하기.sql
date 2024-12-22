SELECT month(START_DATE) as "MONTH", CAR_ID, count(CAR_ID) as "RECORDS"
from CAR_RENTAL_COMPANY_RENTAL_HISTORY 
where CAR_ID in (
    select CAR_ID
    from CAR_RENTAL_COMPANY_RENTAL_HISTORY
    where DATE_FORMAT(START_DATE, "%Y-%m") >= "2022-08" and DATE_FORMAT(START_DATE, "%Y-%m") <= "2022-10"
    group by 1
    having count(CAR_ID) >= 5
) and DATE_FORMAT(START_DATE, "%Y-%m") >= "2022-08" and DATE_FORMAT(START_DATE, "%Y-%m") <= "2022-10"
group by 1, 2
order by 1 asc, 2 desc

