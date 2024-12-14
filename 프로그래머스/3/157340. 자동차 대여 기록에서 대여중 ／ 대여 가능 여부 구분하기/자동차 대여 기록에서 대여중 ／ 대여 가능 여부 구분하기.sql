SELECT CAR_ID, case 
when CAR_ID in (
    select CAR_ID
    from CAR_RENTAL_COMPANY_RENTAL_HISTORY
    where "2022-10-16" between DATE_FORMAT(START_DATE, "%Y-%m-%d") and DATE_FORMAT(END_DATE, "%Y-%m-%d")
) then "대여중"
else "대여 가능"
end as "AVAILABILITY"
from CAR_RENTAL_COMPANY_RENTAL_HISTORY
group by 1
order by 1 desc