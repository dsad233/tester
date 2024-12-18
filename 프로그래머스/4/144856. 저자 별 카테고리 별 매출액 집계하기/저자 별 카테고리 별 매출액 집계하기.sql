SELECT a.AUTHOR_ID as "AUTHOR_ID", a.AUTHOR_NAME as "AUTHOR_NAME", b.CATEGORY as "CATEGORY", sum(bs.SALES * b.PRICE) as "TOTAL_SALES"
from BOOK b inner join AUTHOR a on b.AUTHOR_ID = a.AUTHOR_ID inner join BOOK_SALES bs on b.BOOK_ID = bs.BOOK_ID
where DATE_FORMAT(bs.SALES_DATE, "%Y-%m") = "2022-01"
group by a.AUTHOR_NAME, 3
order by 1 asc, 3 desc
