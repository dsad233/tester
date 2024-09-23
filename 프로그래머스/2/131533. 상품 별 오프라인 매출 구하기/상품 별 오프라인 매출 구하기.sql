SELECT p.PRODUCT_CODE, sum(p.PRICE * o.SALES_AMOUNT) SALES
from PRODUCT p inner join OFFLINE_SALE o on p.PRODUCT_ID = o.PRODUCT_ID
group by 1
order by 2 desc, 1 asc