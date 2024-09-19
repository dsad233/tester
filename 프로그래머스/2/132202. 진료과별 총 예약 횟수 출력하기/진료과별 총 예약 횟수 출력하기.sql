SELECT MCDP_CD "진료과 코드", count(*) "5월예약건수"
from APPOINTMENT
where date_format(APNT_YMD, '%Y-%m') = "2022-05"
group by 1
order by 2 asc, 1
