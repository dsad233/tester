SELECT u.USER_ID as "USER_ID", u.NICKNAME as "NICKNAME", sum(b.PRICE) as "TOTAL_SALES"
from USED_GOODS_BOARD b inner join USED_GOODS_USER u on b.WRITER_ID = u.USER_ID
where b.STATUS = "DONE"
group by 1
having TOTAL_SALES >= 700000
order by 3 asc