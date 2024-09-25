select count(n.FISH_NAME) FISH_COUNT, n.FISH_NAME
from FISH_INFO i inner join FISH_NAME_INFO n on i.FISH_TYPE = n.FISH_TYPE
group by 2
order by 1 desc