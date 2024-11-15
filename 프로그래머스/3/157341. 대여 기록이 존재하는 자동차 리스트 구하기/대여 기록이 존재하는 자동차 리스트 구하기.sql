SELECT distinct c.CAR_ID as "CAR_ID"
from CAR_RENTAL_COMPANY_CAR c inner join CAR_RENTAL_COMPANY_RENTAL_HISTORY r on c.CAR_ID = r.CAR_ID
where c.CAR_TYPE = "세단" and DATE_FORMAT(r.START_DATE, '%m') like "%10%"
order by 1 desc