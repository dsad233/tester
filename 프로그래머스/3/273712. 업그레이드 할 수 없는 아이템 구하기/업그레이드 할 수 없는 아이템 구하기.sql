select t.ITEM_ID as "ITEM_ID", i.ITEM_NAME as "ITEM_NAME", i.RARITY as "RARITY"
from ITEM_INFO i inner join ITEM_TREE t on i.ITEM_ID = t.ITEM_ID
where i.ITEM_ID not in (
    select PARENT_ITEM_ID
    from ITEM_TREE
    where PARENT_ITEM_ID is not null
)
order by 1 desc