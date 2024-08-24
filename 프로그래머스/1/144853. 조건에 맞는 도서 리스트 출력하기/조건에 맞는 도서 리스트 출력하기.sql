SELECT BOOK_ID, date_format(PUBLISHED_DATE, '%Y-%m-%d')
from BOOK
where published_date Like "2021%" and category = "인문"
order by published_date asc