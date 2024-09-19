SELECT ANIMAL_TYPE, count(ANIMAL_TYPE) count
from ANIMAL_INS
group by 1
order by ANIMAL_TYPE asc