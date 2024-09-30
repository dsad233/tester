SELECT b.CATEGORY, sum(s.SALES) TOTAL_SALES
from BOOK b inner join BOOK_SALES s on b.BOOK_ID = s.BOOK_ID
where DATE_FORMAT(s.SALES_DATE, "%Y-%m") = '2022-01'
group by 1
order by 1 asc