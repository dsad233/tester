SELECT count(ANIMAL_ID) as count
from ANIMAL_INS
where DATETIME is not null
order by DATETIME asc