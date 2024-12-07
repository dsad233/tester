select count(*) as "FISH_COUNT", max(LENGTH) as "MAX_LENGTH", FISH_TYPE
from FISH_INFO
group by 3
having avg(ifnull(LENGTH, 10)) >= 33
order by 3 asc