import { Link, Typography } from '@mui/material'
import {GridRowId,GridColDef} from '@mui/x-data-grid'
import { rowSelectionStateInitializer } from '@mui/x-data-grid/internals'
import { IUser } from '../model/user.model'
import { PG } from '../../common/enums/PG'


interface CellType{
    row : IUser 
}



export default function UsersColums(): GridColDef[] {

    return [
        {
        flex: 0.04,
        minWidth: 30,
        sortable: false,
        field: 'id',
        headerName: 'ID',
        renderCell : ({row}:CellType) => <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}>  {row.id}</Typography>
        
    },
    {
        flex: 0.04,
        minWidth: 30,
        sortable: false,
        field: 'username',
        headerName: '아이디',
        renderCell : ({row}:CellType) => <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}>
            <Link href={`${PG.USER}/detail/${row.id}`}>  {row.username}</Link></Typography>
            
        
    },
    {
        flex: 0.04,
        minWidth: 30,
        sortable: false,
        field: 'password',
        headerName: '비밀번호',
        renderCell : ({row}:CellType) => <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}>  {'******'}</Typography>
    },
    {
        flex: 0.04,
        minWidth: 30,
        sortable: false,
        field: 'name',
        headerName: '이름',
        renderCell : ({row}:CellType) => <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}>  {row.name}</Typography>
        
    },
    {
        flex: 0.04,
        minWidth: 30,
        sortable: false,
        field: 'phone',
        headerName: '핸드폰번호',
        renderCell : ({row}:CellType) => <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}>  {row.phone}</Typography>
    },
    {
        flex: 0.04,
        minWidth: 30,
        sortable: false,
        field: 'job',
        headerName: '직업',
        renderCell : ({row}:CellType) => <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}>  {row.job}</Typography>
    },
    {
        flex: 0.04,
        minWidth: 30,
        sortable: false,
        field: 'regDate',
        headerName: '생성일',
        renderCell : ({row}:CellType) => <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}>  {row.regDate}</Typography>
    },
    {
        flex: 0.04,
        minWidth: 30,
        sortable: false,
        field: 'modDate',
        headerName: '수정일',
        renderCell : ({row}:CellType) => <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}>  {row.modDate}</Typography>
    }

]

}