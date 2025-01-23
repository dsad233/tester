SELECT year(o.sales_date) as "YEAR", month(o.sales_date) as "MONTH", u.GENDER as "GENDER", count(distinct o.USER_ID) as "USERS"
from USER_INFO u inner join ONLINE_SALE o on u.USER_ID = o.USER_ID
where u.GENDER is not null
group by 1, 2, 3
order by 1, 2, 3 
