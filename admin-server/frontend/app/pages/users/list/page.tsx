'use client'

import { findAllUsers, userCount } from "@/app/components/users/service/user-service";
import { getAllUsers, getUserCount } from "@/app/components/users/service/user-slice";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import UsersColums from "@/app/components/users/module/user-columns";


const UsersPage: NextPage = () => {
  const [pageSize, setPageSize] = useState(5);

  const dispatch = useDispatch()
  const allUsers: [] = useSelector(getAllUsers)
  const getuserCount: number = useSelector(getUserCount)

  if (allUsers !== undefined) {
    console.log('allUsers is not undefined')
  } else {
    console.log('allUsers is undefined')
  }

  useEffect(() => {
    dispatch(userCount())
    dispatch(findAllUsers(1))
  }, [])


  return (<>
    <h1>사용자 목록</h1>
    <h1>사용자 수 : {getuserCount}</h1>
    <div style={{ height: "100%", width: "100%" }}>
      {allUsers && <DataGrid // 🔥 4
        rows={allUsers}
        columns={UsersColums()}
        pageSizeOptions={[5, 10, 20]} // 4-1
        checkboxSelection
      />}
    </div>

  </>)

}
export default UsersPage;