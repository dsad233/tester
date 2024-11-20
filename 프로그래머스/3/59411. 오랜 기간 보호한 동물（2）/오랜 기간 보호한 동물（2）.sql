SELECT i.ANIMAL_ID as "ANIMAL_ID", i.NAME as "NAME"
from ANIMAL_INS i inner join ANIMAL_OUTS o on i.ANIMAL_ID = o.ANIMAL_ID
order by DATEDIFF(DATE_FORMAT(o.DATETIME, "%Y-%m-%d"), DATE_FORMAT(i.DATETIME, "%Y-%m-%d")) desc
limit 2