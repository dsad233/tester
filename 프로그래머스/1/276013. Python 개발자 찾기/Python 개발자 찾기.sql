SELECT ID, EMAIL, FIRST_NAME, LAST_NAME
FROM DEVELOPER_INFOS 
where SKILL_1 = "Python" or SKILL_2 = "Python" or SKILL_3 = "Python"
order by 1 asc