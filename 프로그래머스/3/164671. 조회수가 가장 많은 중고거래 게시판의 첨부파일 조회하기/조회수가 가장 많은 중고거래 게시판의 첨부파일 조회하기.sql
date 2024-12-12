SELECT concat("/home/grep/src/", b.BOARD_ID, "/", f.FILE_ID, f.FILE_NAME, f.FILE_EXT) as "FILE_PATH"
from USED_GOODS_BOARD b inner join USED_GOODS_FILE f on b.BOARD_ID = f.BOARD_ID
where b.VIEWS =  (
    select max(VIEWS) as "VIEWS"
    from USED_GOODS_BOARD
)
order by 1 desc