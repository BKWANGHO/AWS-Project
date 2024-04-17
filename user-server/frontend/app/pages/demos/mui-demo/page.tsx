"use client"

import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { deflate } from 'zlib';
import MuiDemoRows from '@/app/components/demo/module/mui-demo-rows'
import MuiDemoColumns from '@/app/components/demo/module/mui-demo-columns';
import { NextPage } from 'next';

// const columns: GridColDef [] =


 const DataGridDemoPage : NextPage =()=> {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={MuiDemoRows()}
        columns={MuiDemoColumns()}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}

export default DataGridDemoPage