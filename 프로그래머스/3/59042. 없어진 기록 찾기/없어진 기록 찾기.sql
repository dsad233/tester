SELECT o.ANIMAL_ID as "ANIMAL_ID", o.NAME as "NAME"
from ANIMAL_INS i right join ANIMAL_OUTS o on i.ANIMAL_ID = o.ANIMAL_ID
where i.ANIMAL_ID is null
