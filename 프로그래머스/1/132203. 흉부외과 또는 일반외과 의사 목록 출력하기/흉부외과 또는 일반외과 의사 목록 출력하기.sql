SELECT DR_NAME, DR_ID, MCDP_CD, DATE_FORMAT(HIRE_YMD, '%Y-%m-%d')
from DOCTOR
where MCDP_CD in ('CS', 'GS')
order by 4 desc, 1 asc