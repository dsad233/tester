SELECT f.FLAVOR as "FLAVOR"
from FIRST_HALF f inner join JULY j on f.FLAVOR	= j.FLAVOR
group by f.SHIPMENT_ID, f.FLAVOR
order by f.TOTAL_ORDER + sum(j.TOTAL_ORDER) desc
limit 3