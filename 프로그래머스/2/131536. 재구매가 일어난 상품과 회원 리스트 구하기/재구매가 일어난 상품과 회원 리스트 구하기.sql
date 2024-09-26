SELECT USER_ID, PRODUCT_ID
from ONLINE_SALE
group by 1, 2
having count(PRODUCT_ID) > 1 and count(USER_ID) > 1
order by 1 asc, PRODUCT_ID desc
