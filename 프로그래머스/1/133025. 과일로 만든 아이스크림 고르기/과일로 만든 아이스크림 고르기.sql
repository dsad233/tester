SELECT f.FLAVOR
from FIRST_HALF f inner join ICECREAM_INFO i on f.FLAVOR = i.FLAVOR
where f.TOTAL_ORDER >= 3000 and f.FLAVOR in ('strawberry', 'melon')
group by 1
order by f.TOTAL_ORDER desc 