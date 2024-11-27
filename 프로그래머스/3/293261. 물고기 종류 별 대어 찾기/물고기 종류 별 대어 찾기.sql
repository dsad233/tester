select i.ID as "ID", n.FISH_NAME as "FISH_NAME", i.LENGTH as "LENGTH"
from FISH_INFO i inner join FISH_NAME_INFO n on i.FISH_TYPE = n.FISH_TYPE
where (i.FISH_TYPE, i.LENGTH) in (
    select FISH_TYPE, max(LENGTH)
    from FISH_INFO
    where LENGTH is not null
    group by 1
)
order by 1 asc