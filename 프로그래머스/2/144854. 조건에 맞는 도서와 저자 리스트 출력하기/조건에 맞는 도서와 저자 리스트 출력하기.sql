SELECT b.book_id, a.AUTHOR_NAME, DATE_FORMAT(b.PUBLISHED_DATE, '%Y-%m-%d') PUBLISHED_DATE
from BOOK b inner join AUTHOR a on b.author_id = a.author_id
where b.CATEGORY = "경제"
order by 3 asc