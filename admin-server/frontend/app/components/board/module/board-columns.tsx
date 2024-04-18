import { Link, Typography } from '@mui/material'
import { GridRowId, GridColDef } from '@mui/x-data-grid'
import { rowSelectionStateInitializer } from '@mui/x-data-grid/internals'
import { IBoard } from '../model/board'
import { PG } from '../../common/enums/PG'


interface CellType {
    row: IBoard
}



export default function boardsColums(): GridColDef[] {

    return [
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'id',
            headerName: 'ID',
            renderCell: ({ row }: CellType) => <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}>  {row.id}</Typography>

        },
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'boardname',
            headerName: '게시판이름',
            renderCell: ({ row }: CellType) => <Typography textAlign="center"
                sx={{ fontSize: "1.5rem" }}><Link href={`${PG.BOARD}/detail/${row.id}`} > {row.title}</Link></Typography>


        },
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'boardType',
            headerName: '게시판 타입',
            renderCell: ({ row }: CellType) => <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}>  {row.description}</Typography>

        },
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'regDate',
            headerName: '생성일',
            renderCell: ({ row }: CellType) => <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}>  {row.regDate}</Typography>
        },
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'modDate',
            headerName: '수정일',
            renderCell: ({ row }: CellType) => <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}>  {row.modDate}</Typography>
        }



    ]

}