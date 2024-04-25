import { Link, Typography } from '@mui/material'
import { rowSelectionStateInitializer } from '@mui/x-data-grid/internals'
import { IArticle } from '../model/article'
import { GridColDef } from '@mui/x-data-grid'
import { PG } from '../../common/enums/PG'
import { MyTypography } from '../../common/style/cell'


interface CellType{
    row : IArticle 
}



export default function articlesColums(): GridColDef[] {

    return [
        {
        flex: 0.04,
        minWidth: 30,
        sortable: false,
        field: 'id',
        headerName: 'ID',
        renderCell : ({row}:CellType) => MyTypography(row.id,"1rem")
    },
    {
        flex: 0.04,
        minWidth: 30,
        sortable: false,
        field: 'title',
        headerName: '제목',
        renderCell : ({row}:CellType) => <Typography textAlign="center" sx={{ fontSize: "1rem" }}> 
        <Link href={`${PG.ARTICLE}/detail/${row.id}`}> {row.title}</Link></Typography>
        
    },
    {
        flex: 0.04,
        minWidth: 30,
        sortable: false,
        field: 'content',
        headerName: '내용',
        renderCell : ({row}:CellType) => MyTypography(row.content,"1rem")
    },
    {
        flex: 0.04,
        minWidth: 30,
        sortable: false,
        field: 'writer',
        headerName: '작성자',
        renderCell : ({row}:CellType) => MyTypography(row.writer,"1rem")
        
    },
    {
        flex: 0.04,
        minWidth: 30,
        sortable: false,
        field: 'board',
        headerName: '게시판',
        renderCell : ({row}:CellType) => MyTypography(row.board,"1rem")
    },
    {
        flex: 0.04,
        minWidth: 30,
        sortable: false,
        field: 'regDate',
        headerName: '생성일',
        renderCell : ({row}:CellType) => MyTypography(row.regDate,"1rem")
    },
    {
        flex: 0.04,
        minWidth: 30,
        sortable: false,
        field: 'modDate',
        headerName: '수정일',
        renderCell : ({row}:CellType) => MyTypography(row.modDate,"1rem")
    },
    {
        flex: 0.04,
        minWidth: 30,
        sortable: false,
        field: 'delete',
        headerName: '삭제',
        renderCell : ({row}:CellType) => <Link href='#'>{MyTypography("삭제","1rem")}</Link>
    }


]

}