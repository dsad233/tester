SELECT PT_NAME, PT_NO, GEND_CD, AGE, IFNULL(TLNO, "NONE") TLNO
from PATIENT
where AGE <= 12 and GEND_CD = "W"
order by 4 desc, 1 asc