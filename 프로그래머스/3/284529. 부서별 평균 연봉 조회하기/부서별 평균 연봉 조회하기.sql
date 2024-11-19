select d.DEPT_ID as "DEPT_ID", d.DEPT_NAME_EN as "DEPT_NAME_EN", round(avg(e.SAL)) as "AVG_SAL"
from HR_DEPARTMENT d inner join HR_EMPLOYEES e on d.DEPT_ID = e.DEPT_ID
group by 1
order by 3 desc