select  sum(g.SCORE) SCORE, e.EMP_NO, e.EMP_NAME, e.POSITION, e.EMAIL
from HR_DEPARTMENT d inner join HR_EMPLOYEES e on d.DEPT_ID = e.DEPT_ID inner join HR_GRADE g on e.EMP_NO = g.EMP_NO
group by 2
order by 1 desc
limit 1