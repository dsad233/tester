SELECT date_format(DATETIME, '%H') HOUR, count(*) COUNT
from ANIMAL_OUTS
where date_format(DATETIME, '%H') >= "09" and date_format(DATETIME, '%H') < "20"
group by 1
order by 1 asc