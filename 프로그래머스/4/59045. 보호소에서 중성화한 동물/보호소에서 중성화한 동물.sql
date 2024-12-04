SELECT i.ANIMAL_ID, i.ANIMAL_TYPE, i.NAME
from ANIMAL_INS i inner join ANIMAL_OUTS o on i.ANIMAL_ID = o.ANIMAL_ID
where i.SEX_UPON_INTAKE in ("Intact Male", "Intact Female") and o.SEX_UPON_OUTCOME in ("Neutered Male", "Spayed Female")