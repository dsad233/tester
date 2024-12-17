SELECT a.APNT_NO as "APNTNO", p.PT_NAME as "PTNAME", p.PT_NO as "PTNO", a.MCDP_CD as "MCDPCD", d.DR_NAME as "DRNAME", a.APNT_YMD as "APNTYMD"
from PATIENT p inner join APPOINTMENT a on p.PT_NO = a.PT_NO inner join DOCTOR d on d.DR_ID = a.MDDR_ID
where DATE_FORMAT(a.APNT_YMD, "%Y-%m-%d") = "2022-04-13" and a.APNT_CNCL_YN = "N"
order by 6 asc
