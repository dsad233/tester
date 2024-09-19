SELECT ANIMAL_ID, NAME, if((SEX_UPON_INTAKE Like "Neutered%" or SEX_UPON_INTAKE Like "Spayed%"), 'O', 'X') "중성화"
from ANIMAL_INS