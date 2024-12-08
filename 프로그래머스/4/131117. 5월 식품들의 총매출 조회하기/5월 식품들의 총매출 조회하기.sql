SELECT p.PRODUCT_ID as "PRODUCT_ID", p.PRODUCT_NAME as "PRODUCT_NAME", sum(o.AMOUNT * p.PRICE) as "TOTAL_SALES"
from FOOD_PRODUCT p inner join FOOD_ORDER o on p.PRODUCT_ID = o.PRODUCT_ID
where DATE_FORMAT(o.PRODUCE_DATE, "%Y-%m") = "2022-05"
group by 1, 2
order by 3 desc, 1 asc
